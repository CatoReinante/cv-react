import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <button onClick={toggle} className="btn btn btn-outline-secondary">
      {i18n.language === "es" ? "EN" : "ES"}
    </button>
  );
}
