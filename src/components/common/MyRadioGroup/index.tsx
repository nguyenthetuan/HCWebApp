import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import styles from "./styles.module.scss";

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
          {label}
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
              control={<Radio />}
              label={opt.label}
              className={styles.myFormControlLabel}
            />
          ))}
        </RadioGroup>
      </div>
    </FormControl>
  );
}
