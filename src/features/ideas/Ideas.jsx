import "./Ideas.css";
import { ideas } from "../../data/ideas";
import VideoEmbed from "../../shared/ui/VideoEmbed/VideoEmbed";
import Slideshow from "../../shared/ui/Slideshow/Slideshow";

function IdeaCard({ idea }) {
  const statusLabel = idea.status ? ideas.statusLabels[idea.status] || idea.status : null;

  return (
    <div
      className={
        idea.video || (idea.images && idea.images.length > 0) ? "idea-card has-video" : "idea-card"
      }
    >
      {(statusLabel || idea.tag) && (
        <div className="idea-badges">
          {statusLabel && (
            <span className={`idea-status status-${idea.status}`}>{statusLabel}</span>
          )}
          {idea.tag && <span className="idea-status idea-tag">{idea.tag}</span>}
        </div>
      )}

      <h3>{idea.title}</h3>
      {idea.event && <p className="idea-event">{idea.event}</p>}

      {idea.image && (
        <a
          className="idea-image-link"
          href={idea.image}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open full ${idea.title} poster`}
        >
          <img
            className="idea-image"
            src={idea.image}
            alt={`${idea.title} poster`}
            loading="lazy"
          />
          <span className="idea-image-hint">Click to view the full poster</span>
        </a>
      )}

      {idea.images && idea.images.length > 0 && (
        <div className="idea-gallery">
          <Slideshow images={idea.images} title={idea.title} />
        </div>
      )}

      <p>{idea.summary}</p>

      {idea.video && (
        <VideoEmbed id={idea.video} title={idea.title} vertical={idea.videoVertical} />
      )}

      {idea.features && idea.features.length > 0 && (
        <>
          <h4 className="idea-subhead">Key features</h4>
          <ul className="idea-list">
            {idea.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </>
      )}

      {idea.team && idea.team.length > 0 && (
        <>
          <h4 className="idea-subhead">Team</h4>
          <ul className="idea-list">
            {idea.team.map((m) => (
              <li key={m.name}>
                <strong>{m.name}</strong> - {m.role}
              </li>
            ))}
          </ul>
        </>
      )}

      {idea.vision && (
        <>
          <h4 className="idea-subhead">Vision</h4>
          <p>{idea.vision}</p>
        </>
      )}

      {idea.github && (
        <a className="idea-link" href={idea.github} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      )}

      <div className="idea-stack">
        {(idea.techStack || []).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

function Ideas() {
  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">{ideas.title}</h1>
        <p className="page-subtitle">{ideas.subtitle}</p>

        <div className="ideas-grid">
          {ideas.items.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ideas;
