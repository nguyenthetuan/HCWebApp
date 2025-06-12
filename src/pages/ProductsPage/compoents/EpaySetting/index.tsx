import MyTypography from "@/components/common/MyTypography";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import MyButton from "@/components/common/MyButton";
import { useTranslation } from "react-i18next";
import { useSetupEbay } from "@/hook/ProductPage/useSetupEbay";

interface propsEBaySetting {
  loadingPriceCalc?: boolean;
  handlePriceCalculation?: (data_config: any) => void;
}

export default function EBaySetting(props: propsEBaySetting) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    desiredProfitMargin: "", // Tỷ lệ lợi nhuận mong muốn
    japanShippingFee: "", // Phí vận chuyển bên Japan
    commissionRate: "", // Hệ số hoa hồng
    exchangeRate: "", // Tỷ giá hối đoái
  });

  const { getConfig, putConfig } = useSetupEbay();
  useEffect(() => {
    getConfig(changeFormData);
  }, []);

  const changeFormData = (value) => {
    setFormData({
      desiredProfitMargin: value?.desiredProfitMargin || "", // Tỷ lệ lợi nhuận mong muốn
      japanShippingFee: value?.japanShippingFee || "", // Phí vận chuyển bên Japan
      commissionRate: value?.commissionRate || "", // Hệ số hoa hồng
      exchangeRate: value?.exchangeRate || "", // Tỷ giá hối đoái
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    props?.handlePriceCalculation(formData);
  };
  return (
    <Box className={styles.container}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* Bên trái */}
        <Stack spacing={2}>
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
                name="exchangeRate"
                value={formData.exchangeRate}
                onChange={handleChange}
                className={styles.myTextField}
              />
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
              name="commissionRate"
              value={formData.commissionRate}
              onChange={handleChange}
              className={styles.myTextField}
            />
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
              name="desiredProfitMargin"
              value={formData?.desiredProfitMargin}
              onChange={handleChange}
              className={styles.myTextField}
            />
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
              name="japanShippingFee"
              value={formData.japanShippingFee}
              onChange={handleChange}
              className={styles.myTextField}
            />
          </Stack>

          <MyButton
            variant="contained"
            sx={{ backgroundColor: "deepskyblue", fontSize: 12 }}
            size="small"
            className={styles.buttons}
            loading={props?.loadingPriceCalc}
            onClick={handleSubmit}
          >
            {t("caculation")}
          </MyButton>
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
