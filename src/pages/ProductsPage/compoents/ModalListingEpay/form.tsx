import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyLink from "@/components/common/MyLink";
import MyTypography from "@/components/common/MyTypography";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import ImageUploader from "@/components/common/ImageUpload";
import MyRadioGroup from "@/components/common/MyRadioGroup";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import MyInputToolTip from "@/components/common/MyInputToolTip";
import MyButtonTooltip from "@/components/common/MyButtonTooltip";
import MySelectDropdowTooltip from "@/components/common/MySelectDropdowTooltip";
import {
  TOOLTIP,
  getOptionStatus,
  getOptionEcommerce,
  getOptionHtml,
  getEndDow,
} from "@/untils/dataMockup";
import { useTranslation } from "react-i18next";
const FormEpay = () => {
  const tooltips = TOOLTIP();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    condition: "",
    price: "",
    quantity: 1,
    returnPolicy: "",
    paymentPolicy: "",
    location: "",
  });
  const [status, setStatus] = useState("new");
  const { t } = useTranslation();
  const optionHtml = getOptionHtml(t);
  const optionStatus = getOptionStatus(t);
  const optionEcommerce = getOptionEcommerce(t);
  const endDow = getEndDow(t);

  const [statusEbay, setStatusEbay] = useState("1");
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  const [statusHtml, setStatusHtml] = useState("0");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  const [inputs, setInputs] = useState(["", "", "", "", ""]);

  const handleAdd = () => {
    setInputs([...inputs, ""]);
  };

  const handleChangeInput = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  return (
    <Box>
      <Box className={styles.header}>
        <MyTypography variant="h5" mb={2}>
          {t("title")}
          <MyLink>
            URL nhà cung cấp: https://www.suruga-ya.jp/product/detail/174000517
          </MyLink>
        </MyTypography>
        <Grid container spacing={2}>
          <MyButton variant="contained" color="primary" className={styles.btn}>
            {t("btn_getWebsiteInfo")}
          </MyButton>
          <MyButton variant="contained" color="primary" className={styles.btn}>
            {t("btn_copyToClipboard")}
          </MyButton>
          <MyButton variant="contained" color="primary" className={styles.btn}>
            {t("btn_callListingTemplate")}
          </MyButton>
        </Grid>
      </Box>
      <MyRadioGroup
        label=""
        name="gender"
        value={statusEbay}
        onChange={setStatusEbay}
        options={optionEcommerce}
      />
      <Stack spacing={2}>
        <Stack className={styles.frame} spacing={2}>
          <Grid className={styles.row} container spacing={2}>
            <MyInput
              fullWidth
              label={t("title_japanese")}
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <KeyboardDoubleArrowRightIcon />
            <MyButton
              color="primary"
              variant="contained"
              className={styles.btn}
            >
              {t("btn_translateTitle")}
            </MyButton>
            <KeyboardDoubleArrowRightIcon />
            <MyInput
              fullWidth
              label={t("title_translate")}
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
          </Grid>
          <ImageUploader />
          <Grid className={styles.row} container spacing={2}>
            <TextField
              fullWidth
              label={t("product_description")}
              name="description"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <KeyboardDoubleArrowRightIcon />
            <MyButton
              color="primary"
              variant="contained"
              className={styles.btn}
            >
              {t("btn_translateDescription")}
            </MyButton>
            <KeyboardDoubleArrowRightIcon />
            <TextField
              fullWidth
              label={t("product_description")}
              name="description"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
          </Grid>
          <Grid container spacing={2}>
            <MyRadioGroup
              label={""}
              name="html"
              value={statusHtml}
              onChange={setStatusHtml}
              options={optionHtml}
            />
            <MyButton
              variant="contained"
              color="primary"
              className={styles.btn}
            >
              {t("btn_preview")}
            </MyButton>
            <MyButtonTooltip
              variant="contained"
              color="primary"
              className={styles.btn}
              toolTip={t("tooltipHtml")}
            >
              {t("btn_ebaySetting")}
            </MyButtonTooltip>
          </Grid>
          <Grid className={styles.row} container spacing={2}>
            <MyInputToolTip
              fullWidth
              label={t("sku")}
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className={styles.status}
              toolTip={tooltips.SKU}
              size="small"
            />
            <MyInputToolTip
              fullWidth
              label={t("categoryId")}
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              className={styles.status}
              size="small"
              toolTip={<MyTypography>{tooltips.CATEGORY_ID}</MyTypography>}
            />
            <MyInputToolTip
              fullWidth
              label={t("storeCategoryId")}
              name="returnPolicy"
              size="small"
              value={formData.returnPolicy}
              onChange={handleChange}
              className={styles.status}
              toolTip={
                <MyTypography>{tooltips.STORE_CATEGORY_ID}</MyTypography>
              }
            />
            <MySelectDropdowTooltip
              id="status"
              name="status"
              label={t("status")}
              value={"1"}
              onChange={handleChange}
              options={optionStatus}
              className={styles.dropdow}
              size="small"
              toolTip={<MyTypography>{tooltips.STATUS}</MyTypography>}
            />
          </Grid>
          <MyInputToolTip
            fullWidth
            label={t("condition_description")}
            name="condition"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className={styles.status}
            toolTip={tooltips.CONDITION}
          />
          <Grid className={styles.row} container spacing={2}>
            <MyInput
              fullWidth
              label={t("postalCode")}
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyInput
              fullWidth
              label={t("mpn")}
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyInput
              fullWidth
              label={t("brand")}
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
          </Grid>
          <Grid className={styles.row} container spacing={2}>
            <MyInput
              fullWidth
              label=""
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyButtonTooltip
              variant="contained"
              color="primary"
              className={styles.btn}
              toolTip={tooltips.SPECIFICS}
            >
              {t("btn_getItemSpecifics")}
            </MyButtonTooltip>
          </Grid>
        </Stack>

        <Box className={styles.frame}>
          <Typography marginBottom={1}>{t("productDetails")}</Typography>
          <Grid className={styles.row} container spacing={42}>
            <Stack className={styles.Box} spacing={2}>
              {inputs.map((value, index) => (
                <MyInput
                  key={index}
                  label={`ItemSpecifics ${index + 1}`}
                  value={value}
                  onChange={(e) => handleChangeInput(index, e)}
                  size="small"
                />
              ))}
              <Button
                variant="contained"
                onClick={handleAdd}
                className={styles.btnAdd}
              >
                {t("btn_add")}
              </Button>
            </Stack>
            <Stack className={styles.Box} spacing={2}>
              <MyInput
                label={t("requirement")}
                name="description"
                multiline
                rows={2}
                value={formData.description}
                onChange={handleChange}
                className={styles.status}
              />
              <MyInput
                label={t("introduction")}
                name="description"
                multiline
                rows={2}
                value={formData.description}
                onChange={handleChange}
                className={styles.status}
              />
              <MyInput
                label={t("options")}
                name="description"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className={styles.status}
              />
              <MyTypography>{tooltips.DETAIL_PRODUCT}</MyTypography>
            </Stack>
          </Grid>
        </Box>
        <Grid className={styles.frameRow}>
          <Stack className={styles.frame} spacing={2}>
            <MyTypography marginBottom={1}>{t("bestOffer")}</MyTypography>
            <MyRadioGroup
              label=""
              name="gender"
              value={statusEbay}
              onChange={setStatusEbay}
              options={endDow}
            />
            <MyInput
              fullWidth
              label={t("autoAccept")}
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyInput
              fullWidth
              label={t("autoReject")}
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
          </Stack>
          <Stack className={styles.frame} spacing={2}>
            <MyTypography marginBottom={1}>{t("privateList")}</MyTypography>
            <MyRadioGroup
              label=""
              name="gender"
              value={statusEbay}
              onChange={setStatusEbay}
              options={endDow}
            />
          </Stack>
        </Grid>
        <Grid className={styles.frameRow}>
          <MyInputToolTip
            fullWidth
            label={t("quantity")}
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.status}
            size="small"
          />
          <MySelectDropdowTooltip
            id="status"
            name="status"
            label={t("shippingPolicy")}
            value={"1"}
            onChange={handleChange}
            options={optionStatus}
            className={styles.dropdow}
            size="small"
            toolTip={<MyTypography>{tooltips.STATUS}</MyTypography>}
          />
          <MySelectDropdowTooltip
            id="status"
            name="status"
            label={t("returnPolicy")}
            value={"1"}
            onChange={handleChange}
            options={optionStatus}
            className={styles.dropdow}
            size="small"
            toolTip={<MyTypography>{tooltips.STATUS}</MyTypography>}
          />
          <MySelectDropdowTooltip
            id="status"
            name="status"
            label={t("returnPolicy")}
            value={"1"}
            onChange={handleChange}
            options={optionStatus}
            className={styles.dropdow}
            size="small"
            toolTip={<MyTypography>{tooltips.STATUS}</MyTypography>}
          />
          <MyInputToolTip
            fullWidth
            label={t("location")}
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.status}
            size="small"
          />
        </Grid>
        <Grid container spacing={2}>
          <MyButton variant="contained" color="primary" onClick={handleSubmit}>
            {t("btn_submit")}
          </MyButton>
          <MyButton variant="contained" color="primary" onClick={handleSubmit}>
            {t("btn_saveList")}
          </MyButton>
          <MyButton variant="contained" color="primary" onClick={handleSubmit}>
            {t("btn_saveAsTemplate")}
          </MyButton>
        </Grid>
      </Stack>
    </Box>
  );
};

export default FormEpay;
