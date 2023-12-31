import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: ["en", "pl", "de"],
    fallbacks: {
      "en-US": "en",
      "en-UK": "en",
      "pl-PL": "pl",
      "de-DE": "de",
    },
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "b", "i"],
    },
  });

export default i18n;
