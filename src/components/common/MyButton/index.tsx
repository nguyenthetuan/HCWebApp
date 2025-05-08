// components/MuiButton.tsx
import Button, { ButtonProps } from "@mui/material/Button";
import { ReactNode } from "react";
interface MuiButtonProps extends ButtonProps {
  children: ReactNode;
}

export default function MyButton({ children, ...rest }: MuiButtonProps) {
  return <Button {...rest}>{children}</Button>;
}
