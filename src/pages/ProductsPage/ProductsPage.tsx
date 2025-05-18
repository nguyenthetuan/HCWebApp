import MyProductTable from "@/components/common/MyProductTable";
import MyRadioGroup from "@/components/common/MyRadioGroup";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import MyPagination from "@/components/common/MyPagination";
import EBaySetting from "./compoents/EpaySetting";
import EbayToolbar from "./compoents/EbayToolbar";
import MultileButton from "./compoents/MultileButton";
import MoreInfor from "./compoents/MoreInfor";
import HeaderProductPage from "./compoents/HeaderProductPage";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../../feature/userSlice";
import { useProductPage } from "@/hook/ProductPage";
import ScrollButtons from "@/components/common/ScrollButton";
import { userManagerProduct } from "@/hook/ProductPage/useManagerProduct";
import EventBus from "@/components/common/EventBus";

const options = [
  {
    label: "Tất cả các mục",
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
  } = userManagerProduct();
  console.log("qqqqqq", itemSelect);

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
          />
        </Box>
        <Box className={styles.rightPane}>
          <EbayToolbar />
        </Box>
      </Box>
      <Box className={styles.wrapRadioGroup}>
        <Box className={styles.wrapPagination}>
          <MyRadioGroup
            label="Trưng bày"
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
          onChange={(value) => setItemSelect(value)}
          itemSelect={itemSelect}
        />
      </Box>
      <Box className={styles.wrapFooterPagination}>
        <MyRadioGroup
          label="Trưng bày"
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
