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
import MyLink from "@/components/common/MyLink";
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
  checkAll?: boolean;
}

export default function TableSearch({
  products,
  handleCheckboxChange,
  selectedIds,
  handleSelectAll,
  checkAll,
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
                {t("table_search_select")}
                <Checkbox onClick={handleSelectAll} value={checkAll} />
              </MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("table_search_url")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("table_search_name")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("table_search_price")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("table_search_image")}</MyTypography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item: any, i) => (
            <TableRow key={item.id}>
              <TableCell>
                <Checkbox
                  onClick={(e) => handleCheckboxChange(item.url, e)}
                  checked={selectedIds.includes(item.url)}
                />
              </TableCell>
              <TableCell>
                <MyLink href={item.url}>{item.url}</MyLink>
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
