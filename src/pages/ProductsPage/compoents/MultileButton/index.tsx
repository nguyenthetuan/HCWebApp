import MyButton from "@/components/common/MyButton";
import { Box, Stack } from "@mui/material";
import styles from "./styles.module.scss";

export default function MultileButton() {
  return (
    <Box className={styles.centerFlexShrink}>
      <Stack spacing={1}>
        <MyButton
          variant="contained"
          color="info"
          size="small"
          className={styles.buttons}
          sx={{
            fontSize: {
              xs: "10px", // Dưới 600px
              sm: "10px", // Từ 600px trở lên
              md: "14px", // Từ 900px trở lên
              lg: "16px", // Từ 1200px trở lên
            },
          }}
        >
          Tất cả cập nhật giá eB
        </MyButton>
        <MyButton
          variant="contained"
          sx={{ backgroundColor: "orange", fontSize: 8 }}
          size="small"
        >
          Xóa tất cả các mục đã
        </MyButton>
        <MyButton
          variant="contained"
          sx={{ backgroundColor: "violet", fontSize: 8 }}
          size="small"
        >
          Danh sách eBay trực tiếp
        </MyButton>
      </Stack>
    </Box>
  );
}
