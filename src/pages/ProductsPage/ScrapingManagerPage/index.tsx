import MyButton from "@/components/common/MyButton";
import MyTypography from "@/components/common/MyTypography";
import { useSearchProduct } from "@/hook/ProductPage/useSearchProduct";
import { Box, Grid, Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import ModalSearchProduct from "../compoents/ModalSearchProduct";
import styles from "./styles.module.scss";
import TableScrapingProduct from "./TableScrapingProduct";
import { useScrapingProduct } from "@/hook/ProductPage/useScrapingProduct";
import EventBus from "@/components/common/EventBus";

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
  } = useScrapingProduct();
  const refModalSearch = useRef(null);
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
        Dữ liệu Sản phẩm
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
            Tìm kiếm sản phẩm
          </MyButton>
          <MyButton
            variant="contained"
            sx={{ backgroundColor: "orange" }}
            size="small"
            className={styles.btnSave}
            onClick={scrapingProduct}
            loading={loadingScraping}
          >
            Bắt đầu cào dữ liệu
          </MyButton>
          <MyButton
            variant="contained"
            sx={{ backgroundColor: "red" }}
            size="small"
            className={styles.btnSave}
            onClick={deleteScrapingProduct}
            loading={loadingDelete}
          >
            Xoá sản phẩm đã chọn
          </MyButton>
        </Grid>
        <TableScrapingProduct
          products={scapingProduct}
          handleCheckboxChange={handleCheckboxChange}
          selectedIds={selectedIds}
          handleSelectAll={handleSelectAll}
        />
      </Stack>
      <ModalSearchProduct ref={refModalSearch} />
    </Box>
  );
};

export default ScrapingManagerPage;
