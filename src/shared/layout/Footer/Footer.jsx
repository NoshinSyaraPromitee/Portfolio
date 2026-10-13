import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import socials from "../../../data/socials";
import "./Footer.css";

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  kaggle: SiKaggle,
  email: FaEnvelope,
  whatsapp: FaWhatsapp
};

function Footer() {
  return (
    <footer className="site-footer">
      <div className="ft-inner">
        <div className="ft-contact">
          <p className="ft-head">Contact</p>
          <div className="ft-socials">
            {socials.map((s) => {
              const Icon = icons[s.key];
              return (
                <a
                  key={s.key}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="ft-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top &uarr;
        </button>
      </div>
    </footer>
  );
}

export default Footer;