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

export default function EbayToolbar() {
  const refModalChooseFile = useRef(null);
  const refModalSetupUser = useRef(null);

  const links = [
    {
      key: "0",
      value: "Tải xuống CSV",
    },
    {
      key: "1",
      value: "Tải lên CSV",
    },
    {
      key: "2",
      value: "Mở album lưu trữ/Mở album giám sát khách hàng",
    },
    {
      key: "3",
      value: "Đăng nhập eBay",
    },
    {
      key: "4",
      value: "Đăng xuất",
    },
    {
      key: "5",
      value: "Chức năng liên kết tự động eBay đang hoạt động",
    },
    {
      key: "6",
      value: "Nhật ký liên kết tự động eBay",
    },
    {
      key: "7",
      value: "Cài đặt chức năng niêm yết eBay",
    },
  ];

  const chooseFile = () => {
    refModalChooseFile?.current?.openModal();
  };
  const setupUser = () => {
    refModalSetupUser?.current?.openModal();
  };
  const handleClick = (text) => {
    switch (text) {
      case "0":
        break;
      case "1":
        chooseFile();
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
            onClick={handleClick}
          >
            {item.value}
          </MyLink>
        ))}
        <Stack direction="row">
          <IconButton>
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
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
        </Stack>
      </Box>
      <ModalChooseFile ref={refModalChooseFile} />
      <ModalSetupUser ref={refModalSetupUser} />
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
