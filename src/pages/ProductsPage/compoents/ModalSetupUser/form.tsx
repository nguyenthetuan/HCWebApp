import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Box, Grid, Stack } from "@mui/material";
import MyTypography from "@/components/common/MyTypography";
import MyInput from "@/components/common/MyInput";
import MySelectDropdow from "@/components/common/MySelectDropdow";
import { notificationEmail, duplicateUrl } from "../../../../untils/dataMockup";
import MyButton from "@/components/common/MyButton";
import request from "@/services/Request";
import MyRadioGroup from "@/components/common/MyRadioGroup";

const FormSetupUser = () => {
  const [foundation, setFoundation] = useState("netsea");
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState([]);

  const handleChange = (e) => {
    setFoundation(e.target.value);
  };

  const getProductLocal = async () => {
    setProduct(JSON.parse(localStorage.getItem("PRODUCT_SEARCH")));
  };
  useEffect(() => {
    getProductLocal();
  }, []);

  const search = useCallback(async () => {
    const response = await request.post("/product/search", {
      platform_type: foundation,
      keyword: keyword,
      category: category,
    });
    if (response) {
      setProduct(response);

      localStorage.setItem("PRODUCT_SEARCH", JSON.stringify(response));
    }
  }, [foundation, keyword, category]);

  return (
    <Box>
      <MyTypography className={styles.title}>
        Cài đặt tài khoản người dùng
      </MyTypography>
      <Stack spacing={2}>
        <Grid className={styles.row} container spacing={2}>
          <MyInput
            fullWidth
            label="Tên người dùng HARU"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInput
            fullWidth
            label="ID đăng nhập HARU"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInput
            fullWidth
            label="Mật khẩu HARU"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Grid>
        <Stack container spacing={2}>
          <Grid className={styles.frame}>
            <MyRadioGroup
              name={"type_file"}
              label={"Cài đặt thông báo qua email"}
              options={notificationEmail}
              value={"ratio"}
              onChange={() => {}}
              rowWrapperClassName={styles.rowWrapperClassName}
            />
            <MyTypography>
              * Cài đặt này xác định liệu có thông báo cho tất cả kết quả kiểm
              tra tự động hay chỉ những kết quả đã thay đổi.
            </MyTypography>
          </Grid>
          <Grid className={styles.frame}>
            <MyRadioGroup
              name={"type_file"}
              label={"Kiểm tra trùng lặp URL"}
              options={duplicateUrl}
              value={"ratio"}
              onChange={() => {}}
              rowWrapperClassName={styles.rowWrapperClassName}
            />
            <MyTypography>
              * Cài đặt này xác định có kiểm tra URL trùng lặp khi đăng ký/chỉnh
              sửa hay không.
            </MyTypography>
          </Grid>
          <Grid className={styles.frame}>
            <MyRadioGroup
              name={"type_file"}
              label={"Cách theo dõi Rakuten Ichiba"}
              options={notificationEmail}
              value={"ratio"}
              onChange={() => {}}
              rowWrapperClassName={styles.rowWrapperClassName}
            />
            <MyTypography>
              *Cài đặt này xác định liệu Rakuten Market được giám sát bởi máy
              chủ hay máy khách. Nếu bạn muốn giám sát một máy khách, vui lòng
              chạy " Mô-đun thường trú/Mô-đun giám sát máy khách " theo cách thủ
              công.
            </MyTypography>
          </Grid>
          <Grid className={styles.frame}>
            <MyRadioGroup
              name={"type_file"}
              label={"Làm thế nào để theo dõi Yahoo! Đấu giá"}
              options={duplicateUrl}
              value={"ratio"}
              onChange={() => {}}
              rowWrapperClassName={styles.rowWrapperClassName}
            />
            <MyTypography>
              *Thiết lập này xác định xem Yahoo! Các cuộc đấu giá được theo dõi
              trên máy chủ hoặc trên máy khách. Nếu bạn muốn giám sát một máy
              khách, vui lòng chạy " Mô-đun thường trú/Mô-đun giám sát máy khách
              " theo cách thủ công.
            </MyTypography>
          </Grid>
          <Grid className={styles.frame}>
            <MyRadioGroup
              name={"type_file"}
              label={"Làm thế nào để theo dõi Yahoo! Mua sắm"}
              options={duplicateUrl}
              value={"ratio"}
              onChange={() => {}}
              rowWrapperClassName={styles.rowWrapperClassName}
            />
            <MyTypography>
              Giám sát khách hàng *Thiết lập này xác định xem Yahoo! Hoạt động
              mua sắm được theo dõi bởi máy chủ hoặc máy khách. Nếu bạn muốn
              giám sát một máy khách, vui lòng chạy " Mô-đun thường trú/Mô-đun
              giám sát máy khách " theo cách thủ công.
            </MyTypography>
          </Grid>
        </Stack>
      </Stack>
      <MyButton
        variant="contained"
        color="info"
        size="small"
        className={styles.buttons}
        onClick={search}
      >
        Đăng ký/Thay đổi
      </MyButton>
    </Box>
  );
};

export default FormSetupUser;
