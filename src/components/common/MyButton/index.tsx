import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { ReactNode } from "react";

interface MuiButtonProps extends ButtonProps {
  children: ReactNode;
  loading?: boolean;
  loadingText?: string;
}

export default function MyButton({
  children,
  loading = false,
  loadingText,
  disabled,
  ...rest
}: MuiButtonProps) {
  return (
    <Button
      {...rest}
      disabled={loading || disabled}
      startIcon={
        loading ? <CircularProgress size={16} color="inherit" /> : undefined
      }
    >
      {children}
    </Button>
  );
}
