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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Bên trái */}
        <Grid item xs={12} md={7}>
          <MyTypography fontSize={14} className={styles.textEpay}>
            Để tính giá eBay
          </MyTypography>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            mb={2}
            flexWrap="wrap"
          >
            <MyTypography fontSize={14} className={styles.textEpay}>
              • Tỷ giá hối đoái (yên):
            </MyTypography>
            <TextField
              type="number"
              size="small"
              value={exchangeRate}
              onChange={(e) => setExchangeRate(+e.target.value)}
              className={styles.myTextField}
            />
            <MyButton variant="contained" sx={style.registry}>
              <MyTypography>Đăng ký/Thay đổi</MyTypography>
            </MyButton>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            flexWrap="wrap"
          >
            <MyTypography fontSize={14}>
              • Hệ số phí eBay và các loại phí khác (0,01 đến 1,0):
            </MyTypography>
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
              className={styles.myButton}
              onClick={() => handleRegister("fee")}
            >
              Đăng ký/Thay đổi
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

const style = {
  registry: {
    fontSize: "11px",
    fontWeight: "bold",
    color: "white",
    padding: "4px 8px",
    backgroundColor: "#1976d2",
    "&:hover": {
      backgroundColor: "#115293",
    },
  },
};
