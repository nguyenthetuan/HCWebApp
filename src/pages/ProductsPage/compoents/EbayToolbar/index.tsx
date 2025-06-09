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

  const handleDownload = () => {
    const data = [
      ["Tên", "Tuổi", "Email"],
      ["Nguyễn Văn A", 25, "a@example.com"],
      ["Trần Thị B", 30, "b@example.com"],
    ];
    const csvContent = "\uFEFF" + data.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "du_lieu.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          Số lượng mặt hàng đã đăng ký: Surugaya: <b>100/220</b> &nbsp; NETSEA:{" "}
          <b>50/130</b>
        </Typography>
        <Typography variant="body2" className={styles.infoText}>
          Số lượng danh sách eBay: <b>1000</b> (Số lượng không nhất quán:{" "}
          <b>5</b> được hiển thị)
        </Typography>
      </Box>

      <Box className={styles.actionsRow}>
        <Stack direction="row" spacing={1} className={styles.actionButtons}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => handleClick("download")}
          >
            Tải xuống CSV
          </Button>
          <Button
            size="small"
            variant="outlined"
            onClick={() => handleClick("upload")}
          >
            Tải lên CSV
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
              getConfig(() => {});
              handleClick("setup-ebay");
            }}
          >
            Thiết lập eBay
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
