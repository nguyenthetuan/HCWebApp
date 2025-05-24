import MyLink from "@/components/common/MyLink";
import MyTypography from "@/components/common/MyTypography";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
export default function MoreInfor() {
  const { t } = useTranslation();
  return (
    <MyTypography variant="body2" className={styles.container}>
      <b>{t("restrictedSitesTitle")}</b>
      {t("restrictedSitesContent")}
      <MyLink component="button" underline="always" color="primary">
        {t("automaticLinkStatus")}
      </MyLink>
      {t("savedListingData")}
    </MyTypography>
  );
}
