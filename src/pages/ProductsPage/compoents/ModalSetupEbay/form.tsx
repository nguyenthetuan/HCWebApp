import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyTypography from "@/components/common/MyTypography";
import request from "@/services/Request";
import { Box, Grid, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const FormSetupEbay = () => {
  const { t } = useTranslation();
  const [foundation, setFoundation] = useState("netsea");
  const [keyword, setKeyword] = useState("");
  const [alignment, setAlignment] = useState("left");

  const handleChange = (e) => {
    setFoundation(e.target.value);
  };

  const search = useCallback(async () => {}, []);

  return (
    <Box>
      <MyTypography className={styles.title}>
        {t("title_setup_ebay")}
      </MyTypography>
      <Grid className={styles.row} container spacing={2}>
        <Stack spacing={2} className={styles.frame}>
          <MyInput
            fullWidth
            label="HTML 1"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            multiline
            rows={2.5}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInput
            fullWidth
            label="HTML 2"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            multiline
            rows={2.5}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInput
            fullWidth
            label="HTML 3"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            multiline
            rows={2.5}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInput
            fullWidth
            label="HTML 4"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            multiline
            rows={2.5}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInput
            fullWidth
            label="HTML 5"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            multiline
            rows={2.5}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Stack>
        <Stack className={styles.frame} spacing={2}>
          <MyTypography>
            {t("introduce_setup_ebay")}{" "}
            <a target="_blank" href="google.com">
              ``motoki-ebay-blog''
            </a>{" "}
            {t("introduce_setup_ebay_one")}
          </MyTypography>
          <Stack spacing={1}>
            <MyInput
              fullWidth
              label={t("shippingPolicyLabel")}
              name="title"
              value={""}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyTypography>{t("shippingPolicyNote")}</MyTypography>
          </Stack>
          <Stack spacing={1}>
            <MyInput
              fullWidth
              label={t("returnPolicyLabel")}
              name="title"
              value={""}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyTypography>{t("returnPolicyNote")}</MyTypography>
          </Stack>
          <Stack spacing={1}>
            <MyInput
              fullWidth
              label={t("paymentPolicyLabel")}
              name="title"
              value={""}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyTypography>{t("paymentPolicyNote")}</MyTypography>
          </Stack>
          <Stack spacing={1}>
            <MyInput
              fullWidth
              label={t("locationLabel")}
              name="title"
              value={""}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyTypography>{t("locationNote")}</MyTypography>
          </Stack>
        </Stack>
      </Grid>
      <MyButton
        variant="contained"
        color="info"
        size="small"
        className={styles.buttons}
        onClick={search}
      >
        {t("btn_registry_change")}
      </MyButton>
    </Box>
  );
};

export default FormSetupEbay;
