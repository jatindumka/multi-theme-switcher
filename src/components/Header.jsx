import { useState } from "react";
import ThemeDropdown from "./ThemeDropdown";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">MultiThemeApp</div>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <ThemeDropdown />
      </nav>
    </header>
  );
}
