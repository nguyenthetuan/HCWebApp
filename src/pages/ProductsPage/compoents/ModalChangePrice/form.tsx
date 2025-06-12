import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyRadioGroup from "@/components/common/MyRadioGroup";
import MyTypography from "@/components/common/MyTypography";
import {
  Box,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import {
  getOptionOnOff,
  getMode,
  TOOLTIP,
} from "../../../../untils/dataMockup";
import MyInputToolTip from "@/components/common/MyInputToolTip";
import { useTranslation } from "react-i18next";
import { userManagerProduct } from "@/hook/ProductPage/useManagerProduct";
import MySelectDropdow from "@/components/common/MySelectDropdow";
import CategorySelect from "../CategorySelect";
import { AspectFormLoading } from "./loading";

interface Props {
  itemSelect?: any;
  editProduct?: (FormData, id) => void;
  categoryTree?: any;
  getItemAspectsForCategory?: (id_category: string) => void;
  aspects?: any[];
  isLoadingAspects?: boolean;
  categorySuggestion?: any[];
  fulfillmentPolicy?: any[];
  returnPolicy?: any[];
  paymentPolicy?: any[];
  invertoryLocation?: any[];
  closeModal?: () => void;
}

const FormChangeProduct = ({
  itemSelect,
  editProduct,
  categoryTree,
  getItemAspectsForCategory,
  aspects,
  isLoadingAspects,
  categorySuggestion,
  fulfillmentPolicy,
  returnPolicy,
  paymentPolicy,
  invertoryLocation,
  closeModal,
}: Props) => {
  const tooltips = TOOLTIP();
  const { t } = useTranslation();
  const [alignment, setAlignment] = useState("NORMAL");

  const handleChangeToggle = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  const [formData, setFormData] = useState<any>({
    name: itemSelect?.name || "",
    url: itemSelect?.url || "",
    price: itemSelect?.price || "",
    content: itemSelect?.content || "",
    avatar_url: itemSelect?.avatar_url || "",
    listingPolicies: {
      fulfillmentPolicyId:
        itemSelect?.listingPolicies?.fulfillmentPolicyId || "",
      paymentPolicyId: itemSelect?.listingPolicies?.paymentPolicyId || "",
      returnPolicyId: itemSelect?.listingPolicies?.returnPolicyId || "",
    },
    categoryId: itemSelect?.categoryId || "",
    merchantLocationKey: itemSelect?.merchantLocationKey || "",
    availableQuantity: itemSelect?.availableQuantity || "",
    quantityLimitPerBuyer: itemSelect?.quantityLimitPerBuyer || "",
    aspects: itemSelect?.aspects || {},
    price_buy: itemSelect?.price_buy,
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

  const handleSubmit = () => {
    if (isLoadingAspects) {
      alert("Thuộc tính theo danh mục chưa được loading thành công ");
    } else {
      const missingRequiredAspects = aspects
        .filter((aspect) => aspect.aspectConstraint?.aspectRequired) // chỉ lấy những field bắt buộc
        .filter((requiredAspect) => {
          const value = formData.aspects?.[requiredAspect.localizedAspectName];
          return !value || value.length === 0; // chưa có giá trị hoặc rỗng
        })
        .map((aspect) => aspect.localizedAspectName); // chỉ lấy tên để thông báo

      if (missingRequiredAspects.length > 0) {
        alert(
          `Vui lòng nhập các trường bắt buộc: ${missingRequiredAspects.join(
            ", "
          )}`
        );
        return;
      }
      closeModal();
      editProduct(formData, itemSelect?._id);
    }
  };

  const optionCategorySuggestion = categorySuggestion.map((elm) => {
    return {
      label: elm.category.categoryName,
      value: elm.category.categoryId,
    };
  });
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
  const optionInvertoryLocation = invertoryLocation.map((elm) => {
    return {
      label: `${elm?.location?.address?.country}- ${elm?.location?.address?.city} - ${elm?.location?.address?.addressLine1}`,
      value: elm.merchantLocationKey,
    };
  });

  return (
    <Box className={styles.container}>
      <MyTypography className={styles.title}>
        {t("title_register_change")}
      </MyTypography>

      <Stack spacing={2}>
        

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
