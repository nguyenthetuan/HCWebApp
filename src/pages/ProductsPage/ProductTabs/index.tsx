import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import HeaderProductPage from "../compoents/HeaderProductPage";
import styles from "./styles.module.scss";
import ProductPage from "../ProductsPage";
import ScrapingManagerPage from "../ScrapingManagerPage";
import { userManagerProduct } from "@/hook/ProductPage/useManagerProduct";
import { useTranslation } from "react-i18next";

const ProductTab = () => {
  const { t } = useTranslation();
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
        <Tab label={t("productManagement")} />
        <Tab label={t("dataScrapingManagement")} />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {tabIndex === 0 && <ProductPage />}
        {tabIndex === 1 && <ScrapingManagerPage />}
      </Box>
    </Box>
  );
};

export default ProductTab;
