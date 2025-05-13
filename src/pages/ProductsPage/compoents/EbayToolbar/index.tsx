import MyLink from "@/components/common/MyLink";
import EmailIcon from "@mui/icons-material/Email";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LoginIcon from "@mui/icons-material/Login";
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from "@mui/icons-material/Settings";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Box, IconButton, Stack } from "@mui/material";
import styles from "./styles.module.scss";
import ModalChooseFile from "../ModalChooseFile";
import { useRef } from "react";

export default function EbayToolbar() {
  const refModalChooseFile = useRef(null);

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

  const handleClick = (text) => {
    switch (text) {
      case "0":
        break;
      case "1":
        refModalChooseFile?.current?.openModal();
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
          <IconButton>
            <SaveIcon />
          </IconButton>
          <IconButton>
            <UploadFileIcon />
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
