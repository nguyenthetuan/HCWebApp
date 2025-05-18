// file: src/constants/tooltip.tsx
import MyLink from "@/components/common/MyLink";
import React from "react";

export const TOOLTIP = {
  SKU: (
    <>
      * Nếu bạn nhập <code>&lt;ebay_sku&gt;ABC123456&lt;/ebay_sku&gt;</code>,
      thông tin sẽ được nhập tự động.
    </>
  ),
  CATEGORY_ID: (
    <>
      Vui lòng tìm và nhập số danh mục eBay cho mặt hàng này
      <a target="_blank" href="https://www.isoldwhat.com">
        {" "}
        tại đây
      </a>{" "}
      . * Vui lòng kiểm tra số danh mục eBay Motors{" "}
      <a
        target="_blank"
        href="https://www.isoldwhat.com/getcats/ebay-motors-categories?1=1&RootID=6000&wv=motorscats"
      >
        tại đây
      </a>
      . (Ví dụ) 　Nhập "ống kính" vào trường tìm kiếm "Tìm kiếm theo từ khóa
      trong tên danh mục: Từ khóa:" ở bên phải màn hình và nhấp vào GỬI. Danh
      sách các danh mục liên quan sẽ được hiển thị. 　Ví dụ, bạn có thể sử dụng
      "78997" trong Ống kính & Bộ lọc #78997 làm số danh mục. * Nếu bạn nhập
      thông tin sau vào trường ghi chú trên màn hình danh sách theo định dạng{" "}
      {"<ebay_cate>123456</ebay_cate>"}, thông tin này sẽ được nhập tự động.
      động.
    </>
  ),
  STORE_CATEGORY_ID: (
    <>
      Vui lòng tìm và nhập số danh mục cửa hàng của bạn{" "}
      <a
        target="_blank"
        href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2Fsh%2Fstr%2Fcategory&sgfl=sm&smuid=ecc4d679a1924717ab0e0b9cafe47e45"
      >
        [tại đây]
      </a>{" "}
      nơi bạn sẽ liệt kê sản phẩm này. * Nếu bạn nhập thông tin vào trường ghi
      chú trên màn hình danh sách theo định dạng "
      {"<ebay_store>1234567890</ebay_store>"}
      động nhập.
    </>
  ),
  STATUS: (
    <>
      Bằng cách nhập ID danh mục ở trên, bạn sẽ có thể chọn điều kiện theo danh
      mục. Để biết điều kiện của từng hạng mục, vui lòng nhấp vào{" "}
      <a
        target="_blank"
        href="https://developer.ebay.com/api-docs/user-guides/static/trading-user-guide-landing.html#development/Desc-ItemCondition.html"
      >
        [đây]
      </a>{" "}
      .
    </>
  ),
  CONDITION: (
    <>
      Điều này đúng khi điều kiện không phải là Mới. (Nếu bạn nhập thông tin này
      khi tạo mục mới, một thông báo cảnh báo sẽ xuất hiện khi bạn cố gắng liệt
      kê mục đó.)
    </>
  ),
  SPECIFICS: (
    <>
      Điều này đúng khi điều kiện không phải là Mới. (Nếu bạn nhập thông tin này
      khi tạo mục mới, một thông báo cảnh báo sẽ xuất hiện khi bạn cố gắng liệt
      kê mục đó.)
    </>
  ),
  DETAIL_PRODUCT: (
    <>
      Vui lòng đặt tên và giá trị của Chi tiết mặt hàng, phân tách bằng | (một
      nửa chiều rộng). Có thể thiết lập tối đa tám thông số kỹ thuật của mặt
      hàng như sau: (Ví dụ) Số sê-ri|A12345 Chất liệu|da Hãy đảm bảo thiết lập
      thông số kỹ thuật "bắt buộc" được hiển thị ở bên phải. Việc thiết lập
      "được đề xuất" và "tùy chọn" cũng giúp người mua dễ dàng tìm kiếm sản phẩm
      của bạn hơn, điều này cũng giúp cải thiện SEO của bạn trên eBay.
    </>
  ),
  TRANSPORT: (
    <>
      Vui lòng đặt tên chính sách vận chuyển của bạn trước trong{" "}
      <MyLink>[Cài đặt chức năng bán hàng trên eBay]</MyLink> , ngăn cách bằng
      |.
    </>
  ),
  RETURN: (
    <>
      Vui lòng đặt tên Chính sách trả hàng của bạn trước trong{" "}
      <MyLink>[Cài đặt chức năng bán hàng trên eBay]</MyLink> , ngăn cách bằng
      |. , phân tách chúng bằng dấu |.
    </>
  ),
  EBAY: <>*Nếu giá của nhà cung cấp có dấu phẩy, vui lòng thêm dấu phẩy vào.</>,
  PRICE: (
    <>*Nếu giá của nhà cung cấp có dấu phẩy, vui lòng thêm dấu phẩy vào.</>
  ),
  FEE_BUY_TRANSPORT: <>(Có dấu phẩy hoặc không có dấu phẩy)</>,
  KEY_STOCK: (
    <>
      *Nhập chuỗi ký tự sẽ biến mất khi hết hàng vào URL nhà cung cấp. * Vui
      lòng tham khảo <a> hướng dẫn sử dụng </a>để biết từ vựng của từng nhà cung
      cấp. Chế độ giám sát:
    </>
  ),
  MODE: (
    <>
      Chọn giữa chế độ bình thường, chế độ này sẽ cảnh báo bạn khi một từ "biến
      mất" trong URL của nhà cung cấp hoặc chế độ Theo dõi, chế độ này sẽ cảnh
      báo bạn khi một từ "xuất hiện" trong URL của nhà cung cấp . Thông thường,
      hãy sử dụng ở "Chế độ bình thường".
    </>
  ),
  LOGIC: (
    <>
      *Nếu giá và thông tin về kho hàng là chính xác nhưng cảnh báo vẫn được đưa
      ra, vui lòng thử kiểm tra logic 1. *Nếu bạn đang ở trên một trang web cấm
      truy cập liên tục và muốn thêm thời gian chờ vào khoảng thời gian kiểm
      tra, vui lòng thử kiểm tra logic 2 (chờ).
    </>
  ),
  RATIO: <>(0,01 đến 1,0)</>,
  IdEbayApplication: (
    <>*Vui lòng nhập ID ứng dụng của tài khoản nhà phát triển eBay của bạn.</>
  ),
  IdEbayDevelop: (
    <>*Vui lòng nhập Dev ID của tài khoản nhà phát triển eBay của bạn.</>
  ),
  codeEbay: (
    <>*Vui lòng nhập Cert ID của tài khoản nhà phát triển eBay của bạn.</>
  ),
};

