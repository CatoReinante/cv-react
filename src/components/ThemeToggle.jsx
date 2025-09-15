import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const getInitial = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return document.documentElement.getAttribute("data-bs-theme") || "light";
  };

  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={toggle}
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Cambiar a claro" : "Cambiar a oscuro"}
    >
      {theme === "dark" ? " Light" : "Dark"}
    </button>
  );
}
