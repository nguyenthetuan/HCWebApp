import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyTypography from "@/components/common/MyTypography";
import request from "@/services/Request";
import { Box, Grid, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const FormStopSellingProduct = () => {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState("");
  const search = useCallback(async () => {}, []);
  return (
    <Box>
      <MyTypography className={styles.title}>
        {t("list_product_bought")}
      </MyTypography>
      <Stack spacing={2}>
        <MyTypography>{t("description")}</MyTypography>
        <MyInput
          fullWidth
          label={t("inputLabel")}
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
        {t("button_pause")}
      </MyButton>
    </Box>
  );
};

export default FormStopSellingProduct;
