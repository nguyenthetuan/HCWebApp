import MyButton from "@/components/common/MyButton";
import { Box, Stack } from "@mui/material";
import styles from "./styles.module.scss";
import ModalSearchProduct from "../ModalSearchProduct";
import { useRef } from "react";

export default function MultileButton() {
  const refModal = useRef(null);
  const search = () => {
    refModal?.current?.openModal();
  };
  return (
    <Box className={styles.centerFlexShrink}>
      <Stack spacing={1}>
        <MyButton
          variant="contained"
          color="info"
          size="small"
          className={styles.buttons}
        >
          Tất cả cập nhật giá eB
        </MyButton>
        <MyButton
          variant="contained"
          sx={{ backgroundColor: "orange", fontSize: 8 }}
          size="small"
          className={styles.buttons}
        >
          Xóa tất cả các mục đã
        </MyButton>
        <MyButton
          variant="contained"
          sx={{ backgroundColor: "violet", fontSize: 8 }}
          size="small"
          className={styles.buttons}
        >
          Danh sách eBay trực tiếp
        </MyButton>
        <MyButton
          variant="contained"
          sx={{ backgroundColor: "chocolate", fontSize: 8 }}
          size="small"
          className={styles.buttons}
          onClick={search}
        >
          Tìm kiếm
        </MyButton>
      </Stack>
      <ModalSearchProduct ref={refModal} />
    </Box>
  );
}
