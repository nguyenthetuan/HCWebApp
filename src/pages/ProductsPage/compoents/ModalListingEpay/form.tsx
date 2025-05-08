import React from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Grid,
  Typography,
  Paper,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const FormEpay = () => {
  const [formData, setFormData] = React.useState({
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

  const handleSubmit = () => {
    console.log(formData);
    // Xử lý submit dữ liệu ở đây (gửi lên API hoặc lưu vào state)
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 800, margin: "auto" }}>
      <Typography variant="h5" mb={2}>
        Form Nhập Thông Tin Sản Phẩm
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Tiêu đề"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Mô tả sản phẩm"
            name="description"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Mã danh mục"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Tình trạng</InputLabel>
            <Select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
            >
              <MenuItem value="new">Mới</MenuItem>
              <MenuItem value="used">Đã qua sử dụng</MenuItem>
              <MenuItem value="refurbished">Tân trang</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Giá khởi điểm ($)"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Số lượng"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Chính sách trả hàng"
            name="returnPolicy"
            value={formData.returnPolicy}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Chính sách thanh toán"
            name="paymentPolicy"
            value={formData.paymentPolicy}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Vị trí"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Gửi thông tin sản phẩm
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FormEpay;
