import MyModal from "@/components/common/MyModal";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import styles from "./styles.module.scss";
import FormSearchProduct from "./form";
import { useSearchProduct } from "@/hook/ProductPage/useSearchProduct";
import FormSearchProductScraping from "./form";
import { useScrapingProduct } from "@/hook/ProductPage/useScrapingProduct";

// forwardRef để parent có thể gọi hàm trong component này
const ModalSearchProductScraping = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const { search, getProductLocal } = useSearchProduct();
  const {
    scapingProduct,
    getScrapingProduct,
    addProductToManager,
    handleCheckboxChange,
    handleSelectAll,
    selectedIds,
    loadingAddProduct,
  } = useScrapingProduct();

  useImperativeHandle(ref, () => ({
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
  }));

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    getScrapingProduct();
  }, []);

  return (
    <MyModal
      open={open}
      onClose={() => setOpen(false)}
      className={styles.container}
    >
      <FormSearchProductScraping
        search={search}
        handleCheckboxChange={handleCheckboxChange}
        selectedIds={selectedIds}
        handleSelectAll={handleSelectAll}
        productAll={scapingProduct.filter(
          (elm) => elm.scrape_status === "success"
        )}
        addProductToManager={() => addProductToManager(closeModal)}
        loadingAddProduct={loadingAddProduct}
      />
    </MyModal>
  );
});

export default ModalSearchProductScraping;
