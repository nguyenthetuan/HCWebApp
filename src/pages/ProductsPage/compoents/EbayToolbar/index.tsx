import MyLink from "@/components/common/MyLink";
import EmailIcon from "@mui/icons-material/Email";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LoginIcon from "@mui/icons-material/Login";
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from "@mui/icons-material/Settings";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Box, IconButton, Stack } from "@mui/material";
import styles from "./styles.module.scss";

export default function EbayToolbar() {
  const links = [
    "Cách sử dụng (Hướng dẫn đơn giản)",
    "Kiểm tra từ vựng hàng tồn kho",
    "Tải xuống CSV",
    "Tải lên CSV",
    "Cài đặt tài khoản người dùng HARU",
    "Mở album lưu trữ/Mở album giám sát khách hàng",
    "Đăng nhập eBay",
    "Đăng xuất",
    "Chức năng liên kết tự động eBay đang hoạt động",
    "Nhật ký liên kết tự động eBay",
    "Cài đặt chức năng niêm yết eBay",
  ];

  return (
    <Box className={styles.container}>
      <Box className={styles.boxLink}>
        {links.map((text, idx) => (
          <MyLink
            key={idx}
            component="button"
            variant="body2"
            underline="always"
            sx={{ cursor: "pointer", fontSize: 12 }}
            onClick={() => alert(`Clicked: ${text}`)}
          >
            {text}
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
