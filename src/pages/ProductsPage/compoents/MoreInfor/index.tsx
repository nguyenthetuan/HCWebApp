import MyLink from "@/components/common/MyLink";
import MyTypography from "@/components/common/MyTypography";
import styles from "./styles.module.scss";
export default function MoreInfor() {
  return (
    <MyTypography variant="body2" className={styles.container}>
      <b>Số lượng trang web bị hạn chế</b> Rakuten Ichiba: 0/1500 Yahoo! Đấu
      giá: 0/1000 Yahoo! Mua sắm: 0/1500 Trạng thái không nhất quán của chức
      năng liên kết tự động của eBay{" "}
      <MyLink component="button" underline="always" color="primary">
        Có (đã hiển thị)
      </MyLink>
      [Số lượng dữ liệu danh sách đã lưu của chức năng niêm yết eBay] 14/30
    </MyTypography>
  );
}
