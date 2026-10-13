import "./Certificates.css";
import { certificates } from "../../data/certificates";
import { ImageIcon } from "../../shared/ui/icons/icons";

function CertificateCard({ cert }) {
  const body = (
    <>
      <div className="certificate-image">
        {cert.image ? (
          <img src={cert.image} alt={cert.title} loading="lazy" />
        ) : (
          <div className="certificate-placeholder">
            <ImageIcon />
          </div>
        )}
      </div>

      <div className="certificate-body">
        <h3>{cert.title}</h3>
        {cert.issuer && <p className="certificate-issuer">{cert.issuer}</p>}
        {cert.date && <p className="certificate-date">{cert.date}</p>}
      </div>
    </>
  );

  const href = cert.link || cert.image;

  return href ? (
    <a className="certificate-card" href={href} target="_blank" rel="noreferrer">
      {body}
    </a>
  ) : (
    <div className="certificate-card no-link">{body}</div>
  );
}

function Certificates() {
  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">{certificates.title}</h1>
        <p className="page-subtitle">{certificates.subtitle}</p>

        {certificates.items.length === 0 ? (
          <div className="page-content">
            <p>{certificates.empty}</p>
          </div>
        ) : (
          <div className="certificates-grid">
            {certificates.items.map((cert) => (
              <CertificateCard key={cert.title} cert={cert} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Certificates;
