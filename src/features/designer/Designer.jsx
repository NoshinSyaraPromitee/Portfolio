import "./Designer.css";
import { designer } from "../../data/designer";

function Designer() {
  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">{designer.title}</h1>
        <p className="page-subtitle">{designer.subtitle}</p>

        <p className="designer-intro">{designer.intro}</p>

        <div className="designer-tags">
          {designer.skills.map((s) => (
            <span key={s} className="designer-tag">
              {s}
            </span>
          ))}
          {designer.tools.map((t) => (
            <span key={t} className="designer-tag alt">
              {t}
            </span>
          ))}
        </div>

        <div className="designer-grid">
          {designer.works.map((w) => (
            <article key={w.id} className="designer-card">
              <div className="designer-media">
                {w.image ? (
                  <a
                    href={w.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${w.title} full size`}
                  >
                    <img src={w.image} alt={w.title} loading="lazy" />
                  </a>
                ) : (
                  <span>Image coming soon</span>
                )}
              </div>
              <div className="designer-body">
                <span className="designer-cat">{w.category}</span>
                <h3>{w.title}</h3>
                <p>{w.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Designer;
