import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Check, Copy } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import socials, { contactExtras } from "../../data/socials";
import References from "./References";
import "./Contact.css";

// Icon for each contact key (lucide icons accept strokeWidth, react-icons do not)
const icons = {
  email: { Icon: Mail, lucide: true },
  phone: { Icon: Phone, lucide: true },
  whatsapp: { Icon: FaWhatsapp, lucide: false },
  github: { Icon: FaGithub, lucide: false },
  linkedin: { Icon: FaLinkedin, lucide: false },
  location: { Icon: MapPin, lucide: true }
};

// Order of the cards on the page
const order = ["email", "phone", "whatsapp", "github", "linkedin", "location"];
const all = [...socials, ...contactExtras];
const contactLinks = order.map((key) => all.find((item) => item.key === key)).filter(Boolean);

function ContactCard({ item }) {
  const [copied, setCopied] = useState(false);
  const { Icon, lucide } = icons[item.key];
  const value = item.value ?? item.href;
  const isExternal = item.href.startsWith("http");

  function handleCopy(e) {
    e.preventDefault();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <a
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="contact-card"
    >
      <div className="contact-card-left">
        <span className="contact-icon">
          <Icon size={22} {...(lucide ? { strokeWidth: 1.8 } : {})} />
        </span>

        <div className="contact-text">
          <p className="contact-label">{item.label}</p>
          <p className="contact-value">{value}</p>
        </div>
      </div>

      {item.copyable ? (
        <button
          onClick={handleCopy}
          aria-label={`Copy ${item.label}`}
          className={`contact-action${copied ? " copied" : ""}`}
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      ) : (
        <ArrowUpRight size={20} className="contact-action-icon" strokeWidth={1.8} />
      )}
    </a>
  );
}

function Contact() {
  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">Contact</h1>

        <div className="contact-list">
          {contactLinks.map((item) => (
            <ContactCard key={item.key} item={item} />
          ))}
        </div>

        <References />
      </div>
    </section>
  );
}

export default Contact;
