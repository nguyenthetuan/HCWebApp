import MyLink from "@/components/common/MyLink";
import EmailIcon from "@mui/icons-material/Email";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LoginIcon from "@mui/icons-material/Login";
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Box, Icon, IconButton, Stack } from "@mui/material";
import styles from "./styles.module.scss";
import ModalChooseFile from "../ModalChooseFile";
import { useRef } from "react";
import ModalSetupUser from "../ModalSetupUser";
import ModalSetUpEbay from "../ModalSetupEbay";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function EbayToolbar() {
  const refModalChooseFile = useRef(null);
  const refModalSetupUser = useRef(null);
  const refModalSetupEbay = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const links = [
    {
      key: "0",
      value: t("action_dowload_csv"),
    },
    {
      key: "1",
      value: t("action_upload_csv"),
    },
    {
      key: "2",
      value: t("action_open_album_tracking_customer"),
    },
    {
      key: "3",
      value: t("action_login_ebay"),
    },
    {
      key: "4",
      value: t("action_logout"),
    },
    {
      key: "5",
      value: t("action_auto_link"),
    },
    {
      key: "6",
      value: t("action_automatic_link_log"),
    },
    {
      key: "7",
      value: t("action_ebay_settiong"),
    },
  ];

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

    const csvContent =
      "\uFEFF" + // BOM để Excel nhận UTF-8
      data.map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "du_lieu.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClick = (text) => {
    switch (text) {
      case "0":
        handleDownload();
        break;
      case "1":
        chooseFile();
        break;
      case "7":
        setupEbay();
        break;
      case "4":
        logout();
        break;
      default:
        break;
    }
  };
  return (
    <Box className={styles.container}>
      <Box className={styles.boxLink}>
        {links.map((item, idx) => (
          <MyLink
            key={idx}
            component="button"
            variant="body2"
            underline="always"
            sx={{ cursor: "pointer", fontSize: 12 }}
            onClick={() => handleClick(item.key)}
          >
            {item.value}
          </MyLink>
        ))}
        <Stack direction="row">
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
        </Stack>
      </Box>
      <ModalChooseFile ref={refModalChooseFile} />
      <ModalSetupUser ref={refModalSetupUser} />
      <ModalSetUpEbay ref={refModalSetupEbay} />
    </Box>
  );
}

const style = {
  boxLink: {
    display: "flex",
    flexWrap: "wrap",
    gap: 0.5,
  },
};
