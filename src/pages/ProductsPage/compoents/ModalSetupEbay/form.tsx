import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MyTypography from "@/components/common/MyTypography";
import request from "@/services/Request";
import { Box, Grid, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const FormSetupEbay = () => {
  const [foundation, setFoundation] = useState("netsea");
  const [keyword, setKeyword] = useState("");
  const [alignment, setAlignment] = useState("left");

  const handleChange = (e) => {
    setFoundation(e.target.value);
  };

  const search = useCallback(async () => {}, []);

  return (
    <Box>
      <MyTypography className={styles.title}>
        Cài đặt chứng năng niêm yết Ebay
      </MyTypography>
      <Grid className={styles.row} container spacing={2}>
        <Stack spacing={2} className={styles.frame}>
          <MyInput
            fullWidth
            label="HTML 1"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            multiline
            rows={2.5}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInput
            fullWidth
            label="HTML 2"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            multiline
            rows={2.5}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInput
            fullWidth
            label="HTML 3"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            multiline
            rows={2.5}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInput
            fullWidth
            label="HTML 4"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            multiline
            rows={2.5}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MyInput
            fullWidth
            label="HTML 5"
            name="title"
            className={styles.status}
            size="small"
            value={keyword}
            multiline
            rows={2.5}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Stack>
        <Stack className={styles.frame} spacing={2}>
          <MyTypography>
            Tính năng bán hàng trên eBay Chính sách kinh doanh Thiết lập chính
            sách kinh doanh của riêng bạn (Vận chuyển, Trả hàng, Thanh toán) mà
            bạn đã đăng ký với eBay. Nếu bạn đã đăng nhập vào eBay, Bạn cũng có
            thể tải Chính sách kinh doanh của riêng mình bằng cách nhấn (*Bất kỳ
            Chính sách kinh doanh nào đã được đăng ký trong HARU sẽ bị ghi đè.)
            *Lưu ý: Không sử dụng tên chứa ``|'' khi đặt tên Chính sách kinh
            doanh trên trang eBay. Nếu bạn chưa thiết lập Chính sách kinh doanh,
            vui lòng tham khảo <a>``motoki-ebay-blog''</a> để thiết lập Chính
            sách kinh doanh trên trang eBay
          </MyTypography>
          <Stack spacing={1}>
            <MyInput
              fullWidth
              label="Tên Chính sách vận chuyển"
              name="title"
              value={""}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyTypography>
              *Vui lòng đặt tên chính sách vận chuyển đã đăng ký với eBay, phân
              cách bằng | (một nửa chiều rộng). (Ví dụ) EMS 500g|EMS
              1000g|ePacket 500g|ePacket-lite 500g
            </MyTypography>
          </Stack>
          <Stack spacing={1}>
            <MyInput
              fullWidth
              label="Tên Chính sách trả hàng"
              name="title"
              value={""}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyTypography>
              *Vui lòng đặt tên chính sách trả hàng đã đăng ký với eBay, phân
              cách bằng | (một nửa chiều rộng). (Ví dụ) Chấp nhận trả lại,Người
              mua,30 ngày,Hoàn tiền|Chấp nhận trả lại,Người bán,14 ngày,Hoàn
              tiền|Khác
            </MyTypography>
          </Stack>
          <Stack spacing={1}>
            <MyInput
              fullWidth
              label="Tên Chính sách thanh toán"
              name="title"
              value={""}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyTypography>
              *Vui lòng đặt tên chính sách trả hàng đã đăng ký với eBay, phân
              cách bằng | (một nửa chiều rộng). (Ví dụ) Chấp nhận trả lại,Người
              mua,30 ngày,Hoàn tiền|Chấp nhận trả lại,Người bán,14 ngày,Hoàn
              tiền|Khác
            </MyTypography>
          </Stack>
          <Stack spacing={1}>
            <MyInput
              fullWidth
              label="Vị trí"
              name="title"
              value={""}
              onChange={handleChange}
              className={styles.status}
              size="small"
            />
            <MyTypography>
              *Vui lòng đăng ký vị trí bạn đã đặt khi niêm yết trên eBay. (Điều
              này có thể thay đổi khi liệt kê.) (Ví dụ) Tokyo
            </MyTypography>
          </Stack>
        </Stack>
      </Grid>
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

export default FormSetupEbay;
