import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es/common.json";
import en from "./locales/en/common.json";

const saved = localStorage.getItem("lang");
const fallback = "es";

i18n.use(initReactI18next).init({
  resources: {
    es: { common: es },
    en: { common: en },
  },
  lng: saved || fallback,
  fallbackLng: fallback,
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  localStorage.setItem("lang", lng);
});

export default i18n;
