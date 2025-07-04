import { Box, TextField } from "@mui/material";
import { useState } from "react";
import MyButton from "../MyButton";
import MyTypography from "../MyTypography";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

interface propsMySearchInput {
  value?: string;
}
const MySearchInput = (props: propsMySearchInput) => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const onChangeText = (e) => setValue(e.target.value);
  return (
    <Box className={styles.container} gap={1}>
      <TextField
        value={value}
        onChange={onChangeText}
        className={styles.TextFieldSearch}
      />
      <MyButton className={styles.buttonSearch}>
        <MyTypography fontSize={12} className={styles.txtSearch}>
          {t("btn_search")}
        </MyTypography>
      </MyButton>
    </Box>
  );
};

export default MySearchInput;
