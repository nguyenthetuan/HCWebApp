import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MySelectDropdow from "@/components/common/MySelectDropdow";
import MyTypography from "@/components/common/MyTypography";
import { Box, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

interface propsModalSetupEbay {
  fulfillmentPolicy?: any[];
  returnPolicy?: any[];
  paymentPolicy?: any[];
  invertoryLocation?: any[];
  config?: any;
  putConfig?: (data) => void;
  closeModal?: () => void;
}
const FormSetupEbay = ({
  fulfillmentPolicy,
  returnPolicy,
  paymentPolicy,
  invertoryLocation,
  config,
  putConfig,
}: propsModalSetupEbay) => {
  const { t } = useTranslation();
  useEffect(() => {
    setFormData({
      desiredProfitMargin: config?.desiredProfitMargin,
      japanShippingFee: config?.japanShippingFee,
      commissionRate: config?.commissionRate,
      exchangeRate: config?.exchangeRate,
      listingPolicies: {
        fulfillmentPolicyId: config?.listingPolicies?.fulfillmentPolicyId,
        paymentPolicyId: config?.listingPolicies?.paymentPolicyId,
        returnPolicyId: config?.listingPolicies?.returnPolicyId,
      },
      categoryId: config?.categoryId,
      merchantLocationKey: config?.merchantLocationKey,
      availableQuantity: config?.availableQuantity,
      quantityLimitPerBuyer: config?.quantityLimitPerBuyer,
    });
  }, [config]);
  const [formData, setFormData] = useState({
    desiredProfitMargin: "",
    japanShippingFee: "",
    commissionRate: "",
    exchangeRate: "",
    listingPolicies: {
      fulfillmentPolicyId: "",
      paymentPolicyId: "",
      returnPolicyId: "",
    },
    categoryId: "",
    merchantLocationKey: "",
    availableQuantity: "",
    quantityLimitPerBuyer: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const keys = name.split(".");
      setFormData((prevData) => {
        const updatedNested = {
          ...prevData[keys[0]],
          [keys[1]]: value,
        };
        return {
          ...prevData,
          [keys[0]]: updatedNested,
        };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const optionFullfimentPolicy = fulfillmentPolicy?.map((elm) => {
    return {
      label: `${elm.name}`,
      value: elm.fulfillmentPolicyId,
    };
  });
  const optionReturnPolicy = returnPolicy?.map((elm) => {
    return {
      label: `${elm.name}`,
      value: elm.returnPolicyId,
    };
  });
  const optionPaymentPolicy = paymentPolicy?.map((elm) => {
    return {
      label: `${elm.name}`,
      value: elm.paymentPolicyId,
    };
  });
  const optionInvertoryLocation = invertoryLocation?.map((elm) => {
    return {
      label: `${elm?.location?.address?.country}- ${elm?.location?.address?.city} - ${elm?.location?.address?.addressLine1}`,
      value: elm.merchantLocationKey,
    };
  });

  const handleSubmit = () => {
    putConfig(formData);
  };
  return (
    <Box>
      <MyTypography className={styles.title}>
        {t("title_setup_ebay")}
      </MyTypography>
      <Grid container className={styles.row} spacing={2} marginTop={2}>
        <Stack spacing={2} className={styles.frame}>
          <MyInput
            fullWidth
            label={t("label_exchange_rate")}
            name="exchangeRate"
            value={formData.exchangeRate}
            onChange={handleChange}
            className={styles.status}
            size="small"
            type="number"
          />
          <MyInput
            fullWidth
            label={t("label_fee_multiplier")}
            name="commissionRate"
            value={formData.commissionRate}
            onChange={handleChange}
            className={styles.status}
            size="small"
            type="number"
          />
          <MyInput
            fullWidth
            label={t("label_expected_profit_margin")}
            name="desiredProfitMargin"
            value={formData.desiredProfitMargin}
            onChange={handleChange}
            className={styles.status}
            size="small"
            type="number"
          />
          <MyInput
            fullWidth
            label={t("label_japan_shipping_fee")}
            name="japanShippingFee"
            value={formData.japanShippingFee}
            onChange={handleChange}
            className={styles.status}
            size="small"
            type="number"
          />
          <MyInput
            fullWidth
            label={t("title_inventory")}
            name="availableQuantity"
            value={formData.availableQuantity}
            onChange={handleChange}
            className={styles.status}
            size="small"
            type="number"
          />
          <MyInput
            fullWidth
            label={t("title_limit_per_buyer")}
            name="quantityLimitPerBuyer"
            value={formData.quantityLimitPerBuyer}
            onChange={handleChange}
            className={styles.status}
            size="small"
            type="number"
          />
          <MyInput
            fullWidth
            label={t("categoryId")}
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className={styles.status}
            size="small"
            type="number"
          />
        </Stack>
        <Stack className={styles.frame}>
          <MySelectDropdow
            id="fulfillment"
            name="listingPolicies.fulfillmentPolicyId"
            label={t("implementation_policy")}
            value={formData.listingPolicies.fulfillmentPolicyId}
            onChange={handleChange}
            options={optionFullfimentPolicy}
            className={styles.dropdow}
            size="small"
          />
          <MySelectDropdow
            id="return"
            name="listingPolicies.returnPolicyId"
            label={t("return_policy")}
            value={formData.listingPolicies.returnPolicyId}
            onChange={handleChange}
            options={optionReturnPolicy}
            className={styles.dropdow}
            size="small"
          />
          <MySelectDropdow
            id="payment"
            name="listingPolicies.paymentPolicyId"
            label={t("payment_policy")}
            value={formData.listingPolicies.paymentPolicyId}
            onChange={handleChange}
            options={optionPaymentPolicy}
            className={styles.dropdow}
            size="small"
          />
          <MySelectDropdow
            id="warehouse"
            name="merchantLocationKey"
            label={t("marchant_location")}
            value={formData.merchantLocationKey}
            onChange={handleChange}
            options={optionInvertoryLocation}
            className={styles.dropdow}
            size="small"
          />
        </Stack>
      </Grid>
      <MyButton
        variant="contained"
        color="info"
        size="small"
        className={styles.buttons}
        onClick={handleSubmit}
      >
        {t("btn_registry_change")}
      </MyButton>
    </Box>
  );
};

export default FormSetupEbay;
