import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyTypography from "@/components/common/MyTypography";
import request from "@/services/Request";
import { Box, Grid, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const FormUpdateQuantity = () => {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState("");
  const search = useCallback(async () => {}, []);
  return (
    <Box>
      <MyTypography className={styles.title}>
        {t("ebayChangeQuantity_title")}
      </MyTypography>
      <Stack spacing={2}>
        <MyTypography>{t("ebayChangeQuantity_description")}</MyTypography>
        <MyInput
          fullWidth
          label={t("ebayChangeQuantity_itemLabel")}
          name="title"
          className={styles.status}
          size="small"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <MyInput
          fullWidth
          label={t("ebayChangeQuantity_quantityLabel")}
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
        {t("ebayChangeQuantity_button")}
      </MyButton>
    </Box>
  );
};

export default FormUpdateQuantity;
