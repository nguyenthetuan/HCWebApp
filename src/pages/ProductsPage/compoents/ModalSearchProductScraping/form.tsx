import MyButton from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import MySelectDropdow from "@/components/common/MySelectDropdow";
import MyTypography from "@/components/common/MyTypography";
import { Box, Grid, Stack } from "@mui/material";
import {
  categoryProductNetsea,
  categoryProductSurugara,
  commercialPlatform,
} from "../../../../untils/dataMockup";
import styles from "./styles.module.scss";
import TableSearch from "./TableSearch";

const FormSearchProductScraping = (props) => {
  return (
    <Box>
      <MyTypography className={styles.textHeader}>
        Các sản phẩm đã cào
      </MyTypography>
      <Stack spacing={2} className={styles.stack}>
        {/* <Grid className={styles.row} container spacing={2}>
          <MySelectDropdow
            id="foundation-select"
            name="foundation"
            label="Chọn nền tảng"
            value={props?.foundation}
            onChange={props?.handleChange}
            options={commercialPlatform}
            helperText="Vui lòng chọn ngôn ngữ"
            className={styles.dropdow}
          />
          <MyInput
            fullWidth
            label="Key Word"
            name="title"
            className={styles.status}
            size="small"
            value={props?.keyword}
            onChange={(e) => props?.setKeyword(e.target.value)}
          />
          <MySelectDropdow
            id="category-select"
            name="category"
            label="Danh mục"
            value={props?.category}
            onChange={(e) => props?.setCategory(e.target.value)}
            options={
              props?.foundation === "netsea"
                ? categoryProductNetsea
                : categoryProductSurugara
            }
            helperText="Vui lòng chọn ngôn ngữ"
            className={styles.dropdow}
          />
          <MyButton
            variant="contained"
            color="info"
            size="small"
            className={styles.buttons}
            onClick={props?.search}
            loading={props?.loadingSearch}
          >
            Tìm kiếm
          </MyButton>
        </Grid> */}
        <MyButton
          variant="contained"
          sx={{ backgroundColor: "orange" }}
          size="small"
          className={styles.btnSave}
          onClick={props?.addProductToManager}
          loading={props?.loadingAddProduct}
        >
          Lưu sang bảng quản lý sản phẩm
        </MyButton>
        <TableSearch
          products={props?.productAll}
          handleCheckboxChange={props?.handleCheckboxChange}
          selectedIds={props?.selectedIds}
          handleSelectAll={props?.handleSelectAll}
        />
      </Stack>
    </Box>
  );
};

export default FormSearchProductScraping;
