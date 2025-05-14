import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyTypography from "@/components/common/MyTypography";
import request from "@/services/Request";
import { Box, Grid, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const FormCheapProduct = () => {
  const [keyword, setKeyword] = useState("");
  const search = useCallback(async () => {}, []);
  return (
    <Box>
      <MyTypography className={styles.title}>Thông tin sản phẩm</MyTypography>
      <Stack spacing={2}>
        <MyTypography>Tên sản phẩm: Phần mềm Fantasic</MyTypography>
        <MyTypography>Mã số sản phẩm: Phần mềm Fantasic</MyTypography>
        <MyInput
          fullWidth
          label="Thay đổi giá Ebay ($)"
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
        Thay đổi
      </MyButton>
    </Box>
  );
};

export default FormCheapProduct;
