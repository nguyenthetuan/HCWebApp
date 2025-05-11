import MyModal from "@/components/common/MyModal";
import { forwardRef, useImperativeHandle, useState } from "react";
import FormEpay from "./form";
import styles from "./styles.module.scss";

// forwardRef để parent có thể gọi hàm trong component này
const ModalListingEpay = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  // expose các hàm ra ngoài qua ref
  useImperativeHandle(ref, () => ({
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
  }));

  return (
    <MyModal
      open={open}
      onClose={() => setOpen(false)}
      className={styles.container}
    >
      <FormEpay />
    </MyModal>
  );
});

export default ModalListingEpay;
