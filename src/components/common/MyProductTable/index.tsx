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
import ModalChangeQuantity from "@/pages/ProductsPage/compoents/ModalChangeQuantity";
import ModalChangePrice from "@/pages/ProductsPage/compoents/ModalChangePrice";

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
  setItemSelect?: (item) => void;
  itemSelect?: unknown;
  editProduct?: (FormData, id) => void;
  changeQuantityProduct?: (FormData, id) => void;
  changePriceProduct?: (FormData, id) => void;
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
  setItemSelect,
  itemSelect,
  editProduct,
  changeQuantityProduct,
  changePriceProduct,
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
  const refModalChangeQuantity = useRef(null);
  const refModalChangePrice = useRef(null);
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
              <MyTypography fontWeight={"bold"}>{t("title_MyProductPage_no")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography fontWeight={"bold"} className={styles.row}>
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
              <MyTypography fontWeight={"bold"}>{t("title_product_info")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography fontWeight={"bold"}>ebayId</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography fontWeight={"bold"}>{t("title_purchase_url")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography fontWeight={"bold"}>{t("title_ebay_upload_timestamp")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography fontWeight={"bold"}>{t("title_japan_fee")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography fontWeight={"bold"}>{t("title_inventory")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography fontWeight={"bold"}>{t("title_price_buy")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography fontWeight={"bold"}>{t("title_price_Sell")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography fontWeight={"bold"}>{t("common_image")}</MyTypography>
            </TableCell>
            <TableCell>
              <MyTypography fontWeight={"bold"}>{t("title_action")}</MyTypography>
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
                    <MyTypography color="red">{t("title_not_upebay")}</MyTypography>
                  )}
                </TableCell>
                <TableCell>
                  <MyLink href={item?.url}>{item?.url}</MyLink>
                </TableCell>
                <TableCell>
                  <MyTypography> {item?.ebayUploadTimestamp
                    ? new Date(item.ebayUploadTimestamp).toLocaleDateString('ja-JP')
                    : ''}</MyTypography>
                </TableCell>
                <TableCell>
                  <MyTypography>¥ {item?.japanShippingFee}</MyTypography>
                </TableCell>
                <TableCell style={{ width: '100px' }}>
                  <MyTypography fontWeight={"bold"}>
                    {item?.availableQuantity}
                    {!item.offer_sku && <IconButton
                      onClick={() => {
                        refModalChangeQuantity.current.openModal();
                        setItemSelect(item);
                      }}
                    >
                      <IconEdit className={styles.iconEdit} />
                    </IconButton>}</MyTypography>
                </TableCell>
                <TableCell style={{ width: '100px' }}>
                  <MyTypography>¥ {item?.price_buy}</MyTypography>
                </TableCell>
                <TableCell style={{ width: '150px' }}>
                  <MyTypography fontWeight={"bold"}>$ {item?.price}
                    {!item.offer_sku && <IconButton
                      onClick={() => {
                        refModalChangePrice.current.openModal();
                        setItemSelect(item);
                      }}
                    >
                      <IconEdit className={styles.iconEdit} />
                    </IconButton>}</MyTypography>
                </TableCell>
                <TableCell>
                  <MyImage source={item.avatar_url} />
                </TableCell>
                <TableCell>
                  {item.offer_sku && <IconButton
                    onClick={() => {
                      refModalChangeProduct.current.openModal();
                      onChange(item);
                    }}
                  >
                    <IconEdit className={styles.iconEdit} />
                  </IconButton>}

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
      <ModalChangeQuantity
        ref={refModalChangeQuantity}
        itemSelect={itemSelect}
        changeQuantityProduct={changeQuantityProduct}
      />
      <ModalChangePrice
        ref={refModalChangePrice}
        itemSelect={itemSelect}
        changePriceProduct={changePriceProduct}
      />
      <ModalCheapProduct ref={refModalCheapProduct} />
      <ModalStopSellingProduct ref={refModalStopSellingProduct} />
      <ModadalUpdateQuantity ref={refModalUpdateQuantity} />
    </TableContainer>
  );
}
