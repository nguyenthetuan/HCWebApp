// components/MuiModal.jsx
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { t } from 'i18next';

export default function MuiModal({ open, title, children, onClose, onSubmit }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t("cancel")}</Button>
        <Button onClick={onSubmit} variant="contained" color="primary">
          {t("accept")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