export const optionStatus = [
  {
    value: "1",
    label: "Là một phạm trù mà các điều kiện không thể đạt được.",
  },
];

export const optionEcommerce = [
  {
    label: "eBay.com",
    value: "1",
  },
  {
    label: "Động cơ eBay",
    value: "2",
  },
];

export const optionHtml = [
  {
    label: "Không có",
    value: "0",
  },
  {
    label: "Mẫu HTML 1",
    value: "1",
  },
  {
    label: "Mẫu HTML 2",
    value: "2",
  },
  {
    label: "Mẫu HTML 3",
    value: "3",
  },
  {
    label: "Mẫu HTML 4",
    value: "4",
  },
  {
    label: "Mẫu HTML 5",
    value: "5",
  },
];

export const endDow = [
  {
    value: "1",
    label: "Có hiệu lực",
  },
  {
    value: "0",
    label: "Không hợp lệ",
  },
];

export const commercialPlatform = [
  {
    value: "netsea",
    label: "netsea",
  },
  {
    value: "surugaya",
    label: "surugaya",
  },
];

export const categoryProductSurugara = [
  {
    value: "3",
    label: "Movies/Television",
  },
  {
    value: "4",
    label: "Music",
  },
  {
    value: "5",
    label: "Toy/Hobby",
  },
  {
    value: "10",
    label: "Goods/Accessories",
  },
  {
    value: "2",
    label: "Video/Game",
  },
  {
    value: "6",
    label: "PC",
  },
  {
    value: "8",
    label: "Electric appliances",
  },
  {
    value: "7",
    label: "Book",
  },
  {
    value: "11",
    label: "Doujin",
  },
];

export const categoryProductNetsea = [
  {
    value: "1",
    label: "Trang phục nữa",
  },
  {
    value: "11",
    label: "Trang phục nam",
  },
  {
    value: "4",
    label: "Hàng thời trang",
  },
  {
    value: "2",
    label: "Nhu cầu hàng ngày",
  },
  {
    value: "12",
    label: "Sở thích thể thao",
  },
  {
    value: "3",
    label: "Làm đẹp/Sức khoẻ",
  },
  {
    value: "7",
    label: "Thiết bị gia dụng máy tính, thiết bị AV",
  },
  {
    value: "5",
    label: "Nội thất và đồ nội thất",
  },
  {
    value: "6",
    label: "Cửa hàng cung cấp vật tư văn phòng phẩm",
  },
  {
    value: "8",
    label: "Thực phẩm/Đồ uống",
  },
];

export const optionOnOff = [
  {
    value: "on",
    label: "On",
  },
  {
    value: "off",
    label: "Off",
  },
];

export const mode = [
  {
    value: "normal",
    label: "Chế độ bình thường",
  },
  {
    value: "tracking",
    label: "Chế độ theo dõi",
  },
];

export const logic = [
  {
    value: "normal",
    label: "Kiểm tra logic 2 (bình thường)",
  },
  {
    value: "await",
    label: "Kiểm tra logic 2 (chờ)",
  },
  {
    value: "logic1",
    label: "Kiểm tra logic 1",
  },
  {
    value: "Nessie",
    label: "Nessie",
  },
  {
    value: "speed",
    label: "Giao hàng siêu tốc",
  },
  {
    value: "inchiokunet",
    label: "Inchiokunet",
  },
  {
    value: "mirai",
    label: "Mirai DOnya",
  },
];

export const typeFile = [
  {
    value: "ratio",
    label: "Phân cách bằng dấu phẩy",
  },
  {
    value: "tab",
    label: "Phân cách bằng tab",
  },
];

export const autoLink = [
  {
    value: "no",
    label:
      'Không có (Nếu "BẬT/TẮT" và "Số lượng" không được bao gồm, hãy chọn "Không có")',
  },
  {
    value: "yes",
    label: "Có thể là",
  },
];

export const typeUpload = [
  {
    value: "full",
    label:
      "Tải lên tất cả các mục (Xóa tất cả các mục trong cơ sở dữ liệu và đăng ký lại từ mục đầu tiên trong CSV)",
  },
  {
    value: "additional",
    label:
      "Tải lên bổ sung (Giữ nguyên các đăng ký hiện tại và thêm các đăng ký mới từ mục đầu tiên trong CSV)",
  },
];

export const notificationEmail = [
  {
    value: "full",
    label: "Thông báo tất cả",
  },
  {
    value: "change",
    label: "Chỉ khi có thay đổi",
  },
];
export const duplicateUrl = [
  {
    value: "valid",
    label: "Có hiệu lực",
  },
  {
    value: "disabled",
    label: "Đã tắt",
  },
];

export const monitor = [
  {
    value: "server",
    label: "Giám sát máy chủ",
  },
  {
    value: "client",
    label: "Giám sát máy khách",
  },
];
