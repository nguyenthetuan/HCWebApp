// components/MuiButton.tsx
import Button, { ButtonProps } from "@mui/material/Button";
import { ReactNode } from "react";
import Tooltip from "@mui/material/Tooltip";

interface MuiButtonProps extends ButtonProps {
  children: ReactNode;
  toolTip?: string;
}

export default function MyButtonTooltip({
  children,
  toolTip,
  ...rest
}: MuiButtonProps) {
  return (
    <Tooltip title={toolTip} placement="top" arrow>
      <Button {...rest}>{children}</Button>
    </Tooltip>
  );
}
