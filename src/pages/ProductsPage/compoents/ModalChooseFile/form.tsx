import MyTypography from "@/components/common/MyTypography";
import { Box, Grid } from "@mui/material";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";
import MyButton from "@/components/common/MyButton";
import MyRadioGroup from "@/components/common/MyRadioGroup";
import { typeFile, autoLink, typeUpload } from "../../../../untils/dataMockup";

const FormChooseFile = () => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    // Handle the file here (e.g., upload it)
  };
  return (
    <Box>
      <MyTypography className={styles.title}>Lựa chọn tập tin</MyTypography>
      <Box className={styles.header}>
        <MyTypography variant="h5" className={styles.text}>
          Trước khi tải lên, vui lòng sao lưu bằng "Tải xuống CVS" (phân cách
          bằng dấu phẩy hoặc phân cách bằng TAB) để phòng ngừa.
          <br />
          Vui lòng sử dụng định dạng lấy từ "Tải xuống CVS"
        </MyTypography>
        <MyTypography variant="h5" className={styles.text}>
          Trước khi tải lên, hãy mở tệp CSV trong Notepad và đảm bảo rằng tệp có
          <br />
          định dạng sau:
          <br />
          &nbsp;&nbsp;- Ký tự bao quanh cột: dấu ngoặc kép " " (bắt buộc
          <br />
          &nbsp;&nbsp; đối với các mục có chứa dấu phẩy trong dữ liệu)
          <br />
          &nbsp;&nbsp;- Phân cách cột: "," dấu phẩy
        </MyTypography>
        <MyTypography>
          "Ví dụ về định dạng đúng cho tệp CSV (phân tách bằng dấu phẩy)"
          Rakuten Ichiba, SONY Walkman 32GB, URL, URL, "15.700", 1, 0, Số lượng,
          1, ... Waiwai Honpo, Mô hình giới hạn One Piece, URL, URL, "9,550", 1,
          0, Thêm vào giỏ hàng, 1, ... *Chúng tôi khuyên bạn nên sử dụng Google
          Spreadsheets hoặc Open Office để chỉnh sửa và lưu tệp CSV. (Không nên
          chỉnh sửa tệp CSV trong Excel vì nó thường dẫn đến hỏng dữ liệu.)
        </MyTypography>
        <MyTypography>
          * Vui lòng tải lên với tiêu đề dòng đầu tiên được bao gồm (dòng đầu
          tiên sẽ bị xóa)
        </MyTypography>
        <MyTypography>
          * Bạn có thể tải lên tối đa 1500 mục cùng một lúc (các mục từ 1501 trở
          lên sẽ bị xóa)
        </MyTypography>
        <MyTypography>
          * Sau khi tải lên, tất cả các mục sẽ được kiểm tra theo thời gian kiểm
          tra tự động cứ sau 6 giờ.
        </MyTypography>

        <MyRadioGroup
          name={"type_file"}
          label={"Kiểu File"}
          options={typeFile}
          value={"ratio"}
          onChange={() => {}}
          rowWrapperClassName={styles.rowWrapperClassName}
        />
        <MyRadioGroup
          name={"type_file"}
          label={"Các mục chức năng liên kết tự động của eBay"}
          options={autoLink}
          value={"ratio"}
          onChange={() => {}}
          rowWrapperClassName={styles.rowWrapperClassName}
        />
        <MyRadioGroup
          name={"type_file"}
          label={"・Cách tải lên:"}
          options={typeUpload}
          value={"ratio"}
          onChange={() => {}}
          rowWrapperClassName={styles.rowWrapperClassName}
        />
        <Grid className={styles.row} container spacing={2}>
          <MyButton
            variant="contained"
            onClick={() => fileInputRef.current.click()}
          >
            Chọn tệp
          </MyButton>
          <input
            type="file"
            accept=".csv"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default FormChooseFile;
