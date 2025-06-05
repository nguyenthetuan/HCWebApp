import EventBus from "@/components/common/EventBus";
import request from "@/services/Request";
import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useScrapingProduct = () => {
  const { t } = useTranslation();
  const [scapingProduct, setScapingProduct] = useState([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<string | null>(
    null
  );
  const [loadingScraping, setLoadingScraping] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingAddProduct, setLoadingProduct] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [productShow, setProductShow] = useState(null);

  const handleCheckboxChangeScraping = (
    idSelect: string,
    e: React.MouseEvent
  ) => {
    const shiftKey = e.shiftKey;
    const orderedIds = scapingProduct.map((item) => item._id); // ✅ Tạo tại chỗ
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
  const handleCheckboxChange = (idSelect: string, e: React.MouseEvent) => {
    const shiftKey = e.shiftKey;
    const orderedIds = scapingProduct
      .filter((elm) => elm.scrape_status === "success")
      .map((item) => item._id); // ✅ Tạo tại chỗ
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
      setSelectedIds([]);
    } else {
      setSelectedIds(scapingProduct.map((item, index) => item._id));
    }
    setCheckAll(!checkAll);
  };

  const resetSelect = () => {
    setSelectedIds([]);
    setLastSelectedIndex(null);
    setCheckAll(false);
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
      const response = await request.post(
        "/api/scrape-products/status/bulk-queue",
        {
          ids: selectedIds,
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
      const response = await request.delete("/api/scrape-products/bulk", {
        data: { ids: selectedIds },
      });
      resetSelect();
      getScrapingProduct();
      setLoadingDelete(false);
    } catch (error) {
      setLoadingDelete(false);
    }
  }, [selectedIds]);

  const addProductToManager = useCallback(
    async (closeModal) => {
      try {
        if (selectedIds.length !== 0) {
          setLoadingProduct(true);
          const formData = selectedIds.map((id) => {
            const elm = scapingProduct.find((elm) => elm._id === id);
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
          closeModal();
          toast.success(t("save_product"));
          EventBus.dispatchEvent(new CustomEvent("getProduct"));
        }
      } catch (error) {
        setLoadingProduct(false);
      }
    },
    [selectedIds]
  );

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
    handleCheckboxChangeScraping,
    setCheckAll,
    checkAll,
    setProductShow,
    productShow,
  };
};
