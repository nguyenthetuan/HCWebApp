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
import MyTypography from "../MyTypography";
import ModalListingEpay from "@/pages/ProductsPage/compoents/ModalListingEpay";
import { useRef } from "react";

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
  const refModal = useRef(null);
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
              <MyTypography>{t("title_MyProudctPage_no")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>Chọn</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>Tên cửa hàng</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>
                Tên sản phẩm eBay Số mặt hàng/Số lượng/Chức năng liên kết tự
                động
              </MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>URL mua hàng</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>MyLink eBay</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>Giá mua</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>Phí vận chuyển</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>Từ khoá chứng khoán</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>Lợi nhuận dự kiến</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>Ngày đăng</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>Ghi chú</MyTypography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item, i) => (
            <TableRow key={item.id}>
              <TableCell>
                <MyTypography>{i + 1}</MyTypography>
              </TableCell>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <MyTypography>{item.store}</MyTypography>
              </TableCell>
              <TableCell>
                <MyTypography>
                  {item.name}
                  <ModalListingEpay ref={refModal} />
                  <MyLink
                    onClick={() => {
                      refModal.current.openModal();
                    }}
                  >
                    Danh sách Epay
                  </MyLink>
                  <MyLink
                    onClick={() => {
                      alert("ssss");
                    }}
                  >
                    [Xoá dữ liệu danh sách]
                  </MyLink>
                </MyTypography>
              </TableCell>
              <TableCell>
                <MyLink>{item.url}</MyLink>
              </TableCell>
              <TableCell>
                <MyLink href={item.ebayMyLink} target="_blank" rel="noopener">
                  Xem eBay
                </MyLink>
              </TableCell>
              <TableCell>
                <MyTypography>{item.price.toLocaleString()} ¥</MyTypography>
              </TableCell>
              <TableCell>
                <MyTypography>{item.shipping} ¥</MyTypography>
              </TableCell>
              <TableCell>
                <MyTypography>{item.stock}</MyTypography>
              </TableCell>
              <TableCell>
                <MyTypography>{item.profit.toLocaleString()} ¥</MyTypography>
              </TableCell>
              <TableCell>
                <MyTypography>{item.registeredDate}</MyTypography>
              </TableCell>
              <TableCell>
                <MyTypography>{item.note || "-"}</MyTypography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
