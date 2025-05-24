import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  Box,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import MyTypography from "@/components/common/MyTypography";
import MyInput from "@/components/common/MyInput";
import {
  getDulicateUrl,
  getMonitor,
  TOOLTIP,
  getNotificationEmail,
} from "../../../../untils/dataMockup";
import MyButton from "@/components/common/MyButton";
import request from "@/services/Request";
import MyRadioGroup from "@/components/common/MyRadioGroup";
import MyInputToolTip from "@/components/common/MyInputToolTip";
import MyLink from "@/components/common/MyLink";
import { useTranslation } from "react-i18next";

const FormSetupUser = () => {
  const { t } = useTranslation();
  const [foundation, setFoundation] = useState("netsea");
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState([]);
  const [alignment, setAlignment] = useState("configured");
  const notificationEmail = getNotificationEmail(t);
  const duplicateUrl = getDulicateUrl(t);
  const monitor = getMonitor(t);

  const handleChangeToggle = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  const handleChange = (e) => {
    setFoundation(e.target.value);
  };

  const getProductLocal = async () => {
    setProduct(JSON.parse(localStorage.getItem("PRODUCT_SEARCH")));
  };
  useEffect(() => {
    getProductLocal();
  }, []);

  const search = useCallback(async () => {
    const response = await request.post("/api/product/search", {
      platform_type: foundation,
      keyword: keyword,
      category: category,
    });
    if (response) {
      setProduct(response);

      localStorage.setItem("PRODUCT_SEARCH", JSON.stringify(response));
    }
  }, [foundation, keyword, category]);

  return (
    <Box>
      <MyTypography className={styles.title}>
        {t("accountSettings_title")}
      </MyTypography>
      <Stack spacing={3}>
        <Grid className={styles.row} container spacing={3}>
          <MyInput
            fullWidth
            label={t("accountSettings_username_haru")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInputToolTip
            fullWidth
            label={t("accountSettings_app_id_ebay")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbay}
          />
        </Grid>
        <Grid className={styles.row} container spacing={3}>
          <MyInput
            fullWidth
            label={t("accountSettings_login_id_haru")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInput
            fullWidth
            label={t("accountSettings_password_haru")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInputToolTip
            fullWidth
            label={t("accountSettings_dev_id_ebay")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label={t("accountSettings_cert_id_ebay")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
        </Grid>
        <Grid className={styles.row} container spacing={3}>
          <MyInputToolTip
            fullWidth
            label={t("accountSettings_login_id_nessie")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label={t("accountSettings_password_nessie")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label={t("accountSettings_login_id_superdelivery")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label={t("accountSettings_password_superdelivery")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
        </Grid>
        <Grid className={styles.row} container spacing={3}>
          <MyInputToolTip
            fullWidth
            label={t("accountSettings_login_id_ichiokunet")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label={t("accountSettings_password_ichiokunet")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label={t("accountSettings_login_id_mirai")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label={t("accountSettings_password_mirai")}
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
        </Grid>
        <Stack spacing={3}>
          <Grid container className={styles.row} spacing={3}>
            <Grid className={styles.frame}>
              <MyRadioGroup
                name={"type_file"}
                label={t("accountSettings_email_notify_label")}
                options={notificationEmail}
                value={"ratio"}
                onChange={() => {}}
                rowWrapperClassName={styles.rowWrapperClassName}
              />
              <MyTypography>
                {t("accountSettings_email_notify_desc")}
              </MyTypography>
            </Grid>
            <Grid className={styles.frame}>
              <MyRadioGroup
                name={"type_file"}
                label={t("accountSettings_check_duplicate_url_label")}
                options={duplicateUrl}
                value={"ratio"}
                onChange={() => {}}
                rowWrapperClassName={styles.rowWrapperClassName}
              />
              <MyTypography>
                {t("accountSettings_check_duplicate_url_desc")}
              </MyTypography>
            </Grid>
          </Grid>
          <Grid container className={styles.row} spacing={3}>
            <Grid className={styles.frame}>
              <MyRadioGroup
                name={"type_file"}
                label={t("accountSettings_monitor_rakuten_label")}
                options={notificationEmail}
                value={"ratio"}
                onChange={() => {}}
                rowWrapperClassName={styles.rowWrapperClassName}
              />
              <MyTypography>
                {t("accountSettings_monitor_rakuten_desc")}
              </MyTypography>
            </Grid>
            <Grid className={styles.frame}>
              <MyRadioGroup
                name={"type_file"}
                label={t("accountSettings_monitor_yahoo_auction_label")}
                options={duplicateUrl}
                value={"ratio"}
                onChange={() => {}}
                rowWrapperClassName={styles.rowWrapperClassName}
              />
              <MyTypography>
                {t("accountSettings_monitor_yahoo_auction_desc")}
              </MyTypography>
            </Grid>
          </Grid>
        </Stack>
        <Grid className={styles.row} container spacing={3}>
          <Grid className={styles.frame} container>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleChangeToggle}
              aria-label="text alignment"
              className={styles.toggleBtn}
            >
              <ToggleButton value="notConfigured" aria-label="left aligned">
                {t("accountSettings_app_key_toggle_not_configured")}
              </ToggleButton>
              <ToggleButton value="configured" aria-label="center aligned">
                {t("accountSettings_app_key_toggle_configured")}
              </ToggleButton>
            </ToggleButtonGroup>
            <MyTypography>
              {t("accountSettings_app_key_desc")}{" "}
              <a>{t("accountSettings_app_key_desc_one")}</a>
              {t("accountSettings_app_key_desc_two")}
            </MyTypography>
            {alignment !== "configured" && (
              <Stack spacing={2}>
                <MyTypography>
                  {t("accountSettings_app_key_setup_reminder")}{" "}
                  <a>{t("accountSettings_app_key_setup_reminder_one")}</a>
                  {t("accountSettings_app_key_setup_reminder_two")}{" "}
                  <a>{t("accountSettings_app_key_setup_reminder_three")}</a>
                </MyTypography>
                <MyInputToolTip
                  fullWidth
                  label={t("accountSettings_app_key_endpoint_1")}
                  name="title"
                  className={styles.status}
                  size="small"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  toolTip={TOOLTIP.IdEbayDevelop}
                  disabled
                />
                <MyInputToolTip
                  fullWidth
                  label={t("accountSettings_app_key_endpoint_2")}
                  name="title"
                  className={styles.status}
                  size="small"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  toolTip={TOOLTIP.IdEbayDevelop}
                  disabled
                />
                <MyTypography>{t("accountSettings_app_key_note")}</MyTypography>
              </Stack>
            )}
          </Grid>
          <Grid className={styles.frame} container>
            <MyRadioGroup
              name={"type_file"}
              label={t("accountSettings_monitor_yahoo_shopping_label")}
              options={monitor}
              value={"ratio"}
              onChange={() => {}}
              rowWrapperClassName={styles.rowWrapperClassName}
            />
            <MyTypography>
              {t("accountSettings_monitor_yahoo_shopping_desc")}
            </MyTypography>
          </Grid>
        </Grid>
      </Stack>
      <MyButton
        variant="contained"
        color="info"
        size="small"
        className={styles.buttons}
        onClick={search}
      >
        {t("accountSettings_submit_button")}
      </MyButton>
    </Box>
  );
};

export default FormSetupUser;
