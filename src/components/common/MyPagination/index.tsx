import React from "react";
import styles from "./styles.module.scss"; // nếu dùng CSS module
import { Box } from "@mui/material";
import MyButton from "../MyButton";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];

  // Tính danh sách trang hiển thị
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <Box className={styles.pagination}>
      <MyButton
        onClick={() => goToPage(1)}
        disabled={currentPage === 1}
        className={styles.button}
      >
        &lt;
      </MyButton>
      <MyButton
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.button}
      >
        &laquo;
      </MyButton>

      {pageNumbers.map((page) => (
        <MyButton
          key={page}
          onClick={() => goToPage(page)}
          className={page === currentPage ? styles.active : ""}
        >
          {page}
        </MyButton>
      ))}

      <MyButton
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.button}
      >
        &gt;
      </MyButton>
      <MyButton
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages}
        className={styles.button}
      >
        &raquo;
      </MyButton>
    </Box>
  );
};

export default Pagination;
