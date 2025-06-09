import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyTypography from "@/components/common/MyTypography";
import request from "@/services/Request";
import { Box, Grid, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import MySelectDropdow from "@/components/common/MySelectDropdow";

interface propsModalSetupEbay {
  fulfillmentPolicy?: any[];
  returnPolicy?: any[];
  paymentPolicy?: any[];
}
const FormSetupEbay = ({
  fulfillmentPolicy,
  returnPolicy,
  paymentPolicy,
}: propsModalSetupEbay) => {
  const { t } = useTranslation();
  const [foundation, setFoundation] = useState("netsea");
  const [keyword, setKeyword] = useState("");
  const [alignment, setAlignment] = useState("left");
  const [formData, setFormData] = useState({
    desiredProfitMargin: 0.87,
    japanShippingFee: 1200,
    commissionRate: 0.1,
    exchangeRate: 155.25,
    listingPolicies: {
      fulfillmentPolicyId: "265002046015",
      paymentPolicyId: "265078493015",
      returnPolicyId: "265078622015",
    },
    categoryId: "69528",
    merchantLocationKey: "locationnew",
    availableQuantity: 1,
    quantityLimitPerBuyer: 1,
  });

  const handleChange = (e) => {
    setFoundation(e.target.value);
  };

  const search = useCallback(async () => {}, []);
  const optionFullfimentPolicy = fulfillmentPolicy.map((elm) => {
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
  const optionPaymentPolicy = paymentPolicy.map((elm) => {
    return {
      label: `${elm.name}`,
      value: elm.paymentPolicyId,
    };
  });
  return (
    <Box>
      <MyTypography className={styles.title}>
        {t("title_setup_ebay")}
      </MyTypography>
      <Grid container className={styles.row} spacing={2} marginTop={2}>
        <Stack spacing={2} className={styles.frame}>
          <MySelectDropdow
            id="fulfillment"
            name="listingPolicies.fulfillmentPolicyId"
            label={"Chính sách thực hiện   "}
            value={formData.listingPolicies.fulfillmentPolicyId}
            onChange={handleChange}
            options={optionFullfimentPolicy}
            className={styles.dropdow}
            size="small"
          />
          <MySelectDropdow
            id="return"
            name="listingPolicies.returnPolicyId"
            label={"Chính sách hoàn trả"}
            value={"1"}
            onChange={handleChange}
            options={[]}
            className={styles.dropdow}
            size="small"
          />
          <MySelectDropdow
            id="payment"
            name="listingPolicies.paymentPolicyId"
            label={"Chính sách thanh toán"}
            value={"1"}
            onChange={handleChange}
            options={[]}
            className={styles.dropdow}
            size="small"
          />
          <MySelectDropdow
            id="warehouse"
            name="merchantLocationKey"
            label={"Vị trí kho hàng"}
            value={"1"}
            onChange={handleChange}
            options={[]}
            className={styles.dropdow}
            size="small"
          />
        </Stack>
        <Stack spacing={2} className={styles.frame}>
          <MyInput
            fullWidth
            label="Tỷ giá hối đoái (yên)"
            name="quantityLimitPerBuyer"
            value={formData.quantityLimitPerBuyer}
            onChange={handleChange}
            className={styles.status}
            size="small"
          />
          <MyInput
            fullWidth
            label="Hệ số hoa hồng"
            name="quantityLimitPerBuyer"
            value={formData.quantityLimitPerBuyer}
            onChange={handleChange}
            className={styles.status}
            size="small"
          />
          <MyInput
            fullWidth
            label="Tỉ lệ lợi nhuận mong muốn"
            name="quantityLimitPerBuyer"
            value={formData.quantityLimitPerBuyer}
            onChange={handleChange}
            className={styles.status}
            size="small"
          />
          <MyInput
            fullWidth
            label="Phí vận chuyển bên Japan"
            name="quantityLimitPerBuyer"
            value={formData.quantityLimitPerBuyer}
            onChange={handleChange}
            className={styles.status}
            size="small"
          />
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
