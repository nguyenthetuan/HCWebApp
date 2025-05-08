import styles from "./styles.module.scss";

import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import MyLink from "../MyLink";

interface Product {
  id: number;
  store: string;
  name: string;
  ebayMyLink: string;
  url: string;
  quantity: number;
  price: number;
  shipping: number;
  stock: string;
  profit: number;
  registeredDate: string;
  note?: string;
}

interface Props {
  products: Product[];
}

export default function MyProductTable({ products }: Props) {
  const { t, i18n } = useTranslation();

  return (
    <TableContainer
      component={Paper}
      className={styles.TableContainer}
      style={{ marginTop: 0, paddingTop: 0, position: "relative", top: 0 }}
    >
      <Table size="small" className={styles.header}>
        <TableHead>
          <TableRow>
            <TableCell>{t("title_MyProudctPage_no")}</TableCell>
            <TableCell>Chọn</TableCell>
            <TableCell>Tên cửa hàng</TableCell>
            <TableCell>Tên sản phẩm</TableCell>
            <TableCell>URL Mua hàng</TableCell>
            <TableCell>MyLink eBay</TableCell>
            <TableCell>Giá mua</TableCell>
            <TableCell>Phí vận chuyển</TableCell>
            <TableCell>Từ khoá chứng khoán</TableCell>
            <TableCell>Lợi nhuận dự kiến</TableCell>
            <TableCell>Ngày đăng</TableCell>
            <TableCell>Ghi chú</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item, i) => (
            <TableRow key={item.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{item.store}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <MyLink>{item.url}</MyLink>
              </TableCell>
              <TableCell>
                <MyLink href={item.ebayMyLink} target="_blank" rel="noopener">
                  Xem eBay
                </MyLink>
              </TableCell>
              <TableCell>{item.price.toLocaleString()} ¥</TableCell>
              <TableCell>{item.shipping} ¥</TableCell>
              <TableCell>{item.stock}</TableCell>
              <TableCell>{item.profit.toLocaleString()} ¥</TableCell>
              <TableCell>{item.registeredDate}</TableCell>
              <TableCell>{item.note || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
