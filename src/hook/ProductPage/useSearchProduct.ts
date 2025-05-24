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
  const [checkAll, setCheckAll] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<string | null>(
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
      const response = await request.post("/api/product/search", {
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

  const handleCheckboxChange = (idSelect: string, e: React.MouseEvent) => {
    const shiftKey = e.shiftKey;
    const orderedIds = product.map((item) => item.url); // ✅ Tạo tại chỗ
    setSelectedIds((prev) => {
      if (shiftKey && lastSelectedIndex !== null) {
        const startIndex = orderedIds.indexOf(lastSelectedIndex);
        const endIndex = orderedIds.indexOf(idSelect);
        if (startIndex === -1 || endIndex === -1) return prev;
        const [start, end] =
          startIndex < endIndex
            ? [startIndex, endIndex]
            : [endIndex, startIndex];

        const range = orderedIds.slice(start, end + 1);
        const merged = Array.from(new Set([...prev, ...range]));
        return merged;
      }

      const isSelected = prev.includes(idSelect);
      const newSelected = isSelected
        ? prev.filter((id) => id !== idSelect)
        : [...prev, idSelect];

      if (isSelected) {
        setLastSelectedIndex(null);
      } else {
        setLastSelectedIndex(idSelect);
      }

      return newSelected;
    });

    if (shiftKey) {
      setLastSelectedIndex(idSelect);
    }
  };
  const handleSelectAll = () => {
    if (checkAll) {
      // Bỏ chọn tất cả nếu đã chọn hết
      setSelectedIds([]);
    } else {
      // Chọn tất cả
      setSelectedIds(product.map((item, index) => item.url));
    }
    setCheckAll(!checkAll);
  };
  const addProduct = useCallback(async () => {
    try {
      if (selectedIds.length !== 0) {
        setSaveLoadingProduct(true);
        const formData = selectedIds.map((id) => {
          const elm = product.find((elm) => elm.url == id);
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
    loadingSaveProduct,
    handleSelectAll,
    checkAll,
  };
};
