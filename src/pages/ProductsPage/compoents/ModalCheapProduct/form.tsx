import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyTypography from "@/components/common/MyTypography";
import { Box, Stack } from "@mui/material";
import { useCallback, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const FormCheapProduct = () => {
  const [keyword, setKeyword] = useState("");
  const search = useCallback(async () => {}, []);
  const { t } = useTranslation();
  return (
    <Box>
      <MyTypography className={styles.title}>
        {t("title_product_infor_title")}
      </MyTypography>
      <Stack spacing={2}>
        <MyTypography>
          {t("title_product_infor_name")} Phần mềm Fantasic
        </MyTypography>
        <MyTypography>
          {t("title_product_infor_code")} Phần mềm Fantasic
        </MyTypography>
        <MyInput
          fullWidth
          label={t("title_product_infor_change_ebay_price")}
          name="title"
          className={styles.status}
          size="small"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </Stack>
      <MyButton
        variant="contained"
        color="info"
        size="small"
        className={styles.buttons}
        onClick={search}
      >
        {t("buttn_product_infor_change")}
      </MyButton>
    </Box>
  );
};

export default FormCheapProduct;
