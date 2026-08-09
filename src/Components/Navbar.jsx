import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      {/* Navbar Inner */}
      <div className="navbar-inner">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span>YOUR</span>
          <strong>AGENCY</strong>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          <Link to="/about">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/contact">next</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>

        <Link
          to="/projects"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </Link>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>

      </div>

    </header>
  );
}