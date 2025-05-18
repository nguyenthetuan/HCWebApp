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
import { userManagerProduct } from "@/hook/ProductPage/useManagerProduct";

interface Product {
  _id?: string;
  url?: string;
  name?: string;
  price?: string;
  out_of_stock?: boolean;
  avatar_url?: boolean;
  image_urls: [];
  __v: 0;
  content?: boolean;
}

interface Props {
  products: Product[];
  handleCheckboxChange?: any;
  handleSelectAll: () => void;
  selectedIds?: any;
  checkAll?: boolean;
  setCheckAll?: any;
  onChange?: (item) => void;
  itemSelect?: any;
}

export default function MyProductTable({
  products,
  handleCheckboxChange,
  handleSelectAll,
  selectedIds,
  checkAll,
  setCheckAll,
  onChange,
  itemSelect,
}: Props) {
  const { t, i18n } = useTranslation();
  const refModal = useRef(null);
  const refModalChangeProduct = useRef(null);
  const refModalCheapProduct = useRef(null);
  const refModalStopSellingProduct = useRef(null);
  const refModalUpdateQuantity = useRef(null);

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
              <MyTypography className={styles.row}>
                {t("title_select")}
                <Checkbox
                  checked={checkAll}
                  onClick={() => {
                    handleSelectAll();
                    setCheckAll(!checkAll);
                  }}
                />
              </MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_store_name")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_product_info")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_purchase_url")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_ebay_link")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_purchase_price")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_shipping_fee")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_stock_keywords")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_expected_profit")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_registered_date")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_note")}</MyTypography>
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
                        onChange(item);
                      }}
                    >
                      {t("action_change")}
                    </MyLink>
                    <MyLink
                      onClick={() => {
                        refModalChangeProduct.current.openModal();
                      }}
                    >
                      {t("action_delete")}
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
                  <MyTypography>{item?.store}</MyTypography>
                </TableCell>
                <TableCell>
                  <MyTypography>
                    {item?.name}
                    <MyLink
                      onClick={() => {
                        refModal.current.openModal();
                      }}
                    >
                      {t("action_epay_list")}
                    </MyLink>
                    <MyLink
                      onClick={() => {
                        alert("ssss");
                      }}
                    >
                      {t("action_delete_epay_data")}
                    </MyLink>
                  </MyTypography>
                </TableCell>
                <TableCell>
                  <MyLink>{item?.url}</MyLink>
                </TableCell>
                <TableCell>
                  <MyLink
                    href={item?.ebayMyLink}
                    target="_blank"
                    rel="noopener"
                  >
                    {t("action_view_ebay")}
                  </MyLink>
                  <MyLink
                    onClick={() => {
                      refModalCheapProduct.current.openModal();
                    }}
                  >
                    {t("action_cheap_product")}
                  </MyLink>
                  <MyLink
                    onClick={() => {
                      refModalStopSellingProduct.current.openModal();
                    }}
                  >
                    {t("action_stop_selling_list")}
                  </MyLink>
                  <MyLink
                    onClick={() => {
                      refModalUpdateQuantity.current.openModal();
                    }}
                  >
                    {t("action_update_quantity")}
                  </MyLink>
                </TableCell>
                <TableCell>
                  <MyTypography>{item?.price} ¥</MyTypography>
                </TableCell>
                <TableCell>
                  <MyTypography>{item?.shipping} ¥</MyTypography>
                </TableCell>
                <TableCell>
                  <MyTypography>{item?.stock}</MyTypography>
                </TableCell>
                <TableCell>
                  <MyTypography>{item?.profi?.toLocaleString()} ¥</MyTypography>
                </TableCell>
                <TableCell>
                  <MyTypography>{item?.registeredDate}</MyTypography>
                </TableCell>
                <TableCell>
                  <MyTypography>{item?.note || "-"}</MyTypography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <ModalListingEpay ref={refModal} />
      <ModalChangeProduct ref={refModalChangeProduct} itemSelect={itemSelect} />
      <ModalCheapProduct ref={refModalCheapProduct} />
      <ModalStopSellingProduct ref={refModalStopSellingProduct} />
      <ModadalUpdateQuantity ref={refModalUpdateQuantity} />
    </TableContainer>
  );
}
