import MyLink from "@/components/common/MyLink";
import MySearchInput from "@/components/common/MySearchInput";
import MyTypography from "@/components/common/MyTypography";
import { Box, Link } from "@mui/material";
import Language from "../Language";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeaderProductPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.leftHeader}>
        <Box className={styles.version}>
          <MyTypography fontSize={14} className={styles.txtVersion}>
            {t("label_standard_version")}
          </MyTypography>
        </Box>
        <Box className={styles.link}>
          <MyTypography className={styles.nameUser} fontSize={14}>
            {t("link_inventory_management_list")}
          </MyTypography>
          <MyTypography className={styles.nameUser} fontSize={14}>
            {t("link_register_new")}
          </MyTypography>
        </Box>
        <Box className={styles.search}>
          <MySearchInput />
        </Box>
      </Box>
      <Box className={styles.rightHeader}>
        <MyTypography fontSize={14} className={styles.nameUser}>
          {t("label_username")} Tokio Oyama
        </MyTypography>
        <MyLink onClick={logout} fontSize={14}>
          <MyTypography className={styles.nameUser}>
            {t("link_logout")}
          </MyTypography>
        </MyLink>
        <Box className={styles.language}>
          <Language className={styles.selectLanguage} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderProductPage;
