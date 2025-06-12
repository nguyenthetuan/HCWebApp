import MyModal from "@/components/common/MyModal";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import styles from "./styles.module.scss";
import FormChangeProduct from "./form";
import MyTypography from "@/components/common/MyTypography";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material";
import { t } from "i18next";

// forwardRef để parent có thể gọi hàm trong component này
interface props {
  itemSelect?: any;
  editProduct?: (FormData, id) => void;
  changePriceProduct?: (FormData, id) => void;
  categoryTree?: any;
  getItemAspectsForCategory?: (id_category: string) => void;
  aspects?: any[];
  isLoadingAspects?: boolean;
  categorySuggestion?: any[];
  fulfillmentPolicy?: any[];
  returnPolicy?: any[];
  paymentPolicy?: any[];
  invertoryLocation?: any[];
}
const ModalChangePrice = forwardRef((props: props, ref) => {
  const [open, setOpen] = useState(false);
  // expose các hàm ra ngoài qua ref
  useImperativeHandle(ref, () => ({
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
  }));

  const closeModal = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState<any>({
    price: props.itemSelect?.price || "0",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (props.itemSelect) {
      setFormData((prev) => ({
        ...prev,
        price: props.itemSelect?.price ?? "0",
      }));
    }
  }, [props.itemSelect]);

  const handleSubmit = () => {
    console.log(formData, props.itemSelect?._id, formData.price);

    closeModal();
    props.changePriceProduct(formData, props.itemSelect?._id);
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box
        sx={{
          width: 400,
          bgcolor: 'background.paper',
          p: 2,
          mx: 'auto',
          borderRadius: 2
        }}
      >
        <DialogTitle color="primary">{t("change_price")}</DialogTitle>
        <DialogContent>
          <DialogContentText color="warning">
            {t("change_alert_on_ebay")}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="price"
            name="price"
            label={t("price_title")}
            value={formData.price}
            onChange={handleChange}
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} variant="contained" color="error">{t("cancel")}</Button>
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>{t("accept")}</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
});

export default ModalChangePrice;
