import React, { useRef } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ModalChooseFile from "../ModalChooseFile";
import ModalSetupUser from "../ModalSetupUser";
import ModalSetUpEbay from "../ModalSetupEbay";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { useSetupEbay } from "@/hook/ProductPage/useSetupEbay";
import request from "@/services/Request";

export default function EbayToolbar() {
  const {
    fulfillmentPolicy,
    returnPolicy,
    paymentPolicy,
    invertoryLocation,
    config,
    refModalSetupEbay,
    getfulfillmentPolicy,
    getReturnPolicies,
    getPaymentPolicy,
    getInventoryLocations,
    getConfig,
    putConfig,
  } = useSetupEbay();
  const refModalChooseFile = useRef(null);
  const refModalSetupUser = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const chooseFile = () => {
    refModalChooseFile?.current?.openModal();
  };

  const setupUser = () => {
    refModalSetupUser?.current?.openModal();
  };

  const setupEbay = () => {
    refModalSetupEbay?.current?.openModal();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleDownload = async () => {
    const response = await request.post(
      `/api/product-upload/export`,
      {},
      { responseType: 'blob' }  // 👈 Bắt buộc!
    );

    console.log("response", response);

    try {
      // Kiểm tra nội dung Blob
      response.text().then(text => {
        console.log("📄 Nội dung file CSV:", text.slice(0, 300)); // in thử 300 ký tự đầu tiên
      });

      const blob = new Blob([response], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'product_upload.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("❌ Lỗi khi tạo và tải file:", err);
    }
  };

  const handleClick = (key) => {
    switch (key) {
      case "download":
        handleDownload();
        break;
      case "upload":
        chooseFile();
        break;
      case "setup-ebay":
        setupEbay();
        break;
      case "logout":
        logout();
        break;
      default:
        break;
    }
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.topInfo}>
        <Typography variant="body2" className={styles.infoText}>
          {t("number_register")} Surugaya: <b>100/220</b> &nbsp; NETSEA:{" "}
          <b>50/130</b>
        </Typography>
        <Typography variant="body2" className={styles.infoText}>
          {t("number_list_ebay")} <b>1000</b> ({t("inconsistent")} <b>5</b>
          {t("show")})
        </Typography>
      </Box>

      <Box className={styles.actionsRow}>
        <Stack direction="row" spacing={1} className={styles.actionButtons}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => handleClick("download")}
          >
            {t("action_dowload_csv")}
          </Button>
          <Button
            size="small"
            variant="outlined"
            onClick={() => handleClick("upload")}
          >
            {t("action_upload_csv")}
          </Button>
          {/* <Button size="small" variant="outlined" onClick={setupUser}>
            Thiết lập người dùng
          </Button> */}
          <Button
            size="small"
            variant="outlined"
            onClick={() => {
              getPaymentPolicy();
              getReturnPolicies();
              getfulfillmentPolicy();
              getInventoryLocations();
              getConfig(() => { });
              handleClick("setup-ebay");
            }}
          >
            {t("setup_ebay")}
          </Button>
          {/* <Button
            size="small"
            variant="outlined"
            onClick={() => handleClick("logout")}
          >
            Đăng xuất
          </Button> */}
        </Stack>

        {/* <Stack direction="row" spacing={1}>
          <IconButton onClick={handleDownload}>
            <SaveIcon />
          </IconButton>
          <IconButton onClick={chooseFile}>
            <UploadFileIcon />
          </IconButton>
          <IconButton onClick={setupUser}>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <LoginIcon />
          </IconButton>
          <IconButton onClick={logout}>
            <ExitToAppIcon />
          </IconButton>
        </Stack> */}
      </Box>

      <ModalChooseFile ref={refModalChooseFile} />
      <ModalSetupUser ref={refModalSetupUser} />
      <ModalSetUpEbay
        ref={refModalSetupEbay}
        fulfillmentPolicy={fulfillmentPolicy}
        returnPolicy={returnPolicy}
        paymentPolicy={paymentPolicy}
        invertoryLocation={invertoryLocation}
        config={config}
        putConfig={putConfig}
      />
    </Box>
  );
}
