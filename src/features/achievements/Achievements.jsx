import "./Achievements.css";
import achievements from "../../data/achievements";
import { ImageIcon, ExternalLinkIcon } from "../../shared/ui/icons/icons";

// data may give a single URL or an array of URLs
const firstImage = (image) => (Array.isArray(image) ? image[0] : image);

function AchievementCard({ item }) {
  const src = firstImage(item.image);
  const sizeClass = `achievement-card size-${item.size || "square"}`;

  const content = (
    <>
      <div className="achievement-image">
        {src ? (
          <img src={src} alt={item.title} />
        ) : (
          <div className="achievement-placeholder">
            <ImageIcon />
          </div>
        )}
      </div>

      <div className="achievement-overlay">
        <h3>{item.title}</h3>
        <p>{item.caption}</p>
        {item.link && (
          <span className="achievement-link-hint">
            <ExternalLinkIcon />
            View
          </span>
        )}
      </div>
    </>
  );

  return item.link ? (
    <a className={sizeClass} href={item.link} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <div className={`${sizeClass} no-link`}>{content}</div>
  );
}

function Achievements() {
  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">Achievements</h1>
        <div className="achievements-gallery">
          {achievements.map((item) => (
            <AchievementCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
