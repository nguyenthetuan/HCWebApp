import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Box, Grid, Stack } from "@mui/material";
import MyTypography from "@/components/common/MyTypography";
import MyInput from "@/components/common/MyInput";
import MySelectDropdow from "@/components/common/MySelectDropdow";
import {
  commercialPlatform,
  categoryProductSurugara,
  categoryProductNetsea,
} from "../../../../untils/dataMockup";
import MyButton from "@/components/common/MyButton";
import request from "@/services/Request";
import TableSearch from "./TableSearch";

const FormSearchProduct = () => {
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
      <MyTypography className={styles.textHeader}>
        Tìm kiếm sản phẩm
      </MyTypography>
      <Stack spacing={2}>
        <Grid className={styles.row} container spacing={2}>
          <MySelectDropdow
            id="foundation-select"
            name="foundation"
            label="Chọn nền tảng"
            value={foundation}
            onChange={handleChange}
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
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MySelectDropdow
            id="category-select"
            name="category"
            label="Danh mục"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={
              foundation === "netsea"
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
            onClick={search}
          >
            Tìm kiếm
          </MyButton>
        </Grid>
        <TableSearch products={product} />
      </Stack>
    </Box>
  );
};

export default FormSearchProduct;
