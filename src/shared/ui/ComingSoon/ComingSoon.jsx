import "./ComingSoon.css";

function ComingSoon({ title, subtitle }) {
  return (
    <section className="cs-page">
      <div className="cs-inner">
        <h1 className="cs-title">{title}</h1>
        {subtitle && <p className="cs-subtitle">{subtitle}</p>}

        <div className="cs-card">
          <span className="cs-label">Coming Soon</span>
          <p>I haven't finished this page yet, i will do it Inshallah</p>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
