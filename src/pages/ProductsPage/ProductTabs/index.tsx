import { useState } from "react";
import { useTranslation } from "react-i18next";

import HeaderProductPage from "../compoents/HeaderProductPage";
import ProductPage from "../ProductsPage";
import ScrapingManagerPage from "../ScrapingManagerPage";
import ImageBanner from "../../../assets/ecommer.jpg";
import styles from "./styles.module.scss";

const TABS = [
  { labelKey: "productManagement", component: <ProductPage /> },
  { labelKey: "dataScrapingManagement", component: <ScrapingManagerPage /> },
];

const ProductTab = () => {
  const { t } = useTranslation();
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (newValue) => {
    setTabIndex(newValue);
  };

  return (
    <div className={styles.Container}>
      <div
        className={styles.BannerBackground}
        style={{ backgroundImage: `url(${ImageBanner})` }}
      >
        <HeaderProductPage />
        <div className={styles.CustomTabHeader}>
          {TABS.map((tab, index) => (
            <button
              key={index}
              className={`${styles.CustomTabButton} ${
                tabIndex === index ? styles.active : ""
              }`}
              onClick={() => handleChange(index)}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.CustomTabContent}>{TABS[tabIndex].component}</div>
    </div>
  );
};

export default ProductTab;
