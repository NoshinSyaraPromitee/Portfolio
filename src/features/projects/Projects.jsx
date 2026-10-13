import "./Projects.css";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import projectsData, { projectCategories } from "../../data/projects";
import { SearchIcon, CloseIcon, GithubIcon } from "../../shared/ui/icons/icons";

const PERSONA_KEY = "persona-category";

function FilterPill({ category, count, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`filter-pill ${isActive ? "active" : ""}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      <span>{category.label}</span>
      <span className="filter-pill-count">{count}</span>
    </button>
  );
}

function ProjectCard({ project }) {
  const cover = project.images && project.images[0];
  const placeholder =
    project.placeholderText || (project.video ? "See video in Youtube" : "Add project image");

  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <div className="project-image">
        {cover ? (
          <img src={cover} alt={project.title} />
        ) : (
          <div className="image-placeholder">
            <span>{placeholder}</span>
          </div>
        )}
      </div>

      <div className="project-body">
        {project.timeline && <span className="project-timeline">{project.timeline}</span>}
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-stack">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <span className="project-github">View details</span>
      </div>
    </Link>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState(() => {
    const saved = sessionStorage.getItem(PERSONA_KEY);
    sessionStorage.removeItem(PERSONA_KEY);
    return saved || "all";
  });
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const base = { all: projectsData.length };
    for (const c of projectCategories) {
      if (c.key !== "all") base[c.key] = projectsData.filter((p) => p.category === c.key).length;
    }
    return base;
  }, []);

  const visibleProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projectsData.filter((p) => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      if (!q) return true;
      return [p.title, p.description, ...p.techStack].join(" ").toLowerCase().includes(q);
    });
  }, [activeCategory, query]);

  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">Projects</h1>
        <div className="page-button">
          <a
            href="https://github.com/NoshinSyaraPromitee"
            target="_blank"
            rel="noreferrer"
            className="github-link-wrap"
          >
            <GithubIcon className="github-link-icon" />
            View GitHub Profile
          </a>
        </div>

        <div className="projects-wrap">
          <div className="projects-toolbar">
            <div className="filter-row">
              {projectCategories.map((c) => (
                <FilterPill
                  key={c.key}
                  category={c}
                  count={counts[c.key]}
                  isActive={activeCategory === c.key}
                  onClick={() => setActiveCategory(c.key)}
                />
              ))}
            </div>

            <div className="search-box">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  <CloseIcon />
                </button>
              )}
            </div>
          </div>

          {visibleProjects.length > 0 ? (
            <div className="project-grid">
              {visibleProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No projects match "{query}".</p>
              <button type="button" onClick={() => setQuery("")}>
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
