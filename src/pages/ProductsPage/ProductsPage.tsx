import EventBus from "@/components/common/EventBus";
import MyPagination from "@/components/common/MyPagination";
import MyProductTable from "@/components/common/MyProductTable";
import MyRadioGroup from "@/components/common/MyRadioGroup";
import ScrollButtons from "@/components/common/ScrollButton";
import { useProductPage } from "@/hook/ProductPage";
import { userManagerProduct } from "@/hook/ProductPage/useManagerProduct";
import { Box, Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import EbayToolbar from "./compoents/EbayToolbar";
import EBaySetting from "./compoents/EpaySetting";
import MultileButton from "./compoents/MultileButton";
import styles from "./style.module.scss";
import { useSetupEbay } from "@/hook/ProductPage/useSetupEbay";
import MyTypography from "@/components/common/MyTypography";
import MySearchInput from "@/components/common/MySearchInput";
import MyButton from "@/components/common/MyButton";
import MySelectDropdow from "@/components/common/MySelectDropdow";
import { arrange, SortByProperty } from "@/untils/dataMockup";
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
    changeQuantityProduct,
    changePriceProduct,
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
  const {
    gender,
    setGender,
    page,
    setPage,
    pageSize,
    setPageSize,
    totalPages,
    setTotalPages,
    totalProduct,
    setTotalProduct,
    textSearch,
    setTextSearch,
    sortBy,
    setSortBy,
    order,
    setOder,
  } = useProductPage();

  const fetchDataProduct = async () => {
    try {
      const response = await getProduct({
        page,
        pageSize,
        keyword: textSearch,
        order,
      });
      if (response) {
        setTotalPages(response.totalPages);
        setTotalProduct(response.total);
      }
    } catch (error) {
      console.error("Lỗi khi lấy sản phẩm:", error);
    }
  };

  useEffect(() => {
    fetchDataProduct();
  }, [page, pageSize, order]);

  useEffect(() => {
    const handler = () => {
      getProduct({ page, pageSize, keyword: textSearch }); // Gọi không truyền gì nếu bạn xử lý mặc định bên trong
    };

    EventBus.addEventListener("getProduct", handler);

    return () => {
      EventBus.removeEventListener("getProduct", handler);
    };
  }, []);

  const options = [
    // {
    //   label: t("title_all"),
    //   value: "1",
    // },
    {
      label: "20",
      value: 20,
    },
    {
      label: "50",
      value: 50,
    },
    {
      label: "100",
      value: 100,
    },
  ];
  return (
    <Box className={styles.Container}>
      <Box className={styles.wrapCenter}>
        <Box className={styles.leftPane}>
          <EBaySetting
            loadingPriceCalc={loadingPriceCalc}
            handlePriceCalculation={handlePriceCalculation}
          />
        </Box>
        <Box className={styles.centerPane}>
          <MultileButton
            deleteProduct={deleteProduct}
            loadingDelProduct={loadingDelProduct}
            addProductToEbay={addProductToEbay}
            loadingUpebay={loadingUpebay}
            loadingPriceCalc={loadingPriceCalc}
            // handlePriceCalculation={handlePriceCalculation}
          />
        </Box>
        <Box className={styles.rightPane}>
          <EbayToolbar />
        </Box>
      </Box>
      <Box className={styles.filderLeft}>
        <Box className={styles.wrapPagination}>
          <TextField
            label={t("keyword")}
            variant="outlined"
            size="medium" // 👈 thử dùng size nhỏ trước
            className={styles.myTextField}
            style={{ margin: "0 10px" }}
            value={textSearch}
            onChange={(event) => setTextSearch(event.target.value)}
          />
          <Button variant="contained" size="large" onClick={fetchDataProduct}>
            <MyTypography fontSize={12}>{t("btn_search")}</MyTypography>
          </Button>
          <Box className={styles.filter}>
            <MySelectDropdow
              id="fulfillment"
              name="listingPolicies.fulfillmentPolicyId"
              label={t("arrange")}
              value={order}
              onChange={(e) => {
                setOder(e.target.value);
              }}
              options={arrange(t)}
              className={styles.dropdow}
              size="small"
            />
            <MySelectDropdow
              id="fulfillment"
              name="listingPolicies.fulfillmentPolicyId"
              label={t("filter")}
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
              }}
              options={SortByProperty(t)}
              className={styles.dropdow}
              size="small"
            />
          </Box>
        </Box>
        <Box
          className={styles.wrapPagination}
          style={{ justifyContent: "flex-end", padding: "10px" }}
        >
          <MyRadioGroup
            label={t("display")}
            name="pageSize"
            value={String(pageSize)}
            onChange={(value) => setPageSize(Number(value))}
            options={options}
          />
          <MyPagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(page) => {
              setPage(page);
            }}
          />
          <MyTypography
            fontSize={14}
            fontWeight={"bold"}
            className={styles.textEpay}
            style={{ marginLeft: "20px" }}
          >
            {t("totoal_products")} : {totalProduct}
          </MyTypography>
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
          setItemSelect={(value) => {
            setItemSelect(value);
          }}
          itemSelect={itemSelect}
          editProduct={editProduct}
          changeQuantityProduct={changeQuantityProduct}
          changePriceProduct={changePriceProduct}
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
          name="pageSize"
          value={String(pageSize)}
          onChange={(value) => setPageSize(Number(value))}
          options={options}
        />
        <MyPagination
          currentPage={page}
          totalPages={totalPages}
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
