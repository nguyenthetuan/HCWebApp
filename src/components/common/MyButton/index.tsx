// components/MuiButton.tsx
import Button, { ButtonProps } from "@mui/material/Button";
import { ReactNode } from "react";
import styles from "./styles.module.scss";
interface MuiButtonProps extends ButtonProps {
  children: ReactNode;
}

export default function MyButton({ children, ...rest }: MuiButtonProps) {
  return <Button {...rest}>{children}</Button>;
}
