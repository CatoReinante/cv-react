import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LangSwitch";

export default function Navbar() {
  const { t } = useTranslation("common");

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
      <div className="container-fluid mx-5">
        <a className="navbar-brand" href="/JoaquinReinante#hero">
          JR
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/JoaquinReinante" className="nav-link">
                {t("nav.myStory")}
              </a>
            </li>

            <li className="nav-item">
              <a href="/JoaquinReinante/career" className="nav-link">
                {t("nav.career")}
              </a>
            </li>

            <li className="nav-item">
              <a href="/JoaquinReinante/education" className="nav-link">
                {t("nav.studies")}
              </a>
            </li>
            <li className="nav-item">
              <a href="/JoaquinReinante/games" className="nav-link">
                {t("nav.games")}
              </a>
            </li>
          </ul>

          <div className="ms-auto gap-4 d-flex">
            <ThemeToggle />

            <LanguageSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
