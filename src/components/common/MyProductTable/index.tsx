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
import { useRef, useState } from "react";
import ModalChangeProduct from "@/pages/ProductsPage/compoents/ModalChangeProduct";
import ModalCheapProduct from "@/pages/ProductsPage/compoents/ModalCheapProduct";
import ModalStopSellingProduct from "@/pages/ProductsPage/compoents/ModalStopSelingProduct";
import ModadalUpdateQuantity from "@/pages/ProductsPage/compoents/ModalUpdateQuantityProduct";

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
  const refModalChangeProduct = useRef(null);
  const refModalCheapProduct = useRef(null);
  const refModalStopSellingProduct = useRef(null);
  const refModalUpdateQuantity = useRef(null);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(
    null
  );

  const handleSelectAll = () => {
    if (selectedIds.length === products.length) {
      // Bỏ chọn tất cả nếu đã chọn hết
      setSelectedIds([]);
    } else {
      // Chọn tất cả
      setSelectedIds(products.map((item, index) => index));
    }
  };

  const handleCheckboxChange = (index: number, e: React.MouseEvent) => {
    const shiftKey = e.shiftKey;
    setSelectedIds((prev) => {
      if (shiftKey && lastSelectedIndex !== null) {
        // SHIFT + CLICK → chọn từ lastSelectedIndex đến index
        const [start, end] = [lastSelectedIndex, index].sort((a, b) => a - b);
        const range = Array.from(
          { length: end - start + 1 },
          (_, i) => start + i
        );
        const merged = Array.from(new Set([...prev, ...range]));
        return merged;
      }
      // CLICK thường → toggle item
      const isSelected = prev.includes(index);
      const newSelected = isSelected
        ? prev.filter((id) => id !== index)
        : [...prev, index];
      // Nếu đang unselect (bỏ chọn) thì reset lastSelectedIndex
      if (isSelected) {
        setLastSelectedIndex(null);
      } else {
        setLastSelectedIndex(index);
      }

      return newSelected;
    });

    // ✅ Nếu shift đang được giữ, vẫn phải cập nhật lastSelectedIndex mới
    if (shiftKey) {
      setLastSelectedIndex(index);
    }
  };

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
              <MyTypography>
                Chọn
                <Checkbox onClick={handleSelectAll} />
              </MyTypography>
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
          {products.map((item, i) => {
            return (
              <TableRow key={item.id}>
                <TableCell>
                  <MyTypography>
                    {i + 1}{" "}
                    <MyLink
                      onClick={() => {
                        refModalChangeProduct.current.openModal();
                      }}
                    >
                      [Thay đổi]
                    </MyLink>
                    <MyLink
                      onClick={() => {
                        refModalChangeProduct.current.openModal();
                      }}
                    >
                      [Xoá]
                    </MyLink>
                  </MyTypography>
                </TableCell>
                <TableCell>
                  <Checkbox
                    onClick={(e) => handleCheckboxChange(i, e)}
                    checked={selectedIds.includes(i)}
                  />
                </TableCell>
                <TableCell>
                  <MyTypography>{item.store}</MyTypography>
                </TableCell>
                <TableCell>
                  <MyTypography>
                    {item.name}

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
                  <MyLink
                    onClick={() => {
                      refModalCheapProduct.current.openModal();
                    }}
                  >
                    Rẻ nhất
                  </MyLink>
                  <MyLink
                    onClick={() => {
                      refModalStopSellingProduct.current.openModal();
                    }}
                  >
                    Danh sách sản phẩm dừng bán
                  </MyLink>
                  <MyLink
                    onClick={() => {
                      refModalUpdateQuantity.current.openModal();
                    }}
                  >
                    Số lượng thay đổi
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
            );
          })}
        </TableBody>
      </Table>
      <ModalListingEpay ref={refModal} />
      <ModalChangeProduct ref={refModalChangeProduct} />
      <ModalCheapProduct ref={refModalCheapProduct} />
      <ModalStopSellingProduct ref={refModalStopSellingProduct} />
      <ModadalUpdateQuantity ref={refModalUpdateQuantity} />
    </TableContainer>
  );
}
