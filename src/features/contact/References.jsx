import { Mail, Phone, UserRound } from "lucide-react";
import { references } from "../../data/references";
import "./References.css";

function References() {
  return (
    <div className="contact-list refs" role="region" aria-labelledby="refs-title">
      <h2 id="refs-title" className="refs-title">References</h2>

      {references.map((r) => (
        <div key={r.email} className="contact-card ref-card">
          <div className="contact-card-left">
            <span className="contact-icon">
              <UserRound size={22} strokeWidth={1.8} />
            </span>

            <div className="contact-text">
              <p className="contact-label">{r.role}</p>
              <p className="contact-value">{r.name}</p>
              <p className="ref-org">{r.org}</p>
            </div>
          </div>

          <div className="ref-links">
            <a href={`tel:${r.phone}`}>
              <Phone size={16} strokeWidth={1.8} />
              {r.phone}
            </a>
            <a href={`mailto:${r.email}`}>
              <Mail size={16} strokeWidth={1.8} />
              {r.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default References;
