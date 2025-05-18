import MyModal from "@/components/common/MyModal";
import { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./styles.module.scss";
import FormChangeProduct from "./form";

// forwardRef để parent có thể gọi hàm trong component này
interface props {
  itemSelect?: any;
}
const ModalChangeProduct = forwardRef((props: props, ref) => {
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
      <FormChangeProduct itemSelect={props.itemSelect} />
    </MyModal>
  );
});

export default ModalChangeProduct;
