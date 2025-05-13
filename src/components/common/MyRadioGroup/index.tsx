import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import styles from "./styles.module.scss";
import MyTypography from "../MyTypography";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
const StyledRadio = styled(Radio)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    fontSize: "20px", // Kích thước mặc định cho màn hình nhỏ
    // [theme.breakpoints.up(1280)]: {
    //   fontSize: "20px", // Khi màn hình >= 1280px
    // },
  },
}));

interface props {
  label?: string;
  name?: string;
  options?: any;
  value?: string;
  onChange?: (value: string) => void;
  rowWrapperClassName?: any;
}
export default function MyRadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  rowWrapperClassName,
}: props) {
  return (
    <FormControl component="fieldset" className={styles.FormControl}>
      <Box className={clsx(styles.rowWrapper, rowWrapperClassName)}>
        {label && (
          <FormLabel
            sx={{
              fontSize: "14px",
              color: "#333",
              fontWeight: "430",
              marginRight: "16px",
            }}
          >
            <MyTypography>{label}</MyTypography>
          </FormLabel>
        )}
        <RadioGroup
          row
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.RadioGroup}
        >
          {options.map((opt) => (
            <FormControlLabel
              key={opt.value}
              value={opt.value}
              control={<StyledRadio />}
              label={<MyTypography>{opt.label}</MyTypography>}
              className={styles.myFormControlLabel}
            />
          ))}
        </RadioGroup>
      </Box>
    </FormControl>
  );
}
