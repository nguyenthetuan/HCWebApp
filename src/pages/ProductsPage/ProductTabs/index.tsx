import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import HeaderProductPage from "../compoents/HeaderProductPage";
import styles from "./styles.module.scss";
import ProductPage from "../ProductsPage";
import ScrapingManagerPage from "../ScrapingManagerPage";
import { userManagerProduct } from "@/hook/ProductPage/useManagerProduct";

const ProductTab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box className={styles.Container}>
      <HeaderProductPage />
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        sx={{
          "& .MuiTab-root": {
            fontFamily: "Roboto Slab, serif",
            fontSize: "1rem",
            color: "#555",
            "&.Mui-selected": {
              color: "#007bff",
              fontWeight: "bold",
            },
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#007bff",
            height: 3,
          },
        }}
      >
        <Tab label="Quản lý sản phẩm" />
        <Tab label="Quản lý cào dữ liệu" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {tabIndex === 0 && <ProductPage />}
        {tabIndex === 1 && <ScrapingManagerPage />}
      </Box>
    </Box>
  );
};

export default ProductTab;
