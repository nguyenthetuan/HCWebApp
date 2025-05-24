import MyButton from "@/components/common/MyButton";
import MyTypography from "@/components/common/MyTypography";
import { Box, Grid, Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import ModalSearchProduct from "../compoents/ModalSearchProduct";
import styles from "./styles.module.scss";
import TableScrapingProduct from "./TableScrapingProduct";
import { useScrapingProduct } from "@/hook/ProductPage/useScrapingProduct";
import EventBus from "@/components/common/EventBus";
import { useTranslation } from "react-i18next";

const ScrapingManagerPage = () => {
  const {
    scapingProduct,
    getScrapingProduct,
    scrapingProduct,
    handleCheckboxChange,
    selectedIds,
    loadingScraping,
    loadingDelete,
    deleteScrapingProduct,
    handleSelectAll,
    handleCheckboxChangeScraping,
    checkAll,
    productShow,
    setProductShow,
  } = useScrapingProduct();
  const refModalSearch = useRef(null);
  const { t } = useTranslation();
  const search = () => {
    refModalSearch?.current?.openModal();
  };

  useEffect(() => {
    getScrapingProduct();
  }, []);

  useEffect(() => {
    let intervalId;
    if (open) {
      intervalId = setInterval(() => {
        getScrapingProduct();
      }, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  useEffect(() => {
    EventBus.addEventListener("getScrapingProduct", getScrapingProduct);
    return () => {
      EventBus.removeEventListener("getScrapingProduct", getScrapingProduct);
    };
  }, []);

  return (
    <Box>
      <MyTypography className={styles.textHeader}>
        {t("productData_title")}
      </MyTypography>
      <Stack spacing={2} className={styles.stack}>
        <Grid spacing={2} container>
          <MyButton
            variant="contained"
            sx={{ backgroundColor: "blue" }}
            size="small"
            className={styles.btnSave}
            onClick={search}
          >
            {t("searchProduct")}
          </MyButton>
          <MyButton
            variant="contained"
            sx={{ backgroundColor: "orange" }}
            size="small"
            className={styles.btnSave}
            onClick={scrapingProduct}
            loading={loadingScraping}
          >
            {t("startScraping")}
          </MyButton>
          <MyButton
            variant="contained"
            sx={{ backgroundColor: "red" }}
            size="small"
            className={styles.btnSave}
            onClick={deleteScrapingProduct}
            loading={loadingDelete}
          >
            {t("deleteSelected")}
          </MyButton>
        </Grid>
        <TableScrapingProduct
          products={scapingProduct}
          handleCheckboxChangeScraping={handleCheckboxChangeScraping}
          selectedIds={selectedIds}
          handleSelectAll={handleSelectAll}
          checkAll={checkAll}
          productShow={productShow}
          setProductShow={setProductShow}
        />
      </Stack>
      <ModalSearchProduct ref={refModalSearch} />
    </Box>
  );
};

export default ScrapingManagerPage;
