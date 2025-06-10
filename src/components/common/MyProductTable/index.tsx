import styles from "./styles.module.scss";

import ModalChangeProduct from "@/pages/ProductsPage/compoents/ModalChangeProduct";
import ModalCheapProduct from "@/pages/ProductsPage/compoents/ModalCheapProduct";
import ModalListingEpay from "@/pages/ProductsPage/compoents/ModalListingEpay";
import ModalStopSellingProduct from "@/pages/ProductsPage/compoents/ModalStopSelingProduct";
import ModadalUpdateQuantity from "@/pages/ProductsPage/compoents/ModalUpdateQuantityProduct";
import {
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import IconEdit from "../../../assets/edit.svg?react";
import IconDelete from "../../../assets/delete.svg?react";

import MyLink from "../MyLink";
import MyTypography from "../MyTypography";
import MyImage from "../MyImage";

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
  handleCheckboxChange?: (e: unknown, value: unknown) => void;
  handleSelectAll?: () => void;
  selectedIds?: unknown[];
  checkAll?: boolean;
  setCheckAll?: (value: unknown) => void;
  onChange?: (item) => void;
  itemSelect?: unknown;
  editProduct?: (FormData, id) => void;
  handleDeleteProduct?: (item) => void;
  categoryTree?: any[];
  getItemAspectsForCategory?: (id_category: string) => void;
  aspects?: any[];
  getCategorySuggestions?: (name?: string) => void;
  isLoadingAspects?: boolean;
  categorySuggestion?: any[];
  fulfillmentPolicy?: any[];
  returnPolicy?: any[];
  paymentPolicy?: any[];
  invertoryLocation?: any[];
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
  editProduct,
  handleDeleteProduct,
  categoryTree,
  getItemAspectsForCategory,
  aspects,
  isLoadingAspects,
  categorySuggestion,
  fulfillmentPolicy,
  returnPolicy,
  paymentPolicy,
  invertoryLocation,
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
              <MyTypography>{t("title_product_info")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>ebayId</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_purchase_url")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_inventory")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_price_buy")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_price_Sell")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("common_image")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography>{t("title_action")}</MyTypography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item: any, i) => {
            return (
              <TableRow key={item.id}>
                <TableCell>
                  <MyTypography>{i + 1} </MyTypography>
                </TableCell>
                <TableCell>
                  <Checkbox
                    onClick={(e) => handleCheckboxChange(item._id, e)}
                    checked={selectedIds?.includes(item._id)}
                  />
                </TableCell>
                <TableCell>
                  <MyTypography>{item?.name}</MyTypography>
                </TableCell>
                <TableCell>
                  {item?.listingId ? (
                    <MyLink
                      href={`https://www.ebay.com/itm/${item?.listingId}`}
                    >
                      {item?.listingId}
                    </MyLink>
                  ) : (
                    <MyTypography>{t("title_not_upebay")}</MyTypography>
                  )}
                </TableCell>
                <TableCell>
                  <MyLink href={item?.url}>{item?.url}</MyLink>
                </TableCell>
                <TableCell>
                  <MyTypography>{item?.availableQuantity}</MyTypography>
                </TableCell>
                <TableCell>
                  <MyTypography>{item?.price_buy} ¥</MyTypography>
                </TableCell>
                <TableCell>
                  <MyTypography>{item?.price}$</MyTypography>
                </TableCell>
                <TableCell>
                  <MyImage source={item.avatar_url} />
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      refModalChangeProduct.current.openModal();
                      onChange(item);
                    }}
                  >
                    <IconEdit className={styles.iconEdit} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleDeleteProduct(item);
                    }}
                  >
                    <IconDelete className={styles.iconDelete} />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <ModalListingEpay ref={refModal} />
      <ModalChangeProduct
        ref={refModalChangeProduct}
        itemSelect={itemSelect}
        editProduct={editProduct}
        categoryTree={categoryTree}
        getItemAspectsForCategory={getItemAspectsForCategory}
        aspects={aspects}
        isLoadingAspects={isLoadingAspects}
        categorySuggestion={categorySuggestion}
        fulfillmentPolicy={fulfillmentPolicy}
        returnPolicy={returnPolicy}
        paymentPolicy={paymentPolicy}
        invertoryLocation={invertoryLocation}
      />
      <ModalCheapProduct ref={refModalCheapProduct} />
      <ModalStopSellingProduct ref={refModalStopSellingProduct} />
      <ModadalUpdateQuantity ref={refModalUpdateQuantity} />
    </TableContainer>
  );
}
