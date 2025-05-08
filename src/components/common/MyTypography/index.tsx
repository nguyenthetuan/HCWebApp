// components/MyTypography.tsx
import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

interface MyTypographyProps extends TypographyProps {
  children: ReactNode;
}

export default function MyTypography({
  children,
  className,
  ...rest
}: MyTypographyProps) {
  return (
    <Typography className={clsx(styles.container, className)} {...rest}>
      {children}
    </Typography>
  );
}
