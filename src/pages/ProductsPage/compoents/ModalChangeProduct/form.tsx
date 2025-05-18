import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyRadioGroup from "@/components/common/MyRadioGroup";
import MyTypography from "@/components/common/MyTypography";
import { Box, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { optionOnOff, mode, TOOLTIP } from "../../../../untils/dataMockup";
import MyInputToolTip from "@/components/common/MyInputToolTip";
import { useTranslation } from "react-i18next";
import { userManagerProduct } from "@/hook/ProductPage/useManagerProduct";
interface props {
  itemSelect?: any;
}
const FormChangeProduct = (props: props) => {
  const [formData, setFormData] = useState({
    name: props.itemSelect?.name,
    url: props.itemSelect?.url,
    price: props.itemSelect?.price,
    title: "",
    description: "",
    category: "",
    condition: "",
    quantity: 1,
    returnPolicy: "",
    paymentPolicy: "",
    location: "",
  });
  const { t } = useTranslation();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  return (
    <Box>
      <Box className={styles.header}>
        <MyTypography className={styles.title}>
          {t("title_register_change")}
        </MyTypography>
      </Box>
      <Stack spacing={2}>
        <Stack spacing={2} className={styles.frame}>
          <Grid className={styles.row} container spacing={2}>
            <MyInput
              fullWidth
              label={t("label_store_name")}
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyInput
              fullWidth
              label={t("label_product_name")}
              name="title"
              value={formData.name}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
          </Grid>
          <Grid container spacing={2}>
            <MyInput
              fullWidth
              label={t("label_purchase_url")}
              name="title"
              value={formData.url}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyInput
              fullWidth
              label={t("label_ebay_address")}
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
          </Grid>
        </Stack>

        <Stack spacing={2} className={styles.frame}>
          <MyInput
            fullWidth
            label={t("label_ebay_item_number")}
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.status}
            size="small"
          />
          <MyRadioGroup
            label={t("label_ebay_auto_link")}
            name="gender"
            value={"on"}
            onChange={() => {}}
            options={optionOnOff}
          />
          <MyTypography>{TOOLTIP.EBAY}</MyTypography>
        </Stack>

        <Stack spacing={2} className={styles.frame}>
          <Grid className={styles.row} container spacing={2}>
            <MyInputToolTip
              fullWidth
              label={t("label_purchase_price")}
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className={styles.status}
              toolTip={TOOLTIP.PRICE}
              size="small"
            />
            <MyInputToolTip
              fullWidth
              label={t("label_shipping_fee")}
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className={styles.status}
              toolTip={TOOLTIP.FEE_BUY_TRANSPORT}
              size="small"
            />
          </Grid>
        </Stack>

        <Stack className={styles.frame}>
          <MyTypography>{t("label_stock_keyword")}</MyTypography>
          <MyInputToolTip
            fullWidth
            label={t("label_shipping_fee")}
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={styles.status}
            toolTip={TOOLTIP.KEY_STOCK}
            size="small"
          />
          <MyRadioGroup
            label=""
            name="gender"
            value={"on"}
            onChange={() => {}}
            options={mode}
          />
          <MyTypography>{TOOLTIP.MODE}</MyTypography>
        </Stack>

        <Stack className={styles.frame}>
          <MyTypography>{t("label_check_logic")}</MyTypography>
          <MyRadioGroup
            label=""
            name="gender"
            value={"on"}
            onChange={() => {}}
            options={mode}
          />
          <MyTypography>{TOOLTIP.LOGIC}</MyTypography>
        </Stack>

        <Stack className={styles.frame}>
          <Grid className={styles.row} container spacing={2}>
            <MyInputToolTip
              fullWidth
              label={t("label_ebay_shipping_fee")}
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={styles.status}
              toolTip={TOOLTIP.FEE_BUY_TRANSPORT}
              size="small"
            />
            <MyInputToolTip
              fullWidth
              label={t("label_expected_profit")}
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={styles.status}
              toolTip={TOOLTIP.FEE_BUY_TRANSPORT}
              size="small"
            />
            <MyInputToolTip
              fullWidth
              label={t("label_fee_ratio")}
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={styles.status}
              toolTip={TOOLTIP.RATIO}
              size="small"
            />
          </Grid>
          <MyInput
            label={t("label_note")}
            name="description"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className={styles.status}
          />
        </Stack>

        <Grid container spacing={2}>
          <MyButton variant="contained" color="primary" onClick={handleSubmit}>
            {t("button_register_reset")}
          </MyButton>
        </Grid>
      </Stack>
    </Box>
  );
};

export default FormChangeProduct;
