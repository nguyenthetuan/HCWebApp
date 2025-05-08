import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  styled,
} from "@mui/material";
import styles from "./styles.module.scss";

const MySelectDropdow = ({
  id,
  name,
  label,
  value,
  onChange,
  options = [],
  error = false,
  helperText = "",
  fullWidth = true,
  ...rest
}) => {
  return (
    <FormControl
      fullWidth={fullWidth}
      error={error}
      className={styles.wrapSelect}
    >
      <CustomInputLabel id={`${id}-label`} className={styles.label}>
        {label}
      </CustomInputLabel>
      <SelectCustom
        labelId={`${id}-label`}
        id={id}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        {...rest}
      >
        {options.map((option) => (
          <MenuItemCustom
            key={option.value}
            value={option.value}
            className={styles.label}
          >
            {option.label}
          </MenuItemCustom>
        ))}
      </SelectCustom>
      {helperText && error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
const CustomInputLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.primary.main,
}));
const MenuItemCustom = styled(MenuItem)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.primary.main,
}));
const SelectCustom = styled(Select)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.primary.main,
}));
export default MySelectDropdow;
