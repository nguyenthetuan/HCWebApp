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
import MyImage from "@/components/common/MyImage";
import MyTypography from "@/components/common/MyTypography";
import MyLink from "@/components/common/MyLink";

interface Product {
  _id?: string;
  url?: string;
  name?: string;
  price?: string;
  content?: string;
  avatar_url?: string;
  image_urls: any[];
  scrape_status?: string;
  __v?: number;
  createdAt?: string;
  updatedAt?: string;
}

interface Props {
  products: Product[];
  handleCheckboxChangeScraping?: (i, e) => void;
  selectedIds?: any[];
  handleSelectAll?: () => void;
  checkAll?: boolean;
}

export default function TableScrapingProduct({
  products,
  handleCheckboxChangeScraping,
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
                {t("common_select")}
                <Checkbox onClick={handleSelectAll} value={checkAll} />
              </MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("common_url")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("common_status")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("common_name")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("common_price")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("common_image")}</MyTypography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item: any, i) => (
            <TableRow key={item._id}>
              <TableCell>
                <Checkbox
                  onClick={(e) => handleCheckboxChangeScraping(item._id, e)}
                  checked={selectedIds?.includes(item._id)}
                />
              </TableCell>
              <TableCell>
                <MyLink href={item.url}>{item.url}</MyLink>
              </TableCell>
              <TableCell>
                <MyTypography>{item.scrape_status}</MyTypography>
              </TableCell>
              <TableCell>
                <MyTypography>{item.name}</MyTypography>
              </TableCell>
              <TableCell>
                <MyTypography>{item.price}</MyTypography>
              </TableCell>
              <TableCell>
                <MyImage source={item.avatar_url} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
