import request from "@/services/Request";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

export const userManagerProduct = () => {
  const [products, setProduct] = useState([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<string | null>(
    null
  );
  console.log("products", products);

  const [checkAll, setCheckAll] = useState(false);
  const [loadingDelProduct, setLoadingDelProduct] = useState(false);
  const [itemSelect, setItemSelect] = useState();
  const [loadingUpebay, setLoadingUpebay] = useState(false);

  const handleSelectAll = () => {
    if (checkAll) {
      // Bỏ chọn tất cả nếu đã chọn hết
      setSelectedIds([]);
    } else {
      // Chọn tất cả
      setSelectedIds(products.map((item, index) => item._id));
    }
  };
  const handleCheckboxChange = (idSelect: string, e: React.MouseEvent) => {
    const shiftKey = e.shiftKey;
    const orderedIds = products.map((item) => item._id); // ✅ Tạo tại chỗ
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
  const resetSelect = () => {
    setSelectedIds([]);
    setLastSelectedIndex(null);
  };
  const getProduct = async () => {
    try {
      const response = await request.get("/api/product-upload");
      setProduct(response);
    } catch (error) {}
  };

  const deleteProduct = useCallback(async () => {
    try {
      if (selectedIds.length !== 0) {
        setLoadingDelProduct(true);
        const formData = selectedIds.map((id) => {
          const elm = products.find((elm) => elm._id === id);
          return elm._id;
        });
        const response = await request.delete("/api/product-upload/bulk", {
          data: { ids: formData },
        });
        getProduct();
        setLoadingDelProduct(false);
      }
    } catch (error) {
      setLoadingDelProduct(false);
    }
  }, [selectedIds]);

  const addProductToEbay = async () => {
    try {
      setLoadingUpebay(true);
      const response = await request.post("/api/product-upload/ebay", {
        product_ids: selectedIds,
      });
      setLoadingUpebay(false);
      toast.success("Đẩy sản phẩm thành công");
    } catch (error) {
      setLoadingUpebay(false);
    }
  };

  return {
    products,
    setProduct,
    getProduct,
    handleCheckboxChange,
    handleSelectAll,
    selectedIds,
    deleteProduct,
    loadingDelProduct,
    checkAll,
    setCheckAll,
    setItemSelect,
    itemSelect,
    addProductToEbay,
    loadingUpebay,
  };
};
