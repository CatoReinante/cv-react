import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
      <div className="container-fluid mx-5">
        <a className="navbar-brand" href="/JoaquinReinante#hero">
          MiCV
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
                My Story
              </a>
            </li>

            <li className="nav-item">
              <a href="/JoaquinReinante/career" className="nav-link">
                Career
              </a>
            </li>

            <li className="nav-item">
              <a href="/JoaquinReinante/education" className="nav-link">
                Studies
              </a>
            </li>
            <li className="nav-item">
              <a href="/JoaquinReinante/games" className="nav-link">
                Games
              </a>
            </li>
          </ul>

          <div className="ms-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
