import EventBus from "@/components/common/EventBus";
import MyPagination from "@/components/common/MyPagination";
import MyProductTable from "@/components/common/MyProductTable";
import MyRadioGroup from "@/components/common/MyRadioGroup";
import ScrollButtons from "@/components/common/ScrollButton";
import { useProductPage } from "@/hook/ProductPage";
import { userManagerProduct } from "@/hook/ProductPage/useManagerProduct";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import EbayToolbar from "./compoents/EbayToolbar";
import EBaySetting from "./compoents/EpaySetting";
import MultileButton from "./compoents/MultileButton";
import styles from "./style.module.scss";
import { useSetupEbay } from "@/hook/ProductPage/useSetupEbay";

const ProductPage = (props: any) => {
  const {
    getProduct,
    products,
    deleteProduct,
    selectedIds,
    handleCheckboxChange,
    handleSelectAll,
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
    getCategorySuggestions,
    getfulfillmentPolicy,
    getReturnPolicies,
    getInventoryLocations,
    invertoryLocation,
    aspects,
    categoryTree,
    isLoadingAspects,
    categorySuggestion,
    fulfillmentPolicy,
    returnPolicy,
    getPaymentPolicy,
    paymentPolicy,
    loadingPriceCalc,
    handlePriceCalculation,
  } = userManagerProduct();
  const { t } = useTranslation();
  const { gender, setGender, page, setPage } = useProductPage();
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    EventBus.addEventListener("getProduct", getProduct);
    return () => {
      EventBus.removeEventListener("getProduct", getProduct);
    };
  }, []);
  const options = [
    {
      label: t("title_all"),
      value: "1",
    },
    {
      label: "10",
      value: "10",
    },
    {
      label: "50",
      value: "50",
    },
    {
      label: "100",
      value: "100",
    },
  ];
  return (
    <Box className={styles.Container}>
      <Box className={styles.wrapCenter}>
        <Box className={styles.leftPane}>
          <EBaySetting />
        </Box>
        <Box className={styles.centerPane}>
          <MultileButton
            deleteProduct={deleteProduct}
            loadingDelProduct={loadingDelProduct}
            addProductToEbay={addProductToEbay}
            loadingUpebay={loadingUpebay}
            loadingPriceCalc={loadingPriceCalc}
            handlePriceCalculation={handlePriceCalculation}
          />
        </Box>
        <Box className={styles.rightPane}>
          <EbayToolbar />
        </Box>
      </Box>
      <Box className={styles.wrapRadioGroup}>
        <Box className={styles.wrapPagination}>
          <MyRadioGroup
            label={t("display")}
            name="gender"
            value={gender}
            onChange={setGender}
            options={options}
          />
          <MyPagination
            currentPage={page}
            totalPages={10}
            onPageChange={(page) => {
              setPage(page);
            }}
          />
        </Box>
      </Box>
      <Box className={styles.table}>
        <MyProductTable
          products={products}
          handleCheckboxChange={handleCheckboxChange}
          handleSelectAll={handleSelectAll}
          selectedIds={selectedIds}
          checkAll={checkAll}
          setCheckAll={setCheckAll}
          onChange={(value) => {
            setItemSelect(value);
            getCategoryTree();
            getfulfillmentPolicy();
            getReturnPolicies();
            getPaymentPolicy();
            getInventoryLocations();
            getCategorySuggestions(value.name);
          }}
          itemSelect={itemSelect}
          editProduct={editProduct}
          handleDeleteProduct={handleDeleteProduct}
          categoryTree={categoryTree}
          getItemAspectsForCategory={getItemAspectsForCategory}
          getCategorySuggestions={getCategorySuggestions}
          aspects={aspects}
          isLoadingAspects={isLoadingAspects}
          categorySuggestion={categorySuggestion}
          fulfillmentPolicy={fulfillmentPolicy}
          returnPolicy={returnPolicy}
          paymentPolicy={paymentPolicy}
          invertoryLocation={invertoryLocation}
        />
      </Box>
      <Box className={styles.wrapFooterPagination}>
        <MyRadioGroup
          label={t("display")}
          name="gender"
          value={gender}
          onChange={setGender}
          options={options}
        />
        <MyPagination
          currentPage={page}
          totalPages={10}
          onPageChange={(page) => {
            setPage(page);
          }}
        />
      </Box>
      <ScrollButtons />
    </Box>
  );
};

export default ProductPage;
