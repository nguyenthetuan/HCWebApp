import MyTypography from "@/components/common/MyTypography";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./styles.module.scss";
import MyButton from "@/components/common/MyButton";
import { useTranslation } from "react-i18next";

export default function EBaySetting() {
  const [exchangeRate, setExchangeRate] = useState(149);
  const [feeMultiplier, setFeeMultiplier] = useState(0.87);
  const { t } = useTranslation();
  const handleRegister = (type: "rate" | "fee") => {
    alert(
      type === "rate"
        ? `Tỷ giá đã đăng ký: ${exchangeRate}`
        : `Hệ số phí đã đăng ký: ${feeMultiplier}`
    );
  };

  return (
    <Box className={styles.container}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* Bên trái */}
        <Stack item xs={12} md={7} spacing={2}>
          <MyTypography fontSize={14} className={styles.textEpay}>
            {t("label_calculate_ebay_price")}
          </MyTypography>
          <Stack
            direction="row"
            alignItems="center"
            mb={2}
            flexWrap="wrap"
            className={styles.rate}
          >
            <MyTypography fontSize={14} className={styles.textEpay}>
              {t("label_exchange_rate")}
            </MyTypography>
            <Stack
              direction="row"
              alignItems="center"
              flexWrap="wrap"
              className={styles.rate}
            >
              <TextField
                type="number"
                size="small"
                value={exchangeRate}
                onChange={(e) => setExchangeRate(+e.target.value)}
                className={styles.myTextField}
              />
              <MyButton
                variant="contained"
                className={styles.btnRegistry}
                sx={style.registry}
              >
                {t("label_register_change")}
              </MyButton>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            className={styles.rate}
          >
            <MyTypography fontSize={14}>
              {t("label_fee_multiplier")}
            </MyTypography>
            <TextField
              size="small"
              type="number"
              value={feeMultiplier}
              onChange={(e) => setFeeMultiplier(+e.target.value)}
              className={styles.myTextField}
            />
            <Button
              variant="contained"
              sx={style.registry}
              className={styles.btnRegistry}
              onClick={() => handleRegister("fee")}
            >
              {t("label_register_change")}
            </Button>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            className={styles.rate}
          >
            <MyTypography fontSize={14}>
              {t("label_expected_profit_margin")}
            </MyTypography>
            <TextField
              size="small"
              type="number"
              value={feeMultiplier}
              onChange={(e) => setFeeMultiplier(+e.target.value)}
              className={styles.myTextField}
            />
            <Button
              variant="contained"
              sx={style.registry}
              className={styles.btnRegistry}
              onClick={() => handleRegister("fee")}
            >
              {t("label_register_change")}
            </Button>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            className={styles.rate}
          >
            <MyTypography fontSize={14}>
              {t("label_japan_shipping_fee")}
            </MyTypography>
            <TextField
              size="small"
              type="number"
              value={feeMultiplier}
              onChange={(e) => setFeeMultiplier(+e.target.value)}
              className={styles.myTextField}
            />
            <Button
              variant="contained"
              sx={style.registry}
              className={styles.btnRegistry}
              onClick={() => handleRegister("fee")}
            >
              {t("label_register_change")}
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Box>
  );
}

const style = {
  registry: {
    fontSize: "10px",
    fontWeight: "bold",
    color: "white",
    padding: "4px 8px",
    backgroundColor: "#1976d2",
    "&:hover": {
      backgroundColor: "#115293",
    },
  },
};
