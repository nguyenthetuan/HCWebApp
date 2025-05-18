import request from "@/services/Request";
import React, { useCallback, useState } from "react";

export const userManagerProduct = () => {
  const [products, setProduct] = useState([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(
    null
  );
  const [checkAll, setCheckAll] = useState(false);
  const [loadingDelProduct, setLoadingDelProduct] = useState(false);
  const [itemSelect, setItemSelect] = useState();

  const handleSelectAll = () => {
    if (checkAll) {
      // Bỏ chọn tất cả nếu đã chọn hết
      setSelectedIds([]);
    } else {
      // Chọn tất cả
      setSelectedIds(products.map((item, index) => index));
    }
  };

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
        const formData = selectedIds.map((index) => {
          const elm = products[index];
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
  };
};
