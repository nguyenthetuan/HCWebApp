import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  styled,
  SelectProps,
} from "@mui/material";
import styles from "./styles.module.scss";
import MyTypography from "../MyTypography";
import Tooltip from "@mui/material/Tooltip";

interface propsDropdowTooltip {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  onChange?: (value) => void;
  options: any[];
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  toolTip?: any;
  className?: any;
  size?: "small" | "medium";
}
const MySelectDropdowTooltip = ({
  id,
  name,
  label,
  value,
  onChange,
  options = [],
  error = false,
  helperText = "",
  fullWidth = true,
  toolTip = "",
  size,
  ...rest
}: propsDropdowTooltip) => {
  return (
    <Tooltip title={toolTip} placement="top" arrow>
      <FormControl
        fullWidth={fullWidth}
        error={error}
        className={styles.wrapSelect}
      >
        <CustomInputLabel id={`${id}-label`} className={styles.label}>
          <MyTypography>{label}</MyTypography>
        </CustomInputLabel>
        <SelectCustom
          size={size}
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
    </Tooltip>
  );
};
const CustomInputLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.primary.main,
}));
const MenuItemCustom = styled(MenuItem)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.primary.main,
}));

const SelectCustom = styled(Select)<SelectProps<unknown>>(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.primary.main,
}));
export default MySelectDropdowTooltip;
