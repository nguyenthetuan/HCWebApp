import MyProductTable from "@/components/common/MyProductTable";
import MyRadioGroup from "@/components/common/MyRadioGroup";
import { useState } from "react";
import styles from "./style.module.scss";
import MyPagination from "@/components/common/MyPagination";
import EBaySetting from "./compoents/EpaySetting";
import EbayToolbar from "./compoents/EbayToolbar";
import MultileButton from "./compoents/MultileButton";
import MoreInfor from "./compoents/MoreInfor";
import HeaderProductPage from "./compoents/HeaderProductPage";
import { Box } from "@mui/material";

const mockData = [
  {
    id: 1,
    store: "Surugaya",
    name: "Phần mềm Famicom Final Fantasy",
    ebayLink: "https://example.com",
    url: "google.com",
    quantity: 1,
    price: 24800,
    shipping: 0,
    stock: "VSI",
    profit: 25134,
    registeredDate: "2025-04-12",
    note: "123456789",
  },
];

const options = [
  {
    label: "Tất cả các mục",
    value: "1",
  },
  {
    label: "10",
    value: "10",
  },
  {
    label: "50",
    value: "50",
  },
  {
    label: "100",
    value: "100",
  },
];

export default function ProductPage() {
  const [gender, setGender] = useState("male");
  return (
    <Box className={styles.Container}>
      <HeaderProductPage />
      <Box className={styles.wrapCenter}>
        <Box className={styles.leftPane}>
          <EBaySetting />
        </Box>
        <Box className={styles.centerPane}>
          <MultileButton />
        </Box>
        <Box className={styles.rightPane}>
          <EbayToolbar />
        </Box>
      </Box>
      <Box className={styles.wrapRadioGroup}>
        <Box className={styles.wrapPagination}>
          <MyRadioGroup
            label="Trưng bày"
            name="gender"
            value={gender}
            onChange={setGender}
            options={options}
          />
          <MyPagination
            currentPage={1}
            totalPages={10}
            onPageChange={(page) => {}}
          />
        </Box>
        <Box className={styles.moreInfor}>
          <MoreInfor />
        </Box>
      </Box>
      <Box className={styles.table}>
        <MyProductTable products={mockData} />
      </Box>
      <Box className={styles.wrapFooterPagination}>
        <MyRadioGroup
          label="Trưng bày"
          name="gender"
          value={gender}
          onChange={setGender}
          options={options}
        />
        <MyPagination
          currentPage={1}
          totalPages={10}
          onPageChange={(page) => {}}
        />
      </Box>
    </Box>
  );
}
