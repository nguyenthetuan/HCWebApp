import MySelectDropdow from "@/components/common/MySelectDropdow";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
const options = [
  { value: "vi", label: "Tiếng Việt" },
  { value: "jp", label: "Japan" },
];

const Language = ({ ...rest }) => {
  const [language, setLanguage] = useState("vi");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    setLanguage(i18n.language);
  }, []);
  const handleChange = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <MySelectDropdow
      id="language-select"
      name="language"
      label={t("title_choose_language")}
      value={language}
      onChange={handleChange}
      options={options}
      helperText={t("title_validate_language")}
      className={styles.container}
    />
  );
};

export default Language;
