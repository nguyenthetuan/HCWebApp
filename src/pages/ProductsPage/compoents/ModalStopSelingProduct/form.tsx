import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyTypography from "@/components/common/MyTypography";
import request from "@/services/Request";
import { Box, Grid, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const FormStopSellingProduct = () => {
  const [keyword, setKeyword] = useState("");
  const search = useCallback(async () => {}, []);
  return (
    <Box>
      <MyTypography className={styles.title}>
        Danh sách sản phẩm eBay đã dừng
      </MyTypography>
      <Stack spacing={2}>
        <MyTypography>
          Vui lòng xác nhận số mặt hàng bạn muốn ngừng niêm yết. Nhấp vào "Dừng
          danh sách eBay" sẽ dừng danh sách eBay của bạn.
        </MyTypography>
        <MyInput
          fullWidth
          label="Số mặt hàng eBay"
          name="title"
          className={styles.status}
          size="small"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </Stack>
      <MyButton
        variant="contained"
        color="info"
        size="small"
        className={styles.buttons}
        onClick={search}
      >
        Tạm dừng niêm yết trên eBay
      </MyButton>
    </Box>
  );
};

export default FormStopSellingProduct;
