import "./Achievements.css";
import { ArrowUpRight } from "lucide-react";
import achievements from "../../data/achievements";
import { ImageIcon, ExternalLinkIcon } from "../../shared/ui/icons/icons";

// data may give a single URL or an array of URLs
const firstImage = (image) => (Array.isArray(image) ? image[0] : image);

// entries with type: "text" (or no image) get a text card instead of a photo card
const isTextCard = (item) => item.type === "text" || !firstImage(item.image);

const photoItems = achievements.filter((item) => !isTextCard(item));
const textItems = achievements.filter(isTextCard);

// text cards grouped by category, in the order they appear in the data
const groups = textItems.reduce((acc, item) => {
  const key = item.category || "Other";
  (acc[key] ||= []).push(item);
  return acc;
}, {});

// medal colour from the badge text: runner-up / 2nd -> silver, 1st / gold / winner -> gold, 3rd / bronze -> bronze
function tierOf(badge = "") {
  if (/runner|silver|2nd/i.test(badge)) return "silver";
  if (/gold|1st|winner|champion/i.test(badge)) return "gold";
  if (/bronze|3rd/i.test(badge)) return "bronze";
  return "plain";
}

function LinkWrap({ item, className, children }) {
  return item.link ? (
    <a className={className} href={item.link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <div className={`${className} no-link`}>{children}</div>
  );
}

function PhotoCard({ item }) {
  const src = firstImage(item.image);

  return (
    <LinkWrap item={item} className={`achievement-card size-${item.size || "square"}`}>
      <div className="achievement-image">
        {src ? (
          <img src={src} alt={item.title} loading="lazy" />
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
    </LinkWrap>
  );
}

function TextCard({ item }) {
  return (
    <LinkWrap item={item} className={`achievement-text-card tier-${tierOf(item.badge)}`}>
      {item.year && <span className="atc-year">{item.year}</span>}

      {item.badge && <span className="atc-badge">{item.badge}</span>}

      <h3>{item.title}</h3>
      <p>{item.caption}</p>

      {item.link && (
        <span className="atc-link">
          Read more <ArrowUpRight size={14} strokeWidth={1.8} />
        </span>
      )}
    </LinkWrap>
  );
}

function Achievements() {
  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">Achievements</h1>

        <div className="achievements-gallery">
          {photoItems.map((item) => (
            <PhotoCard key={item.id} item={item} />
          ))}
        </div>

        {Object.entries(groups).map(([category, items]) => {
          return (
            <div key={category} className="atc-group">
              <h2 className="atc-group-title">
                {category}
                <span className="atc-group-count">{items.length}</span>
              </h2>
              <div className="achievements-text-grid">
                {items.map((item) => (
                  <TextCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Achievements;