import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyLink from "@/components/common/MyLink";
import MyTypography from "@/components/common/MyTypography";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import ImageUploader from "@/components/common/ImageUpload";
import MyRadioGroup from "@/components/common/MyRadioGroup";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import MyInputToolTip from "@/components/common/MyInputToolTip";
import MyButtonTooltip from "@/components/common/MyButtonTooltip";
import MySelectDropdowTooltip from "@/components/common/MySelectDropdowTooltip";
import {
  TOOLTIP,
  optionStatus,
  optionEcommerce,
  optionHtml,
  endDow,
} from "@/untils/dataMockup";
const FormEpay = () => {
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
  const [status, setStatus] = useState("new");
  const [statusEbay, setStatusEbay] = useState("1");
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  const [statusHtml, setStatusHtml] = useState("0");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
    // Xử lý submit dữ liệu ở đây (gửi lên API hoặc lưu vào state)
  };

  const [inputs, setInputs] = useState(["", "", "", "", ""]);

  const handleAdd = () => {
    setInputs([...inputs, ""]);
  };

  const handleChangeInput = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  return (
    <Box>
      <Box className={styles.header}>
        <MyTypography variant="h5" mb={2}>
          Nhập dữ liệu niêm yết eBay ( Vui lòng tham khảo Hướng dẫn sử dụng để
          biết các trang web mới nhất hỗ trợ [Lấy thông tin trang web] ). 　
          <MyLink>
            URL nhà cung cấp: https://www.suruga-ya.jp/product/detail/174000517
          </MyLink>
        </MyTypography>
        <Grid container spacing={2}>
          <MyButton variant="contained" color="primary" className={styles.btn}>
            Lấy thông tin trang website
          </MyButton>
          <MyButton variant="contained" color="primary" className={styles.btn}>
            Sao chép thông tin vào bảng tạm
          </MyButton>
          <MyButton variant="contained" color="primary" className={styles.btn}>
            gọi mẫu niêm yết
          </MyButton>
        </Grid>
      </Box>
      <MyRadioGroup
        label=""
        name="gender"
        value={statusEbay}
        onChange={setStatusEbay}
        options={optionEcommerce}
      />
      <Stack spacing={2}>
        <Stack className={styles.frame} spacing={2}>
          <Grid className={styles.row} container spacing={2}>
            <MyInput
              fullWidth
              label="Tiêu đề(Tiếng nhật)"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <KeyboardDoubleArrowRightIcon />
            <MyButton
              color="primary"
              variant="contained"
              className={styles.btn}
            >
              Tiêu đề bản dịch
            </MyButton>
            <KeyboardDoubleArrowRightIcon />
            <MyInput
              fullWidth
              label="Tiêu đề"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
          </Grid>
          <ImageUploader />
          <Grid className={styles.row} container spacing={2}>
            <TextField
              fullWidth
              label="Mô tả sản phẩm"
              name="description"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <KeyboardDoubleArrowRightIcon />
            <MyButton
              color="primary"
              variant="contained"
              className={styles.btn}
            >
              Bản dịch mô tả sản phẩm
            </MyButton>
            <KeyboardDoubleArrowRightIcon />
            <TextField
              fullWidth
              label="Mô tả sản phẩm"
              name="description"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
          </Grid>
          <Grid container spacing={2}>
            <MyRadioGroup
              label={""}
              name="html"
              value={statusHtml}
              onChange={setStatusHtml}
              options={optionHtml}
            />
            <MyButton
              variant="contained"
              color="primary"
              className={styles.btn}
            >
              Xem trước màn hình
            </MyButton>
            <MyButtonTooltip
              variant="contained"
              color="primary"
              className={styles.btn}
              toolTip="Vui lòng thiết lập mẫu HTML sẽ sử dụng cho Mô tả eBay trước trong"
            >
              Cài đặt chức năng niêm yết Ebay
            </MyButtonTooltip>
          </Grid>
          <Grid className={styles.row} container spacing={2}>
            <MyInputToolTip
              fullWidth
              label="Nhãn tùy chỉnh (SKU)"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className={styles.status}
              toolTip={TOOLTIP.SKU}
              size="small"
            />
            <MyInputToolTip
              fullWidth
              label="Mã danh mục"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              className={styles.status}
              size="small"
              toolTip={<MyTypography>{TOOLTIP.CATEGORY_ID}</MyTypography>}
            />
            <MyInputToolTip
              fullWidth
              label="StoreCategoryID"
              name="returnPolicy"
              size="small"
              value={formData.returnPolicy}
              onChange={handleChange}
              className={styles.status}
              toolTip={<MyTypography>{TOOLTIP.STORE_CATEGORY_ID}</MyTypography>}
            />
            <MySelectDropdowTooltip
              id="status"
              name="status"
              label="Trạng thái"
              value={"1"}
              onChange={handleChange}
              options={optionStatus}
              helperText="Vui lòng chọn ngôn ngữ"
              className={styles.dropdow}
              size="small"
              toolTip={<MyTypography>{TOOLTIP.STATUS}</MyTypography>}
            />
          </Grid>
          <MyInputToolTip
            fullWidth
            label="Mô tả tình trạng"
            name="condition"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className={styles.status}
            toolTip={TOOLTIP.CONDITION}
          />
          <Grid className={styles.row} container spacing={2}>
            <MyInput
              fullWidth
              label="Mã bưu chính"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyInput
              fullWidth
              label="Mã số MPN"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyInput
              fullWidth
              label="Thương hiệu"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
          </Grid>
          <Grid className={styles.row} container spacing={2}>
            <MyInput
              fullWidth
              label=""
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyButtonTooltip
              variant="contained"
              color="primary"
              className={styles.btn}
              toolTip={TOOLTIP.SPECIFICS}
            >
              Nhận thông tin ItemSpecifics
            </MyButtonTooltip>
          </Grid>
        </Stack>

        <Box className={styles.frame}>
          <MyTypography marginBottom={1}>Chi tiết sản phẩm</MyTypography>
          <Grid className={styles.row} container spacing={42}>
            <Stack className={styles.Box} spacing={2}>
              {inputs.map((value, index) => (
                <MyInput
                  key={index}
                  label={`ItemSpecifics ${index + 1}`}
                  value={value}
                  onChange={(e) => handleChangeInput(index, e)}
                  size="small"
                />
              ))}
              <Button
                variant="contained"
                onClick={handleAdd}
                className={styles.btnAdd}
              >
                Add
              </Button>
            </Stack>
            <Stack className={styles.Box} spacing={2}>
              <MyInput
                label="Yêu cầu"
                name="description"
                multiline
                rows={2}
                value={formData.description}
                onChange={handleChange}
                className={styles.status}
              />
              <MyInput
                label="Giới thiệu"
                name="description"
                multiline
                rows={2}
                value={formData.description}
                onChange={handleChange}
                className={styles.status}
              />
              <MyInput
                label="Lựa chọn"
                name="description"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className={styles.status}
              />
              <MyTypography>{TOOLTIP.DETAIL_PRODUCT}</MyTypography>
            </Stack>
          </Grid>
        </Box>
        <Grid className={styles.frameRow}>
          <Stack className={styles.frame} spacing={2}>
            <MyTypography marginBottom={1}>Ưu đãi tốt nhất</MyTypography>
            <MyRadioGroup
              label=""
              name="gender"
              value={statusEbay}
              onChange={setStatusEbay}
              options={endDow}
            />
            <MyInput
              fullWidth
              label="Tự động chấp nhận các ưu đãi ít nhất là"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyInput
              fullWidth
              label="Tự động từ chối các ưu đãi thấp hơn"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
          </Stack>
          <Stack className={styles.frame} spacing={2}>
            <MyTypography marginBottom={1}>Danh sách riêng tư</MyTypography>
            <MyRadioGroup
              label=""
              name="gender"
              value={statusEbay}
              onChange={setStatusEbay}
              options={endDow}
            />
          </Stack>
        </Grid>
        <Grid className={styles.frameRow}>
          <MyInputToolTip
            fullWidth
            label="Số lượng"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.status}
            size="small"
          />
          <MySelectDropdowTooltip
            id="status"
            name="status"
            label="Chính sách vận chuyển"
            value={"1"}
            onChange={handleChange}
            options={optionStatus}
            helperText="Vui lòng chọn ngôn ngữ"
            className={styles.dropdow}
            size="small"
            toolTip={<MyTypography>{TOOLTIP.STATUS}</MyTypography>}
          />
          <MySelectDropdowTooltip
            id="status"
            name="status"
            label="Chính sách trả hàng"
            value={"1"}
            onChange={handleChange}
            options={optionStatus}
            helperText="Vui lòng chọn ngôn ngữ"
            className={styles.dropdow}
            size="small"
            toolTip={<MyTypography>{TOOLTIP.STATUS}</MyTypography>}
          />
          <MySelectDropdowTooltip
            id="status"
            name="status"
            label="Chính thanh toán"
            value={"1"}
            onChange={handleChange}
            options={optionStatus}
            helperText="Vui lòng chọn ngôn ngữ"
            className={styles.dropdow}
            size="small"
            toolTip={<MyTypography>{TOOLTIP.STATUS}</MyTypography>}
          />
          <MyInputToolTip
            fullWidth
            label="Vị trí"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.status}
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Gửi thông tin sản phẩm
          </Button>
        </Grid>
      </Stack>
    </Box>
  );
};

export default FormEpay;
