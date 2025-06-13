// file: src/constants/tooltip.tsx
import MyLink from "@/components/common/MyLink";
import React from "react";
import { useTranslation } from "react-i18next";

export const getOptionStatus = (t) => [
  {
    value: "1",
    label: t("optionStatus"),
  },
];

export const TOOLTIP = () => {
  const { t } = useTranslation();
  return {
    SKU: <>{t("tooltip_sku")}</>,
    CATEGORY_ID: (
      <>
        {t("category_id")}
        <a target="_blank" href="https://www.isoldwhat.com">
          {" "}
          {t("category_id_one")}
        </a>{" "}
        {t("category_id_two")}
        <a
          target="_blank"
          href="https://www.isoldwhat.com/getcats/ebay-motors-categories?1=1&RootID=6000&wv=motorscats"
        >
          {t("category_id_one")}
        </a>
        {t("category_id_three")}
      </>
    ),
    STORE_CATEGORY_ID: (
      <>
        {t("store_category_id")}
        <a
          target="_blank"
          href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2Fsh%2Fstr%2Fcategory&sgfl=sm&smuid=ecc4d679a1924717ab0e0b9cafe47e45"
        >
          {t("store_category_one")}
        </a>
        {t("store_category_two")}
      </>
    ),
    STATUS: (
      <>
        {t("tooltip_status")}
        <a
          target="_blank"
          href="https://developer.ebay.com/api-docs/user-guides/static/trading-user-guide-landing.html#development/Desc-ItemCondition.html"
        >
          {t("tooltop_status_one")}
        </a>{" "}
        .
      </>
    ),
    CONDITION: <>{t("condition")}</>,
    SPECIFICS: <>{t("specifics")}</>,
    DETAIL_PRODUCT: <>{t("detail_product")}</>,
    TRANSPORT: (
      <>
        {t("transport")}
        <MyLink>{t("transport_1")}</MyLink>
        {t("transport_2")}
      </>
    ),
    RETURN: (
      <>
        {t("return")}
        <MyLink>{t("return_1")}</MyLink> {t("return_2")}
      </>
    ),
    EBAY: <>{t("ebay")}</>,
    PRICE: <>{t("price")}</>,
    FEE_BUY_TRANSPORT: <>{t("fee_buy_transport")}</>,
    KEY_STOCK: (
      <>
        {t("key_stock")}
        <a> {t("key_stock_1")} </a>
        {t("key_stock_2")}
      </>
    ),
    MODE: <>{t("mode")}</>,
    LOGIC: <>{t("logic")}</>,
    RATIO: <>{t("ratio")}</>,
    IdEbayApplication: <>{t("id_ebay_application")}</>,
    IdEbayDevelop: <>{t("id_ebay_develop")}</>,
    codeEbay: <>{t("code_ebay")}</>,
  };
};
export const getOptionEcommerce = (t) => [
  {
    label: t("optionEcommerce_ebay"),
    value: "1",
  },
  {
    label: t("ebayEngine"),
    value: "2",
  },
];

export const getOptionHtml = (t) => [
  {
    label: t("none"),
    value: "0",
  },
  {
    label: t("template1"),
    value: "1",
  },
  {
    label: t("template2"),
    value: "2",
  },
  {
    label: t("template3"),
    value: "3",
  },
  {
    label: t("template4"),
    value: "4",
  },
  {
    label: t("template5"),
    value: "5",
  },
];

export const getEndDow = (t) => [
  {
    value: "1",
    label: t("valid"),
  },
  {
    value: "0",
    label: t("invalid"),
  },
];

export const getCommercialPlatform = (t) => [
  {
    value: "netsea",
    label: t("netsea"),
  },
  {
    value: "surugaya",
    label: t("surugaya"),
  },
];

export const getCategoryProductSurugara = (t) => [
  {
    value: "3",
    label: t("category_surugara_3"),
  },
  {
    value: "4",
    label: t("category_surugar_4"),
  },
  {
    value: "5",
    label: t("category_surugar_5"),
  },
  {
    value: "10",
    label: t("category_surugar_10"),
  },
  {
    value: "2",
    label: t("category_surugar_2"),
  },
  {
    value: "6",
    label: t("category_surugar_6"),
  },
  {
    value: "8",
    label: t("category_surugar_8"),
  },
  {
    value: "7",
    label: t("category_surugar_7"),
  },
  {
    value: "11",
    label: t("ccategory_surugar_11"),
  },
];

