// components/MyTypography.tsx
import { Link, LinkProps } from "@mui/material";
import { ReactNode } from "react";
import clsx from "clsx";
import MyTypography from "../MyTypography";

interface MyTypographyProps extends LinkProps {
  children: ReactNode;
}

export default function MyLink({
  children,
  className,
  ...rest
}: MyTypographyProps) {
  return (
    <Link className={clsx(className)} {...rest}>
      <MyTypography>{children}</MyTypography>
    </Link>
  );
}
