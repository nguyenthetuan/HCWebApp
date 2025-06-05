import React, { useRef, useState, useMemo, useContext } from "react";
import PropTypes from "prop-types";
import DeleteDialog from "@/components/common/DeleteDialog";

// Tạo Context
const DeleteContext = React.createContext(null);
DeleteContext.displayName = "DeleteContext";

// Provider
export function ContextProvider({ children }) {
  const refDelete = useRef(null);
  const [itemDelete, setItemDelete] = useState(null);
  const [onConfirmDelete, setOnConfirmDelete] = useState(null);

  const openModalDelete = (item: any, onConfirm) => {
    setItemDelete(item);
    setOnConfirmDelete(() => onConfirm); // lưu callback
    refDelete?.current?.open?.(); // Mở modal
  };

  const confirmDialog = () => {
    if (onConfirmDelete && itemDelete) {
      onConfirmDelete(itemDelete);
      setItemDelete(null);
      setOnConfirmDelete(null);
    }
  };

  const value = useMemo(
    () => ({
      openModalDelete,
      confirmDialog,
    }),
    [openModalDelete, confirmDialog]
  );

  return (
    <DeleteContext.Provider value={value}>
      <DeleteDialog ref={refDelete} onConfirm={confirmDialog} />
      {children}
    </DeleteContext.Provider>
  );
}

// Hook sử dụng trong component
export function useContextDialog() {
  const context = useContext(DeleteContext);
  if (!context) {
    throw new Error("useDeleteDialog must be used within a DeleteProvider");
  }
  return context;
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
