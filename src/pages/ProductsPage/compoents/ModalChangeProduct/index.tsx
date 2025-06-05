import MyModal from "@/components/common/MyModal";
import { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./styles.module.scss";
import FormChangeProduct from "./form";

// forwardRef để parent có thể gọi hàm trong component này
interface props {
  itemSelect?: any;
  editProduct?: (FormData, id) => void;
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
const ModalChangeProduct = forwardRef((props: props, ref) => {
  const [open, setOpen] = useState(false);
  // expose các hàm ra ngoài qua ref
  useImperativeHandle(ref, () => ({
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
  }));

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <MyModal
      open={open}
      onClose={() => setOpen(false)}
      className={styles.container}
    >
      <FormChangeProduct
        itemSelect={props.itemSelect}
        editProduct={props?.editProduct}
        categoryTree={props?.categoryTree}
        getItemAspectsForCategory={props?.getItemAspectsForCategory}
        aspects={props?.aspects}
        isLoadingAspects={props?.isLoadingAspects}
        categorySuggestion={props?.categorySuggestion}
        fulfillmentPolicy={props?.fulfillmentPolicy}
        returnPolicy={props?.returnPolicy}
        paymentPolicy={props?.paymentPolicy}
        invertoryLocation={props?.invertoryLocation}
        closeModal={closeModal}
      />
    </MyModal>
  );
});

export default ModalChangeProduct;
