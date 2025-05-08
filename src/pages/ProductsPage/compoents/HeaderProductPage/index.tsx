import MyLink from "@/components/common/MyLink";
import MySearchInput from "@/components/common/MySearchInput";
import MyTypography from "@/components/common/MyTypography";
import { Box } from "@mui/material";
import Language from "../Language";
import styles from "./styles.module.scss";

const HeaderProductPage = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.leftHeader}>
        <Box className={styles.version}>
          <MyTypography fontSize={14} className={styles.txtVersion}>
            Phiên bản chuẩn
          </MyTypography>
        </Box>
        <Box className={styles.link}>
          <MyLink fontSize={14}>Danh sách quản lý hàng tồn kho HARU</MyLink>
          <MyLink fontSize={14}>[Đăng ký mới]</MyLink>
        </Box>
        <Box className={styles.search}>
          <MySearchInput />
        </Box>
      </Box>
      <Box className={styles.rightHeader}>
        <MyTypography fontSize={14}>Tên người dùng: Tokio Oyama</MyTypography>
        <MyLink fontSize={14}>[Đăng xuất]</MyLink>
        <Box className={styles.language}>
          <Language className={styles.selectLanguage} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderProductPage;
