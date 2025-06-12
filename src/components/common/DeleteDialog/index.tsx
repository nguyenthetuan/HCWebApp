import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { t } from "i18next";
import { useState, forwardRef, useImperativeHandle } from "react";

const DeleteDialog = (props, ref) => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    if (props?.onConfirm) props?.onConfirm();
    handleClose();
  };

  useImperativeHandle(ref, () => ({
    open: () => handleOpenDialog(),
    close: () => handleClose(),
  }));

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Xác nhận xoá</DialogTitle>
        <DialogContent>
          <Typography>Bạn có chắc chắn muốn xoá item này không?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("cancel")}</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            {t("accept")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default forwardRef(DeleteDialog);
