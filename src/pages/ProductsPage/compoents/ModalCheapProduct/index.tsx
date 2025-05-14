import MyModal from "@/components/common/MyModal";
import { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./styles.module.scss";
import FormCheapProduct from "./form";

// forwardRef để parent có thể gọi hàm trong component này
const ModalCheapProduct = forwardRef((props, ref) => {
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
      <FormCheapProduct />
    </MyModal>
  );
});

export default ModalCheapProduct;
