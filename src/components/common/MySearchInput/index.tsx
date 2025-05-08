import { Box, TextField } from "@mui/material";
import { useState } from "react";
import MyButton from "../MyButton";
import MyTypography from "../MyTypography";
import styles from "./styles.module.scss";

interface propsMySearchInput {
  value?: string;
}
const MySearchInput = (props: propsMySearchInput) => {
  const [value, setValue] = useState("");
  const onChangeText = (e) => setValue(e.target.value);
  return (
    <Box className={styles.container}>
      <TextField
        value={value}
        onChange={onChangeText}
        className={styles.TextFieldSearch}
      />
      <MyButton className={styles.buttonSearch}>
        <MyTypography fontSize={11} className={styles.txtSearch}>
          Tìm kiếm
        </MyTypography>
      </MyButton>
    </Box>
  );
};

export default MySearchInput;
