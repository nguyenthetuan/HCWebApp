import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { resources } from "./resources";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: "v4",
    fallbackLng: "vi",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
