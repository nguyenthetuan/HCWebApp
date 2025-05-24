import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MySelectDropdow from "@/components/common/MySelectDropdow";
import MyTypography from "@/components/common/MyTypography";
import { Box, Grid, Stack } from "@mui/material";
import {
  getCategoryProdcutNetSea,
  getCategoryProductSurugara,
  getCommercialPlatform,
} from "../../../../untils/dataMockup";
import styles from "./styles.module.scss";
import TableSearch from "./TableSearch";
import { useTranslation } from "react-i18next";

const FormSearchProduct = (props) => {
  const { t } = useTranslation();
  const commercialPlatform = getCommercialPlatform(t);
  const categoryProductSurugara = getCategoryProductSurugara(t);
  const categoryProductNetsea = getCategoryProdcutNetSea(t);
  return (
    <Box>
      <MyTypography className={styles.textHeader}>
        {t("product_search_header")}
      </MyTypography>
      <Stack spacing={2} className={styles.stack}>
        <Grid className={styles.row} container spacing={2}>
          <MySelectDropdow
            id="foundation-select"
            name="foundation"
            label={t("select_platform")}
            value={props?.foundation}
            onChange={props?.handleChange}
            options={commercialPlatform}
            helperText={t("select_platform_helper")}
            className={styles.dropdow}
          />
          <MyInput
            fullWidth
            label={t("keyword")}
            name="title"
            className={styles.status}
            size="small"
            value={props?.keyword}
            onChange={(e) => props?.setKeyword(e.target.value)}
          />
          <MySelectDropdow
            id="category-select"
            name="category"
            label={t("select_category")}
            value={props?.category}
            onChange={(e) => props?.setCategory(e.target.value)}
            options={
              props?.foundation === "netsea"
                ? categoryProductNetsea
                : categoryProductSurugara
            }
            helperText={t("select_category_helper")}
            className={styles.dropdow}
          />
          <MyButton
            variant="contained"
            color="info"
            size="small"
            className={styles.buttons}
            onClick={props?.search}
            loading={props?.loadingSearch}
          >
            {t("search_button")}
          </MyButton>
        </Grid>
        <MyButton
          variant="contained"
          sx={{ backgroundColor: "orange" }}
          size="small"
          className={styles.btnSave}
          onClick={props?.addProduct}
          loading={props?.loadingSaveProduct}
        >
          {t("save_to_crawled_table")}
        </MyButton>
        <TableSearch
          products={props?.product}
          handleCheckboxChange={props?.handleCheckboxChange}
          selectedIds={props?.selectedIds}
          handleSelectAll={props?.handleSelectAll}
          checkAll={props?.checkAll}
        />
      </Stack>
    </Box>
  );
};

export default FormSearchProduct;
