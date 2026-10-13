import "./Education.css";
import { education } from "../../data/education";

function Marker({ entry }) {
  if (entry.marker === "progress") {
    return (
      <div className="edu-marker in-progress">
        <span className="pulse-ring"></span>
        <span className="marker-dot"></span>
      </div>
    );
  }

  return (
    <div className="edu-marker">
      <div className="medal">
        <div className="medal-ribbon-tail left"></div>
        <div className="medal-ribbon-tail right"></div>
        <div className="medal-face">
          <span>{entry.medal}</span>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">Education</h1>
        <div className="education-timeline">
          <div className="timeline-line"></div>

          {education.map((entry) => (
            <div className="edu-entry" key={entry.id}>
              <Marker entry={entry} />
              <div className="edu-card">
                <div className="edu-top">
                  <span className="edu-year">{entry.years}</span>
                  <span className={`edu-tag ${entry.tag.type}`}>{entry.tag.label}</span>
                </div>
                <h2>{entry.degree}</h2>
                <p className="edu-institute">{entry.institute}</p>
                <p className="edu-meta">{entry.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
