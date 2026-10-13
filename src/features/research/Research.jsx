import { research } from "../../data/research";

function Research() {
  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">{research.title}</h1>
        <p className="page-subtitle">{research.subtitle}</p>

        {research.sections.map((section, index) => (
          <div
            key={section.id}
            className="page-content"
            style={index > 0 ? { marginTop: "30px" } : undefined}
          >
            <h2>{section.heading}</h2>

            {section.items.length === 0 ? (
              <p>{section.empty}</p>
            ) : (
              section.items.map((item) => (
                <div key={item.title} style={{ marginTop: "14px" }}>
                  <h3>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  {item.detail && <p>{item.detail}</p>}
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Research;
