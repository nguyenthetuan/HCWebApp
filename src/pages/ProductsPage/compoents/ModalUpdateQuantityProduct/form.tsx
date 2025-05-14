import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyTypography from "@/components/common/MyTypography";
import request from "@/services/Request";
import { Box, Grid, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const FormUpdateQuantity = () => {
  const [keyword, setKeyword] = useState("");
  const search = useCallback(async () => {}, []);
  return (
    <Box>
      <MyTypography className={styles.title}>
        Thay đổi số lượng mặt hàng eBay
      </MyTypography>
      <Stack spacing={2}>
        <MyTypography>
          Vui lòng kiểm tra số sản phẩm mà bạn muốn thay đổi số lượng.
          <br />* Nhập sốlượng bạn muốn thay đổi.
          <br />* Nhấp vào "Thay đổi số lượng mặt hàng eBay" để thay đổi số
          lượng mặt hàng eBay.
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
        <MyInput
          fullWidth
          label="Số Lượng"
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
        Thay đổi số lượng mặt hàng Ebay
      </MyButton>
    </Box>
  );
};

export default FormUpdateQuantity;
