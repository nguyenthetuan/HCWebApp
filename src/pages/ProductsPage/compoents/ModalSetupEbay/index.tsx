import MyModal from "@/components/common/MyModal";
import { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./styles.module.scss";
import FormSetupEbay from "./form";

// forwardRef để parent có thể gọi hàm trong component này
interface propsModalSetupEbay {
  fulfillmentPolicy?: any[];
  returnPolicy?: any[];
  paymentPolicy?: any[];
}
const ModalSetUpEbay = forwardRef((props: propsModalSetupEbay, ref) => {
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
      <FormSetupEbay
        fulfillmentPolicy={props?.fulfillmentPolicy}
        returnPolicy={props?.returnPolicy}
        paymentPolicy={props?.paymentPolicy}
      />
    </MyModal>
  );
});

export default ModalSetUpEbay;
