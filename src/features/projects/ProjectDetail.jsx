import "./ProjectDetail.css";
import { useParams, Link } from "react-router-dom";
import projectsData, { projectCategories } from "../../data/projects";
import Slideshow from "../../shared/ui/Slideshow/Slideshow";
import VideoEmbed from "../../shared/ui/VideoEmbed/VideoEmbed";

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <section className="page">
        <div className="container">
          <h1 className="page-title">Project not found</h1>
          <Link to="/projects" className="back-link">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const category = projectCategories.find((c) => c.key === project.category);

  // Clicking the detail card opens the GitHub repo
  const openRepo = () => {
    if (project.github) window.open(project.github, "_blank", "noopener,noreferrer");
  };
  const onKeyDown = (e) => {
    if (e.target !== e.currentTarget) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openRepo();
    }
  };

  return (
    <section className="page">
      <div className="container">
        <Link to="/projects" className="back-link">
          Back to Projects
        </Link>

        <article
          className={`detail-card ${project.github ? "clickable" : ""}`}
          onClick={openRepo}
          onKeyDown={onKeyDown}
          role={project.github ? "link" : undefined}
          tabIndex={project.github ? 0 : undefined}
          aria-label={project.github ? `Open ${project.title} on GitHub` : undefined}
        >
          <div className="detail-media" onClick={(e) => e.stopPropagation()}>
            <div className="detail-media-stack">
              {project.video && (
                <VideoEmbed
                  id={project.video}
                  title={project.title}
                  vertical={project.videoVertical}
                />
              )}
              {(!project.video || (project.images && project.images.length > 0)) && (
                <Slideshow
                  images={project.images}
                  title={project.title}
                  emptyText={project.placeholderText}
                />
              )}
            </div>
          </div>

          <div className="detail-info">
            <div className="detail-badges">
              {project.timeline && <span className="detail-timeline">{project.timeline}</span>}
              {category && category.key !== "all" && (
                <span className="detail-badge">{category.label}</span>
              )}
            </div>

            <h1 className="page-title">{project.title}</h1>
            {project.role && <p className="detail-role">{project.role}</p>}
            <p className="detail-desc">{project.description}</p>

            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="detail-label">Key features</h2>
                <ul className="detail-features">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <div className="detail-stack">
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <span className={`detail-cta ${project.github ? "" : "disabled"}`}>
              {project.github ? "Github Link" : "Repo coming soon"}
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProjectDetail;
