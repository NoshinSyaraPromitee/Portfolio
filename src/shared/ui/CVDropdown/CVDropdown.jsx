import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./CVDropdown.css";
import { cvFiles } from "../../../data/cv";

function CVDropdown({ variant = "hero" }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`cv-dropdown cv-dropdown-${variant}`} ref={wrapRef}>
      <button
        type="button"
        className="cv-dropdown-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>Download CV</span>
        <FaChevronDown className={`cv-caret ${open ? "open" : ""}`} />
      </button>

      {open && (
        <div className="cv-dropdown-menu">
          {cvFiles.map((option) => (
            <a
              key={option.file}
              href={encodeURI(option.file)}
              download
              className="cv-dropdown-item"
              onClick={() => setOpen(false)}
            >
              {option.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default CVDropdown;
