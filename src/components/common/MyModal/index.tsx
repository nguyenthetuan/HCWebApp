import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { ReactNode } from "react";
interface ModalProps {
  children: ReactNode;
  open?: boolean;
  onClose?: () => void;
  title?: never;
}
const MyModal = ({ open, onClose, title, children, ...rest }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={false} // bỏ giới hạn mặc định
      slotProps={{
        paper: {
          sx: {
            maxWidth: "100vw",
            height: "100vh",
            margin: "5vw",
          },
        },
      }}
      {...rest}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default MyModal;
