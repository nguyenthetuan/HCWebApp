import MyButton from "@/components/common/MyButton";
import { Box, Stack } from "@mui/material";
import styles from "./styles.module.scss";
import ModalSearchProduct from "../ModalSearchProduct";
import { useRef } from "react";
import ModalListingEpay from "../ModalListingEpay";
import ModalSearchProductScraping from "../ModalSearchProductScraping";
import { userManagerProduct } from "@/hook/ProductPage/useManagerProduct";
import { useTranslation } from "react-i18next";

interface propsMutiButton {
  deleteProduct?: () => void;
  loadingDelProduct?: boolean;
  addProductToEbay?: () => void;
  loadingUpebay?: boolean;
  loadingPriceCalc?: boolean;
}
export default function MultileButton(props: propsMutiButton) {
  const { t } = useTranslation();
  const refModal = useRef(null);
  const refModalListingEbay = useRef(null);
  const openModalSearch = () => {
    refModal?.current?.openModal();
  };
  const openModleListing = () => {
    refModalListingEbay?.current?.openModal();
  };
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <Box className={styles.centerFlexShrink}>
      <Stack spacing={1}>
        <MyButton
          variant="contained"
          color="info"
          size="small"
          className={styles.buttons}
          onClick={props.addProductToEbay}
          loading={props.loadingUpebay}
        >
          {t("pushSelectedToEbay")}
        </MyButton>
        <MyButton
          variant="contained"
          sx={{ backgroundColor: "orange", fontSize: 8 }}
          size="small"
          className={styles.buttons}
          onClick={props.deleteProduct}
          loading={props?.loadingDelProduct}
        >
          {t("deleteAllItems")}
        </MyButton>
        {/* <MyButton
          variant="contained"
          sx={{ backgroundColor: "violet", fontSize: 8 }}
          size="small"
          className={styles.buttons}
          onClick={openModleListing}
        >
          {t("ebayLiveListing")}
        </MyButton> */}
        <MyButton
          variant="contained"
          sx={{ backgroundColor: "chocolate", fontSize: 8 }}
          size="small"
          className={styles.buttons}
          onClick={openModalSearch}
        >
          {t("search")}
        </MyButton>
        <MyButton
          variant="contained"
          sx={{ backgroundColor: "deepskyblue", fontSize: 8 }}
          size="small"
          className={styles.buttons}
          loading={props?.loadingPriceCalc}
          onClick={openModalSearch}
        >
          Tính toán lại giá bán
        </MyButton>
      </Stack>
      <ModalSearchProductScraping ref={refModal} />
      <ModalListingEpay ref={refModalListingEbay} />
    </Box>
  );
}
