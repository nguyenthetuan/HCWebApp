import MyModal from "@/components/common/MyModal";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import styles from "./styles.module.scss";
import FormSearchProduct from "./form";
import { useSearchProduct } from "@/hook/ProductPage/useSearchProduct";

// forwardRef để parent có thể gọi hàm trong component này
const ModalSearchProduct = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const {
    foundation,
    handleChange,
    keyword,
    setKeyword,
    category,
    setCategory,
    search,
    product,
    handleCheckboxChange,
    selectedIds,
    getProductLocal,
    addProduct,
    loadingSearch,
    loadingSaveProduct,
    handleSelectAll,
    checkAll,
  } = useSearchProduct();
  // expose các hàm ra ngoài qua ref
  useImperativeHandle(ref, () => ({
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
  }));

  const closeModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    getProductLocal();
  }, []);
  return (
    <MyModal
      open={open}
      onClose={() => setOpen(false)}
      className={styles.container}
    >
      <FormSearchProduct
        foundation={foundation}
        handleChange={handleChange}
        keyword={keyword}
        setKeyword={setKeyword}
        category={category}
        setCategory={setCategory}
        search={search}
        product={product}
        handleCheckboxChange={handleCheckboxChange}
        selectedIds={selectedIds}
        addProduct={() => addProduct(closeModal)}
        loadingSearch={loadingSearch}
        loadingSaveProduct={loadingSaveProduct}
        handleSelectAll={handleSelectAll}
        checkAll={checkAll}
      />
    </MyModal>
  );
});

export default ModalSearchProduct;
