import { useState, useEffect, useRef } from "react";
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
  { to: "/certificates", label: "Certificates" }
];

const more = [
  { to: "/ideas", label: "Ideas" },
  { to: "/blog", label: "Blog" },
  { to: "/designer", label: "Designer" },
  { to: "/shop", label: "Entrepreneur / Shop" }
];

function Navbar({ darkMode, onToggleTheme }) {
  const [menu, setMenu] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const close = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousedown", close);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", close);
    };
  }, []);

  const shut = () => {
    setMenu(false);
    setMoreOpen(false);
  };

  return (
    <header className={scrolled ? "nav scrolled" : "nav"}>
      <div className="nav-inner">
        <nav className={menu ? "nav-menu open" : "nav-menu"} aria-label="Primary">
          {main.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className="nav-link" onClick={shut}>
              {l.label}
            </NavLink>
          ))}

          <div className="nav-more" ref={moreRef}>
            <button
              type="button"
              className="nav-link nav-morebtn"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((v) => !v)}
            >
              More <span className={moreOpen ? "nav-caret up" : "nav-caret"}>&#9662;</span>
            </button>
            <div className={moreOpen ? "nav-drop show" : "nav-drop"}>
              {more.map((l) => (
                <NavLink key={l.to} to={l.to} className="nav-drop-link" onClick={shut}>
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/contact" className="nav-cta" onClick={shut}>
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
