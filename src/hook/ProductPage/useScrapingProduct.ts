import EventBus from "@/components/common/EventBus";
import request from "@/services/Request";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

export const useScrapingProduct = () => {
  const [scapingProduct, setScapingProduct] = useState([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(
    null
  );
  const [loadingScraping, setLoadingScraping] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingAddProduct, setLoadingProduct] = useState(false);

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
    if (selectedIds.length === scapingProduct.length) {
      // Bỏ chọn tất cả nếu đã chọn hết
      setSelectedIds([]);
    } else {
      // Chọn tất cả
      setSelectedIds(scapingProduct.map((item, index) => index));
    }
  };

  const resetSelect = () => {
    setSelectedIds([]);
    setLastSelectedIndex(null);
  };

  const getScrapingProduct = useCallback(async () => {
    try {
      const response = await request.get("/api/scrape-products");
      setScapingProduct(response);
    } catch (error) {}
  }, []);

  const scrapingProduct = useCallback(async () => {
    try {
      setLoadingScraping(true);
      const formData = selectedIds.map((index) => {
        const elm = scapingProduct[index];
        return elm._id;
      });
      const response = await request.post(
        "/api/scrape-products/status/bulk-queue",
        {
          ids: formData,
        }
      );
      resetSelect();
      getScrapingProduct();
      setLoadingScraping(false);
    } catch (error) {
      setLoadingScraping(false);
    }
  }, [selectedIds]);

  const deleteScrapingProduct = useCallback(async () => {
    try {
      setLoadingDelete(true);
      const formData = selectedIds.map((index) => {
        const elm = scapingProduct[index];
        return elm._id;
      });
      const response = await request.delete("/api/scrape-products/bulk", {
        data: { ids: formData },
      });
      resetSelect();
      getScrapingProduct();
      setLoadingDelete(false);
    } catch (error) {
      setLoadingDelete(false);
    }
  }, [selectedIds]);

  const addProductToManager = useCallback(async () => {
    try {
      if (selectedIds.length !== 0) {
        setLoadingProduct(true);
        const formData = selectedIds.map((index) => {
          const elm = scapingProduct[index];
          return {
            url: elm.url,
            name: elm.transform_data.name,
            price: elm.price,
            content: elm.transform_data.content,
            avatar_url: elm.avatar_url,
            image_urls: elm.image_urls,
            out_of_stock: true,
          };
        });
        const response = await request.post(
          "/api/product-upload/bulk",
          formData
        );
        setLoadingProduct(false);
        resetSelect();
        toast.success("Lưu sản phẩm thành công!");
        EventBus.dispatchEvent(new CustomEvent("getProduct"));
      }
    } catch (error) {
      setLoadingProduct(false);
    }
  }, [selectedIds]);
  return {
    selectedIds,
    lastSelectedIndex,
    setLastSelectedIndex,
    handleCheckboxChange,
    scrapingProduct,
    scapingProduct,
    getScrapingProduct,
    loadingScraping,
    deleteScrapingProduct,
    loadingDelete,
    handleSelectAll,
    addProductToManager,
    loadingAddProduct,
  };
};
