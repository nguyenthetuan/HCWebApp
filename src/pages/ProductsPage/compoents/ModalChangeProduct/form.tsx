import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyRadioGroup from "@/components/common/MyRadioGroup";
import MyTypography from "@/components/common/MyTypography";
import { Box, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { optionOnOff, mode, TOOLTIP } from "../../../../untils/dataMockup";
import MyInputToolTip from "@/components/common/MyInputToolTip";
const FormChangeProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    condition: "",
    price: "",
    quantity: 1,
    returnPolicy: "",
    paymentPolicy: "",
    location: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  return (
    <Box>
      <Box className={styles.header}>
        <MyTypography variant="h5" mb={2}>
          [Số 1] Đăng ký/Thay đổi
        </MyTypography>
      </Box>
      <Stack spacing={2}>
        <Stack spacing={2} className={styles.frame}>
          <Grid className={styles.row} container spacing={2}>
            <MyInput
              fullWidth
              label="Tên cửa hàng"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyInput
              fullWidth
              label="Tên sản phẩm"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
          </Grid>
          <Grid container spacing={2}>
            <MyInput
              fullWidth
              label="Url mua hàng"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyInput
              fullWidth
              label="Địa chỉ Ebay"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
          </Grid>
        </Stack>
        <Stack spacing={2} className={styles.frame}>
          <MyInput
            fullWidth
            label="Số mặt hàng eBay"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.status}
            size="small"
          />
          <MyRadioGroup
            label="Chức năng liên kết tự động của eBay"
            name="gender"
            value={"on"}
            onChange={() => {}}
            options={optionOnOff}
          />
          <MyTypography>{TOOLTIP.EBAY}</MyTypography>
        </Stack>
        <Stack spacing={2} className={styles.frame}>
          <Grid className={styles.row} container spacing={2}>
            <MyInputToolTip
              fullWidth
              label="Giá mua (yên)"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className={styles.status}
              toolTip={TOOLTIP.PRICE}
              size="small"
            />
            <MyInputToolTip
              fullWidth
              label="Mua chi phí vận chuyển (yên)"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className={styles.status}
              toolTip={TOOLTIP.FEE_BUY_TRANSPORT}
              size="small"
            />
          </Grid>
        </Stack>
        <Stack className={styles.frame}>
          <MyTypography>Từ khóa chứng khoán</MyTypography>
          <MyInputToolTip
            fullWidth
            label="Mua chi phí vận chuyển (yên)"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={styles.status}
            toolTip={TOOLTIP.KEY_STOCK}
            size="small"
          />
          <MyRadioGroup
            label=""
            name="gender"
            value={"on"}
            onChange={() => {}}
            options={mode}
          />
          <MyTypography>{TOOLTIP.MODE}</MyTypography>
        </Stack>
        <Stack className={styles.frame}>
          <MyTypography>Kiểm tra logic</MyTypography>
          <MyRadioGroup
            label=""
            name="gender"
            value={"on"}
            onChange={() => {}}
            options={mode}
          />
          <MyTypography>{TOOLTIP.LOGIC}</MyTypography>
        </Stack>
        <Stack className={styles.frame}>
          <Grid className={styles.row} container spacing={2}>
            <MyInputToolTip
              fullWidth
              label="Phí vận chuyển eBay(yên)"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={styles.status}
              toolTip={TOOLTIP.FEE_BUY_TRANSPORT}
              size="small"
            />
            <MyInputToolTip
              fullWidth
              label="Lợi nhuận dự kiến ​​(yên)"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={styles.status}
              toolTip={TOOLTIP.FEE_BUY_TRANSPORT}
              size="small"
            />
            <MyInputToolTip
              fullWidth
              label="Hệ số phí eBay & Các loại phí khác"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={styles.status}
              toolTip={TOOLTIP.RATIO}
              size="small"
            />
          </Grid>
          <MyInput
            label="Ghi chú"
            name="description"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className={styles.status}
          />
        </Stack>
        <Grid container spacing={2}>
          <MyButton variant="contained" color="primary" onClick={handleSubmit}>
            Đăng ký/Đặt lại cảnh báo
          </MyButton>
        </Grid>
      </Stack>
    </Box>
  );
};

export default FormChangeProduct;