export const getCategoryProdcutNetSea = (t) => [
  {
    value: "1",
    label: t("categoryProductNetsea1"),
  },
  {
    value: "11",
    label: t("categoryProductNetsea11"),
  },
  {
    value: "4",
    label: t("categoryProductNetsea4"),
  },
  {
    value: "2",
    label: t("categoryProductNetsea2"),
  },
  {
    value: "12",
    label: t("categoryProductNetsea12"),
  },
  {
    value: "3",
    label: t("categoryProductNetsea3"),
  },
  {
    value: "7",
    label: t("categoryProductNetsea7"),
  },
  {
    value: "5",
    label: t("categoryProductNetsea5"),
  },
  {
    value: "6",
    label: t("categoryProductNetsea6"),
  },
  {
    value: "8",
    label: t("categoryProductNetsea8"),
  },
];

export const getOptionOnOff = (t) => [
  {
    value: "on",
    label: t("on"),
  },
  {
    value: "off",
    label: t("off"),
  },
];

export const getMode = (t) => [
  {
    value: "normal",
    label: t("normal"),
  },
  {
    value: "tracking",
    label: t("tracking"),
  },
];

export const getLogic = (t) => [
  {
    value: "normal",
    label: t("logic_normal"),
  },
  {
    value: "await",
    label: t("await"),
  },
  {
    value: "logic1",
    label: "Kiểm tra logic 1",
  },
  {
    value: "Nessie",
    label: "Nessie",
  },
  {
    value: "speed",
    label: "Giao hàng siêu tốc",
  },
  {
    value: "inchiokunet",
    label: "Inchiokunet",
  },
  {
    value: "mirai",
    label: "Mirai DOnya",
  },
];
export const logic = [
  {
    value: "normal",
    label: "Kiểm tra logic 2 (bình thường)",
  },
  {
    value: "await",
    label: "Kiểm tra logic 2 (chờ)",
  },
  {
    value: "logic1",
    label: "Kiểm tra logic 1",
  },
  {
    value: "Nessie",
    label: "Nessie",
  },
  {
    value: "speed",
    label: "Giao hàng siêu tốc",
  },
  {
    value: "inchiokunet",
    label: "Inchiokunet",
  },
  {
    value: "mirai",
    label: "Mirai DOnya",
  },
];

export const getTypeFile = (t) => [
  {
    value: "ratio",
    label: t("typeFile_ratio"),
  },
  {
    value: "tab",
    label: t("tab"),
  },
];

export const getAutoLink = (t) => [
  {
    value: "no",
    label: t("no"),
  },
  {
    value: "yes",
    label: t("yes"),
  },
];

export const autoLink = [
  {
    value: "no",
    label:
      'Không có (Nếu "BẬT/TẮT" và "Số lượng" không được bao gồm, hãy chọn "Không có")',
  },
  {
    value: "yes",
    label: "Có thể là",
  },
];

export const getTypeUpload = (t) => [
  {
    value: "full",
    label: t("full"),
  },
  {
    value: "additional",
    label: t("additional"),
  },
];

export const getNotificationEmail = (t) => [
  {
    value: "full",
    label: t("notificationEmail_full"),
  },
  {
    value: "change",
    label: t("change"),
  },
];

export const getDulicateUrl = (t) => [
  {
    value: "valid",
    label: t("duplicateUrl_valid"),
  },
  {
    value: "disabled",
    label: t("disabled"),
  },
];

export const getMonitor = (t) => [
  {
    value: "server",
    label: t("server"),
  },
  {
    value: "client",
    label: t("client"),
  },
];

export const arrange = (t) => [
  {
    value: "asc",
    label: t("title_asc"),
  },
  {
    value: "desc",
    label: t("title_desc"),
  },
];

export const SortByProperty = (t) => [
  {
    value: "createdAt",
    label: t("createdAt"),
  },
  {
    value: "name",
    label: t("name"),
  },
  {
    value: "content",
    label: t("content"),
  },
  {
    value: "price",
    label: t("prices"),
  },
  {
    value: "price_buy",
    label: t("price_buy"),
  },
];
