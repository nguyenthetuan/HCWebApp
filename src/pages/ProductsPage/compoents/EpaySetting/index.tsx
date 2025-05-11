import MyTypography from "@/components/common/MyTypography";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./styles.module.scss";
import MyButton from "@/components/common/MyButton";

export default function EBaySetting() {
  const [exchangeRate, setExchangeRate] = useState(149);
  const [feeMultiplier, setFeeMultiplier] = useState(0.87);

  const handleRegister = (type: "rate" | "fee") => {
    alert(
      type === "rate"
        ? `Tỷ giá đã đăng ký: ${exchangeRate}`
        : `Hệ số phí đã đăng ký: ${feeMultiplier}`
    );
  };

  return (
    <Box className={styles.container}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* Bên trái */}
        <Stack item xs={12} md={7} spacing={2}>
          <MyTypography fontSize={14} className={styles.textEpay}>
            Để tính giá eBay
          </MyTypography>
          <Stack
            direction="row"
            alignItems="center"
            mb={2}
            flexWrap="wrap"
            className={styles.rate}
          >
            <MyTypography fontSize={14} className={styles.textEpay}>
              • Tỷ giá hối đoái (yên):
            </MyTypography>
            <Stack
              direction="row"
              alignItems="center"
              flexWrap="wrap"
              className={styles.rate}
            >
              <TextField
                type="number"
                size="small"
                value={exchangeRate}
                onChange={(e) => setExchangeRate(+e.target.value)}
                className={styles.myTextField}
              />
              <MyButton
                variant="contained"
                className={styles.btnRegistry}
                sx={style.registry}
              >
                Đăng ký/Thay đổi
              </MyButton>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            className={styles.rate}
          >
            <MyTypography fontSize={14}>Hệ số hoa hồng</MyTypography>
            <TextField
              size="small"
              type="number"
              value={feeMultiplier}
              onChange={(e) => setFeeMultiplier(+e.target.value)}
              className={styles.myTextField}
            />
            <Button
              variant="contained"
              sx={style.registry}
              className={styles.btnRegistry}
              onClick={() => handleRegister("fee")}
            >
              Đăng ký/Thay đổi
            </Button>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            className={styles.rate}
          >
            <MyTypography fontSize={14}>Tỉ lệ lợi nhuận mong muốn</MyTypography>
            <TextField
              size="small"
              type="number"
              value={feeMultiplier}
              onChange={(e) => setFeeMultiplier(+e.target.value)}
              className={styles.myTextField}
            />
            <Button
              variant="contained"
              sx={style.registry}
              className={styles.btnRegistry}
              onClick={() => handleRegister("fee")}
            >
              Đăng ký/Thay đổi
            </Button>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            className={styles.rate}
          >
            <MyTypography fontSize={14}>Mã bưu chính</MyTypography>
            <TextField
              size="small"
              type="number"
              value={feeMultiplier}
              onChange={(e) => setFeeMultiplier(+e.target.value)}
              className={styles.myTextField}
            />
            <Button
              variant="contained"
              sx={style.registry}
              className={styles.btnRegistry}
              onClick={() => handleRegister("fee")}
            >
              Đăng ký/Thay đổi
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Box>
  );
}

const style = {
  registry: {
    fontSize: "10px",
    fontWeight: "bold",
    color: "white",
    padding: "4px 8px",
    backgroundColor: "#1976d2",
    "&:hover": {
      backgroundColor: "#115293",
    },
  },
};
