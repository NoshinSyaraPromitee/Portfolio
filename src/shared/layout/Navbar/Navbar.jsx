import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { cvFiles } from "../../../data/cv";

const main = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/research", label: "Research" },
  { to: "/achievements", label: "Achievements" },
  { to: "/certificates", label: "Certificates" },
  { to: "/ideas", label: "Ideas" },
  { to: "/blog", label: "Blog" },
  { to: "/designer", label: "Designer" },
  { to: "/shop", label: "Shop" }
];

// always visible in the phone navbar; everything else lives in the hamburger menu
const quick = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" }
];
const isQuick = (to) => quick.some((q) => q.to === to);

function Navbar({ darkMode, onToggleTheme }) {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shut = () => setMenu(false);

  return (
    <header className={scrolled ? "nav scrolled" : "nav"}>
      <div className="nav-inner">
        <nav className="nav-quick" aria-label="Quick links">
          {quick.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className="nav-quick-link"
              onClick={shut}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <nav className={menu ? "nav-menu open" : "nav-menu"} aria-label="Primary">
          {main.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={isQuick(l.to) ? "nav-link in-quick" : "nav-link"}
              onClick={shut}
            >
              {l.label}
            </NavLink>
          ))}

          <NavLink to="/contact" className="nav-cta in-quick" onClick={shut}>
            Contact
          </NavLink>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
          >
            {darkMode ? "\u2600" : "\u263E"}
          </button>
          <a className="icon-btn" href={encodeURI(cvFiles[0].file)} download>
            CV
          </a>
          <button
            type="button"
            className="icon-btn nav-burger"
            onClick={() => setMenu((v) => !v)}
            aria-expanded={menu}
            aria-label="Toggle menu"
          >
            {menu ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
