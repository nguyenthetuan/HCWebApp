import MyModal from "@/components/common/MyModal";
import { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./styles.module.scss";
import DetailProduct from "./form";

const ModalDetailProduct = forwardRef((props: any, ref) => {
  const [open, setOpen] = useState(false);

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
      <DetailProduct productShow={props?.productShow} />
    </MyModal>
  );
});

export default ModalDetailProduct;
