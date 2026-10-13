import "./Experience.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import experiencesData, { experienceCategories } from "../../data/experiences";
import Slideshow from "../../shared/ui/Slideshow/Slideshow";
import { SearchIcon, CloseIcon } from "../../shared/ui/icons/icons";

// ============================================
// Category -> card border colour (see .exp-tone-* in Experience.css)
// ============================================

const TONES = {
  internship: "blue",
  event: "blue", // clubs + ambassador roles
  paid: "red", // script evaluator + typing
  workshop: "green"
};

// ============================================
// Sort newest first
// "Present" entries on top, then by end date, then start date.
// Entries with no readable date go last (add a timeline year,
// or sortDate:"2025-09", to place them).
// ============================================

const MONTHS = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11
};
const FAR_FUTURE = 9999 * 12;

function parseTimeline(item) {
  if (item.sortDate) {
    const m = /^(\d{4})-(\d{1,2})$/.exec(item.sortDate);
    if (m) {
      const v = Number(m[1]) * 12 + (Number(m[2]) - 1);
      return { start: v, end: v };
    }
  }

  const text = (item.timeline || "").toLowerCase();
  const points = [];
  const re = /(?:(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+)?(\d{4})/g;
  let match;
  while ((match = re.exec(text)) !== null) {
    const month = match[1] ? MONTHS[match[1]] : 5; // year only -> mid-year
    points.push(Number(match[2]) * 12 + month);
  }

  const isPresent = /present|current|ongoing/.test(text);
  if (points.length === 0 && !isPresent) return null;

  return {
    start: points.length ? Math.min(...points) : 0,
    end: isPresent ? FAR_FUTURE : Math.max(...points)
  };
}

const sortedExperiences = experiencesData
  .map((item, i) => ({ item, i, t: parseTimeline(item) }))
  .sort((a, b) => {
    if (!a.t && !b.t) return a.i - b.i;
    if (!a.t) return 1;
    if (!b.t) return -1;
    return b.t.end - a.t.end || b.t.start - a.t.start || a.i - b.i;
  })
  .map(({ item }) => item);

const getImages = (item) => (Array.isArray(item.image) ? item.image.filter(Boolean) : []);

// ============================================
// Filter Pill
// ============================================

function FilterPill({ category, count, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`exp-pill ${isActive ? "active" : ""}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      <span>{category.label}</span>
      <span className="exp-pill-count">{count}</span>
    </button>
  );
}

// ============================================
// Experience Card
// ============================================

function ExperienceCard({ item, index, onOpen }) {
  const isCurrent = /present/i.test(item.timeline || "");
  const images = getImages(item);
  const canOpen = images.length > 0;
  const tone = TONES[item.category];

  const classes = ["exp-card"];
  if (tone) classes.push("has-tone", `exp-tone-${tone}`);
  if (canOpen) classes.push("clickable");

  const handleKeyDown = (e) => {
    if (e.target !== e.currentTarget) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(item);
    }
  };

  return (
    <article
      className={classes.join(" ")}
      style={{ animationDelay: `${Math.min(index, 8) * 50}ms` }}
      onClick={canOpen ? () => onOpen(item) : undefined}
      onKeyDown={canOpen ? handleKeyDown : undefined}
      role={canOpen ? "button" : undefined}
      tabIndex={canOpen ? 0 : undefined}
      aria-label={canOpen ? `View photos: ${item.title}` : undefined}
    >
      {typeof item.image === "string" && item.image && (
        <div className="exp-avatar">
          <img src={item.image} alt={item.company} />
        </div>
      )}

      <h3 className="exp-title">{item.title}</h3>
      <p className="exp-company">{item.company}</p>

      <div className="exp-meta">
        <span className="exp-date">{item.timeline}</span>
        {isCurrent && <span className="exp-current">Current</span>}
      </div>

      <p className="exp-desc">{item.description}</p>

      {item.link && (
        <a
          className="exp-link"
          href={item.link}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          View link
        </a>
      )}

      {canOpen && <span className="exp-photos-hint">View photos ({images.length})</span>}
    </article>
  );
}

// ============================================
// Photo popup
// ============================================

function ExperienceModal({ item, onClose }) {
  const images = getImages(item);
  const tone = TONES[item.category];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="exp-modal-overlay" onClick={onClose}>
      <div
        className={`exp-modal${tone ? ` has-tone exp-tone-${tone}` : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="exp-modal-close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        <div className="exp-modal-media">
          <Slideshow images={images} title={item.title} />
        </div>

        <div className="exp-modal-body">
          <h3>{item.title}</h3>
          <p className="exp-modal-company">{item.company}</p>
          <span className="exp-modal-timeline">{item.timeline}</span>
          <p className="exp-modal-desc">{item.description}</p>
          {item.link && (
            <a className="exp-modal-link" href={item.link} target="_blank" rel="noreferrer">
              View link
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================
// Main Experience Page
// ============================================

function Experience() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const closeModal = useCallback(() => setSelected(null), []);

  const counts = useMemo(() => {
    const base = { all: experiencesData.length };
    for (const category of experienceCategories) {
      if (category.key === "all") continue;
      base[category.key] = experiencesData.filter((item) => item.category === category.key).length;
    }
    return base;
  }, []);

  const visibleExperiences = useMemo(() => {
    const q = query.trim().toLowerCase();

    return sortedExperiences.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;

      if (!matchesCategory) return false;
      if (!q) return true;

      const haystack = [item.title, item.company, item.description].join(" ").toLowerCase();

      return haystack.includes(q);
    });
  }, [activeCategory, query]);

  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">Experience</h1>

        <div className="exp-wrap">
          <div className="exp-toolbar">
            <div className="exp-filters">
              {experienceCategories.map((category) => (
                <FilterPill
                  key={category.key}
                  category={category}
                  count={counts[category.key]}
                  isActive={activeCategory === category.key}
                  onClick={() => setActiveCategory(category.key)}
                />
              ))}
            </div>

            <div className="exp-search">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search experience or company..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button
                  type="button"
                  className="exp-search-clear"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  <CloseIcon />
                </button>
              )}
            </div>
          </div>

          {visibleExperiences.length > 0 ? (
            <div className="exp-grid">
              {visibleExperiences.map((item, index) => (
                <ExperienceCard key={item.id} item={item} index={index} onOpen={setSelected} />
              ))}
            </div>
          ) : (
            <div className="exp-empty">
              <p>No experience matches "{query}".</p>
              <button type="button" onClick={() => setQuery("")}>
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>

      {selected && <ExperienceModal item={selected} onClose={closeModal} />}
    </section>
  );
}

export default Experience;
