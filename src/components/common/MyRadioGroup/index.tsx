import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import styles from "./styles.module.scss";
import MyTypography from "../MyTypography";
import { styled } from "@mui/material/styles";
const StyledRadio = styled(Radio)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    fontSize: "20px", // Kích thước mặc định cho màn hình nhỏ
    // [theme.breakpoints.up(1280)]: {
    //   fontSize: "20px", // Khi màn hình >= 1280px
    // },
  },
}));
export default function MyRadioGroup({
  label,
  name,
  options,
  value,
  onChange,
}) {
  return (
    <FormControl component="fieldset" className={styles.FormControl}>
      <div className={styles.rowWrapper}>
        <FormLabel
          sx={{
            fontSize: "14px",
            color: "#333",
            fontWeight: "430",
          }}
        >
          <MyTypography>{label}</MyTypography>
        </FormLabel>
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
      </div>
    </FormControl>
  );
}
