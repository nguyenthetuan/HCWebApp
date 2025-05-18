import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  Box,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import MyTypography from "@/components/common/MyTypography";
import MyInput from "@/components/common/MyInput";
import {
  notificationEmail,
  duplicateUrl,
  monitor,
  TOOLTIP,
} from "../../../../untils/dataMockup";
import MyButton from "@/components/common/MyButton";
import request from "@/services/Request";
import MyRadioGroup from "@/components/common/MyRadioGroup";
import MyInputToolTip from "@/components/common/MyInputToolTip";
import MyLink from "@/components/common/MyLink";

const FormSetupUser = () => {
  const [foundation, setFoundation] = useState("netsea");
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState([]);
  const [alignment, setAlignment] = useState("configured");

  const handleChangeToggle = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
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
      <Stack spacing={3}>
        <Grid className={styles.row} container spacing={3}>
          <MyInput
            fullWidth
            label="Tên người dùng HARU"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInputToolTip
            fullWidth
            label="ID ứng dụng eBay"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbay}
          />
        </Grid>
        <Grid className={styles.row} container spacing={3}>
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
          <MyInputToolTip
            fullWidth
            label="ID nhà phát triển eBay"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label="Mã số chứng thực eBay"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
        </Grid>
        <Grid className={styles.row} container spacing={3}>
          <MyInputToolTip
            fullWidth
            label="ID đăng nhập Nessie"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label="Mật khẩu Nessie"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label="ID đăng nhập Super Delivery"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label="Mật khẩu giao hàng siêu tốc"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
        </Grid>
        <Grid className={styles.row} container spacing={3}>
          <MyInputToolTip
            fullWidth
            label="ID đăng nhập Ichiokunet"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label="Mật khẩu Ichiokunet"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label="ID đăng nhập Mirai Donya"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
          <MyInputToolTip
            fullWidth
            label="Mật khẩu Mirai Donya"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            toolTip={TOOLTIP.IdEbayDevelop}
          />
        </Grid>
        <Stack spacing={3}>
          <Grid container className={styles.row} spacing={3}>
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
                * Cài đặt này xác định có kiểm tra URL trùng lặp khi đăng
                ký/chỉnh sửa hay không.
              </MyTypography>
            </Grid>
          </Grid>
          <Grid container className={styles.row} spacing={3}>
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
                chạy " Mô-đun thường trú/Mô-đun giám sát máy khách " theo cách
                thủ công.
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
                *Thiết lập này xác định xem Yahoo! Các cuộc đấu giá được theo
                dõi trên máy chủ hoặc trên máy khách. Nếu bạn muốn giám sát một
                máy khách, vui lòng chạy " Mô-đun thường trú/Mô-đun giám sát máy
                khách " theo cách thủ công.
              </MyTypography>
            </Grid>
          </Grid>
        </Stack>
        <Grid className={styles.row} container spacing={3}>
          <Grid className={styles.frame} container>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleChangeToggle}
              aria-label="text alignment"
              className={styles.toggleBtn}
            >
              <ToggleButton value="notConfigured" aria-label="left aligned">
                Chưa thiết lập
              </ToggleButton>
              <ToggleButton value="configured" aria-label="center aligned">
                Đã cấu hình
              </ToggleButton>
            </ToggleButtonGroup>
            <MyTypography>
              　* Nếu Khóa ứng dụng ở trên (ID ứng dụng/nhà phát triển/chứng
              chỉ) đã được thiết lập trong cài đặt thông báo xóa/đóng tài khoản
              Marketplace trong <a>chương trình nhà phát triển eBay</a> của bạn
              , vui lòng chọn "Đã thiết lập". (Vui lòng kiểm tra điều này ngay
              cả khi bạn đã thiết lập bằng phiên bản MWS, máy chủ bổ sung hoặc
              các công cụ khác.)
            </MyTypography>
            {alignment !== "configured" && (
              <Stack spacing={2}>
                <MyTypography>
                  *Nếu bạn chưa thực hiện, hãy truy cập{" "}
                  <a>chương trình dành cho nhà phát triển eBay</a> và nhập điểm
                  cuối thông báo xóa/đóng tài khoản Marketplace và mã thông báo
                  xác minh để thiết lập. (Để biết hướng dẫn thiết lập, hãy xem{" "}
                  <a>tại đây</a>
                </MyTypography>
                <MyInputToolTip
                  fullWidth
                  label=" Điểm cuối thông báo xóa/đóng tài khoản Marketplace"
                  name="title"
                  className={styles.status}
                  size="small"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  toolTip={TOOLTIP.IdEbayDevelop}
                  disabled
                />
                <MyInputToolTip
                  fullWidth
                  label=" Điểm cuối thông báo xóa/đóng tài khoản Marketplace"
                  name="title"
                  className={styles.status}
                  size="small"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  toolTip={TOOLTIP.IdEbayDevelop}
                  disabled
                />
                <MyTypography>
                  *Hai cài đặt này chỉ có hiệu lực nếu bạn có hợp đồng sử dụng
                  chức năng liên kết tự động của eBay/chức năng niêm yết trên
                  eBay. 　Nếu bạn hủy tính năng này, tính năng đó sẽ bị vô hiệu
                  hóa và tài khoản nhà phát triển eBay của bạn (eBay API) 　sẽ
                  không sử dụng được trong vòng khoảng một tháng trừ khi bạn
                  nhập cài đặt khác. Xin hãy cẩn thận
                </MyTypography>
              </Stack>
            )}
          </Grid>
          <Grid className={styles.frame} container>
            <MyRadioGroup
              name={"type_file"}
              label={"Làm thế nào để theo dõi Yahoo! Mua sắm"}
              options={monitor}
              value={"ratio"}
              onChange={() => {}}
              rowWrapperClassName={styles.rowWrapperClassName}
            />
            <MyTypography>
              *Thiết lập này xác định xem Yahoo! Hoạt động mua sắm được theo dõi
              bởi máy chủ hoặc máy khách. Nếu bạn muốn giám sát một máy khách,
              vui lòng chạy " Mô-đun thường trú/Mô-đun giám sát máy khách " theo
              cách thủ công.
            </MyTypography>
          </Grid>
        </Grid>
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
