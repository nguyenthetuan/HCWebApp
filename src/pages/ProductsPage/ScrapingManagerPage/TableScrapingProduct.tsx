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
  handleCheckboxChange?: (i, e) => void;
  selectedIds?: any[];
  handleSelectAll?: () => void;
}

export default function TableScrapingProduct({
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
              <MyTypography>Trạng thái</MyTypography>
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
          {products.map((item, i) => (
            <TableRow key={item.id}>
              <TableCell>
                <Checkbox
                  onClick={(e) => handleCheckboxChange(i, e)}
                  checked={selectedIds?.includes(i)}
                />
              </TableCell>
              <TableCell>
                <MyTypography>{item.url}</MyTypography>
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
