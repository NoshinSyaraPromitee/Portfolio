import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import "./SocialLinks.css";

const icons = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  kaggle: <SiKaggle />,
  email: <FaEnvelope />,
  whatsapp: <FaWhatsapp />
};

function SocialLinks({ items }) {
  return (
    <div className="social-links">
      {items.map((s) => (
        <a
          key={s.key}
          href={s.href}
          aria-label={s.label}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
        >
          {icons[s.key]}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;