import request from "@/services/Request";
import { log } from "node:console";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useScrapingProduct } from "./useScrapingProduct";
import EventBus from "@/components/common/EventBus";

export const useSearchProduct = () => {
  const [foundation, setFoundation] = useState("netsea");
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState([]);

  const [loadingSearch, setLoadingSearch] = useState(false);
  const [loadingSaveProduct, setSaveLoadingProduct] = useState(false);
  const [allProduct, setAllProduct] = useState<any[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(
    null
  );

  const handleChange = (e) => {
    setFoundation(e.target.value);
  };

  const getProductLocal = async () => {
    const localProduct = JSON.parse(localStorage.getItem("PRODUCT_SEARCH"));
    if (localProduct) {
      setProduct(JSON.parse(localStorage.getItem("PRODUCT_SEARCH")));
    }
  };

  const resetSelect = () => {
    setSelectedIds([]);
    setLastSelectedIndex(null);
  };

  const search = useCallback(async () => {
    resetSelect();
    setLoadingSearch(true);
    try {
      const response = await request.post("/product/search", {
        platform_type: foundation,
        keyword: keyword,
        category: category,
      });
      if (response) {
        setLoadingSearch(false);
        setProduct(response);
        localStorage.setItem("PRODUCT_SEARCH", JSON.stringify(response));
      }
    } catch (error) {
      setLoadingSearch(false);
    }
  }, [foundation, keyword, category]);

  const handleCheckboxChange = (index: number, e: React.MouseEvent) => {
    const shiftKey = e.shiftKey;
    setSelectedIds((prev) => {
      if (shiftKey && lastSelectedIndex !== null) {
        // SHIFT + CLICK → chọn từ lastSelectedIndex đến index
        const [start, end] = [lastSelectedIndex, index].sort((a, b) => a - b);
        const range = Array.from(
          { length: end - start + 1 },
          (_, i) => start + i
        );
        const merged = Array.from(new Set([...prev, ...range]));
        return merged;
      }
      // CLICK thường → toggle item
      const isSelected = prev.includes(index);
      const newSelected = isSelected
        ? prev.filter((id) => id !== index)
        : [...prev, index];
      // Nếu đang unselect (bỏ chọn) thì reset lastSelectedIndex
      if (isSelected) {
        setLastSelectedIndex(null);
      } else {
        setLastSelectedIndex(index);
      }

      return newSelected;
    });

    // ✅ Nếu shift đang được giữ, vẫn phải cập nhật lastSelectedIndex mới
    if (shiftKey) {
      setLastSelectedIndex(index);
    }
  };
  const handleSelectAll = () => {
    if (selectedIds.length === product.length) {
      // Bỏ chọn tất cả nếu đã chọn hết
      setSelectedIds([]);
    } else {
      // Chọn tất cả
      setSelectedIds(product.map((item, index) => index));
    }
  };
  const addProduct = useCallback(async () => {
    try {
      if (selectedIds.length !== 0) {
        setSaveLoadingProduct(true);
        const formData = selectedIds.map((index) => {
          const elm = product[index];
          return {
            url: elm.url,
            name: elm.name,
            price: elm.price,
            content: "",
            avatar_url: elm.imageSrc,
            platform_type: elm.platform_type,
          };
        });
        const response = await request.post(
          "/api/scrape-products/bulk",
          formData
        );
        setSaveLoadingProduct(false);
        toast.success("Lưu sản phẩm thành công!");
        EventBus.dispatchEvent(new CustomEvent("getScrapingProduct"));
        resetSelect();
      }
    } catch (error) {
      setSaveLoadingProduct(false);
    }
  }, [selectedIds]);

  return {
    foundation,
    setFoundation,
    keyword,
    setKeyword,
    category,
    setCategory,
    product,
    setProduct,
    selectedIds,
    setSelectedIds,
    lastSelectedIndex,
    setLastSelectedIndex,
    handleChange,
    search,
    handleCheckboxChange,
    getProductLocal,
    addProduct,
    loadingSearch,
    allProduct,
    loadingSaveProduct,
    handleSelectAll,
  };
};
