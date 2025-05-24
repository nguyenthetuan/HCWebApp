import MyButton from "@/components/common/MyButton";
import MyTypography from "@/components/common/MyTypography";
import { Box, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import TableSearch from "./TableSearch";

const FormSearchProductScraping = (props) => {
  const { t } = useTranslation();
  return (
    <Box>
      <MyTypography className={styles.textHeader}>
        {t("title_product_scraped")}
      </MyTypography>
      <Stack spacing={2} className={styles.stack}>
        <MyButton
          variant="contained"
          sx={{ backgroundColor: "orange" }}
          size="small"
          className={styles.btnSave}
          onClick={props?.addProductToManager}
          loading={props?.loadingAddProduct}
        >
          {t("btn_save_to_manage_product")}
        </MyButton>
        <TableSearch
          products={props?.productAll}
          handleCheckboxChange={props?.handleCheckboxChange}
          selectedIds={props?.selectedIds}
          handleSelectAll={props?.handleSelectAll}
        />
      </Stack>
    </Box>
  );
};

export default FormSearchProductScraping;
