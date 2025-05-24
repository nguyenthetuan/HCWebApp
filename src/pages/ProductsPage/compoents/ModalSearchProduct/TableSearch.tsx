import styles from "./styles.module.scss";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import MyImage from "@/components/common/MyImage";
import MyTypography from "@/components/common/MyTypography";
interface Product {
  url?: string;
  name?: string;
  price?: string;
  imageSrc?: string;
}

interface Props {
  products: Product[];
  handleCheckboxChange?: any;
  selectedIds?: any;
  handleSelectAll?: () => void;
}

export default function TableSearch({
  products,
  handleCheckboxChange,
  selectedIds,
  handleSelectAll,
}: Props) {
  const { t, i18n } = useTranslation();
  return (
    <TableContainer
      component={Paper}
      className={`${styles.TableContainer} ${styles.responsiveTable}`}
      style={{ marginTop: 0, paddingTop: 0 }}
    >
      <Table size="small" className={styles.header}>
        <TableHead>
          <TableRow>
            <TableCell>
              <MyTypography>
                Chọn
                <Checkbox onClick={handleSelectAll} />
              </MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>Url</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>Tên</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>Giá</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>Hình ảnh</MyTypography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item: any, i) => (
            <TableRow key={item.id}>
              <TableCell>
                <Checkbox
                  onClick={(e) => handleCheckboxChange(i, e)}
                  checked={selectedIds.includes(i)}
                />
              </TableCell>
              <TableCell>
                <MyTypography>{item.url}</MyTypography>
              </TableCell>
              <TableCell>
                <MyTypography>{item.name}</MyTypography>
              </TableCell>
              <TableCell>
                <MyTypography>{item.price}</MyTypography>
              </TableCell>
              <TableCell>
                <MyImage source={item.imageSrc} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
