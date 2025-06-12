import request from "@/services/Request";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useContextDialog } from "@/context";
import { useSelector } from "react-redux";
import EventBus from "@/components/common/EventBus";
export const userManagerProduct = () => {
  const { t } = useTranslation();
  const { openModalDelete } = useContextDialog();
  const [products, setProduct] = useState([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<string | null>(
    null
  );

  const [checkAll, setCheckAll] = useState(false);
  const [loadingDelProduct, setLoadingDelProduct] = useState(false);
  const [itemSelect, setItemSelect] = useState();
  const [loadingUpebay, setLoadingUpebay] = useState(false);
  const [isLoadingAspects, setLoadingAspects] = useState(false);

  const [categoryTree, setCategoryTree] = useState<any[]>([]);
  const [aspects, setAspects] = useState<any[]>([]);
  const [categorySuggestion, setCategorySuggestion] = useState<any[]>([]);
  const [fulfillmentPolicy, setFullFillmentPolicy] = useState<any[]>([]);
  const [returnPolicy, setReturnPolicy] = useState<any[]>([]);
  const [paymentPolicy, setPalymentPolicy] = useState<any[]>([]);
  const [invertoryLocation, setInventoryLocation] = useState<any[]>([]);
  const config = useSelector((state: any) => state.productManage.config);
  const [loadingPriceCalc, setLoadingPriceCalc] = useState(false); // loading tính toán lại giá

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
    setCheckAll(false);
  };
  const getProduct = async (data) => {
    try {
      const escapeRegex = (str) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      };

      const keyword = data.keyword?.trim() ? escapeRegex(data.keyword.trim()) : "";

      const response = await request.get("/api/product-upload", {
        page: data.page,
        limit: data.pageSize,
        keyword: keyword,
        order: data.order,
        sortBy: data.sortBy
      });
      setProduct(response.data);

      return {
        totalPages: response.totalPages,
        page: response.page,
        pageSize: response.limit,
        total: response.total,
      }
    } catch (error) {
      return {
        totalPages: 0,
        page: 0,
        pageSize: 0,
        total: 0,
      }
    }
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
        getProduct({});
        resetSelect();
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
      resetSelect();
      getProduct({});
      setLoadingUpebay(false);
      toast.success(t("upload_success"));
    } catch (error) {
      setLoadingUpebay(false);
    }
  };
  const editProductRaw = async (formData, id) => {
    // tính cập nhật giá sản phẩm cho một sản phẩm
    try {
      await request.put(`/api/product-upload/${id}`, formData);
    } catch (error) {
      throw error;
    }
  };
  const editProduct = useCallback(
    async (formData, id) => {
      try {
        editProductRaw(formData, id).then(() => {
          EventBus.dispatchEvent(new CustomEvent("getProduct"));
        });
        toast.success(t("edit_success"));
      } catch (error) { }
    },
    [selectedIds]
  );

  const handlePriceCalculation = async () => {
    setLoadingPriceCalc(true);
    const {
      desiredProfitMargin,
      japanShippingFee,
      commissionRate,
      exchangeRate,
    } = config;
    try {
      const productFound = products.filter((p) => selectedIds.includes(p._id));

      const updateRequests = productFound.map((product) => {
        const price_buy = Number(product.price_by) || 0;
        const price =
          ((price_buy + japanShippingFee) / (1 - commissionRate) +
            price_buy * desiredProfitMargin) /
          exchangeRate;

        const formData = { price: price.toFixed(2) };
        return editProductRaw(formData, product._id); // chỉ gọi bản raw
      });

      await Promise.all(updateRequests);
      resetSelect();
      setLoadingPriceCalc(false);
      toast.success(t("edit_success"));
      await getProduct({});
    } catch (error) {
      toast.error(t("edit_error") || "Có lỗi xảy ra");
    } finally {
      setLoadingPriceCalc(false);
    }
  };

  const handleDeleteProduct = async (item) => {
    openModalDelete(item, async (item) => {
      const response = await request.delete("/api/product-upload/bulk", {
        data: { ids: item._id },
      });
      getProduct({});
      resetSelect();
    });
  };

  const getCategoryTree = async () => {
    try {
      const response = await request.get("/api/ebay/category_tree");
      setCategoryTree(response);
    } catch (error) { }
  };

  const getItemAspectsForCategory = async (idCategory) => {
    try {
      setLoadingAspects(true);
      const response = await request.get(
        `/api/ebay/get_item_aspects_for_category?category_id=${idCategory}`
      );
      setLoadingAspects(false);
      setAspects(response.aspects);
    } catch (error) { }
  };

  const getCategorySuggestions = async (nameProduct) => {
    try {
      const response = await request.get(
        `/api/ebay/get_category_suggestions?keyword=${nameProduct}`
      );
      setCategorySuggestion(response.categorySuggestions);
    } catch (error) { }
  };

  const getfulfillmentPolicy = async () => {
    try {
      const response = await request.get(`/api/ebay/fulfillment_policy`);
      setFullFillmentPolicy(response.fulfillmentPolicies);
    } catch (error) { }
  };

  const getReturnPolicies = async () => {
    try {
      const response = await request.get(`/api/ebay/return_policy`);
      setReturnPolicy(response.returnPolicies);
    } catch (error) { }
  };

  const getPaymentPolicy = async () => {
    try {
      const response = await request.get(`/api/ebay/payment_policy`);
      setPalymentPolicy(response.paymentPolicies);
    } catch (error) { }
  };

  const getInventoryLocations = async () => {
    try {
      const response = await request.get(`/api/ebay/inventory_location`);
      setInventoryLocation(response.locations);
    } catch (error) { }
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
    editProduct,
    handleDeleteProduct,
    getCategoryTree,
    getItemAspectsForCategory,
    categoryTree,
    aspects,
    getCategorySuggestions,
    isLoadingAspects,
    categorySuggestion,
    getfulfillmentPolicy,
    fulfillmentPolicy,
    getReturnPolicies,
    getPaymentPolicy,
    returnPolicy,
    paymentPolicy,
    getInventoryLocations,
    invertoryLocation,
    handlePriceCalculation,
    loadingPriceCalc,
  };
};
