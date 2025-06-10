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
          {/* Cột trái - 2 phần */}
          <Grid className={styles.leftColumn}>
            <Stack spacing={2} className={styles.frame}>
              <Grid container spacing={2}>
                <MyInput
                  fullWidth
                  label={t("label_product_name")}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.status}
                  size="small"
                />
                <MyInputToolTip
                  fullWidth
                  label={t("label_purchase_price")}
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  className={styles.status}
                  toolTip={tooltips.PRICE}
                  size="small"
                />
              </Grid>

              <Grid container spacing={2}>
                <MyInput
                  fullWidth
                  label={t("label_purchase_url")}
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  className={styles.status}
                  size="small"
                />
                <MyInput
                  fullWidth
                  label="Avatar URL"
                  name="avatar_url"
                  value={formData.avatar_url}
                  onChange={handleChange}
                  className={styles.status}
                  size="small"
                />
              </Grid>

              <Grid container spacing={2}>
                <MyInput
                  fullWidth
                  label={t("label_inventory")}
                  name="availableQuantity"
                  value={formData.availableQuantity}
                  onChange={handleChange}
                  className={styles.status}
                  size="small"
                />
                <MyInput
                  fullWidth
                  label={t("label_quantity_limit_per_buyer")}
                  name="quantityLimitPerBuyer"
                  value={formData.quantityLimitPerBuyer}
                  onChange={handleChange}
                  className={styles.status}
                  size="small"
                />
                <MyInput
                  fullWidth
                  label={t("label_sale_price")}
                  name="price_buy"
                  value={formData.price_buy}
                  onChange={handleChange}
                  className={styles.status}
                  size="small"
                />
              </Grid>

              <Grid container spacing={2}>
                <MySelectDropdow
                  id="fulfillment"
                  name="listingPolicies.fulfillmentPolicyId"
                  label={t("label_fulfillment_policy")}
                  value={formData.listingPolicies.fulfillmentPolicyId}
                  onChange={handleChange}
                  options={optionFullfimentPolicy}
                  className={styles.dropdow}
                  size="small"
                />
                <MySelectDropdow
                  id="return"
                  name="listingPolicies.returnPolicyId"
                  label={t("label_return_policy")}
                  value={formData.listingPolicies.returnPolicyId}
                  onChange={handleChange}
                  options={optionReturnPolicy}
                  className={styles.dropdow}
                  size="small"
                />
                <MySelectDropdow
                  id="payment"
                  name="listingPolicies.paymentPolicyId"
                  label={t("label_payment_policy")}
                  value={formData.listingPolicies.paymentPolicyId}
                  onChange={handleChange}
                  options={optionPaymentPolicy}
                  className={styles.dropdow}
                  size="small"
                />
                <MySelectDropdow
                  id="warehouse"
                  name="merchantLocationKey"
                  label={t("label_warehouse_location")}
                  value={formData.merchantLocationKey}
                  onChange={handleChange}
                  options={optionInvertoryLocation}
                  className={styles.dropdow}
                  size="small"
                />
              </Grid>

              <MyInput
                label="Content"
                name="content"
                multiline
                rows={6}
                value={formData.content}
                onChange={handleChange}
                className={styles.status}
              />
            </Stack>
          </Grid>

          {/* Cột phải - 1 phần */}
          <Grid className={styles.rightColumn}>
            <Stack spacing={2} className={styles.frame}>
              <MyTypography>{t("select_category_by_level")}</MyTypography>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleChangeToggle}
                aria-label="text alignment"
                className={styles.toggleBtn}
              >
                <ToggleButton value="NORMAL" className={styles.txtChooseNormal}>
                  {t("choose_normal")}
                </ToggleButton>
                <ToggleButton value="SUGGESSION">
                  {t("choose_suggestion")}
                </ToggleButton>
              </ToggleButtonGroup>

              {alignment === "NORMAL" ? (
                <CategorySelect
                  rootCategoryNode={categoryTree.rootCategoryNode}
                  selectedLeafCategoryId="42"
                  onSelectCategory={(finalCategory) => {
                    setFormData((prev) => ({
                      ...prev,
                      categoryId: finalCategory.category.categoryId,
                    }));
                    getItemAspectsForCategory(
                      finalCategory.category.categoryId
                    );
                  }}
                />
              ) : (
                <MySelectDropdow
                  id="status"
                  name="categoryId"
                  label={t("select_category_suggestion")}
                  value={formData.categoryId}
                  onChange={(e) => {
                    handleChange(e);
                    getItemAspectsForCategory(e.target.value);
                  }}
                  options={optionCategorySuggestion}
                  className={styles.dropdow}
                  size="small"
                />
              )}
            </Stack>
          </Grid>
          <Stack spacing={2} className={styles.rightColumn}>
            <MyTypography>
              {t("select_product_attributes_by_category")}
            </MyTypography>
            <Box>
              {isLoadingAspects ? (
                <AspectFormLoading />
              ) : (
                aspects?.length > 0 &&
                aspects.map((aspect) => {
                  const isRequired = aspect.aspectConstraint?.aspectRequired;
                  const options = aspect?.aspectValues?.map((elm) => ({
                    label: elm.localizedValue,
                    value: elm.localizedValue,
                  }));
                  return (
                    <Box key={aspect.localizedAspectName} mb={2}>
                      <MySelectDropdow
                        placeholder={`Nhập ${aspect.localizedAspectName}`}
                        value={
                          formData.aspects[aspect.localizedAspectName] || ""
                        }
                        options={options}
                        onChange={(e) =>
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            aspects: {
                              ...prevFormData.aspects,
                              [aspect.localizedAspectName]: e.target.value,
                            },
                          }))
                        }
                        id={aspect.localizedAspectName}
                        name={aspect.localizedAspectName}
                        label={
                          isRequired
                            ? `${aspect.localizedAspectName}${t("required")}`
                            : aspect.localizedAspectName
                        }
                      />
                    </Box>
                  );
                })
              )}
            </Box>
          </Stack>
        </Grid>

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
