export function PageHero({ eyebrow, title, accent, description, meta }) {
  return (
    <section className="page-hero section-shell">
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">
          {title} <span>{accent}</span>
        </h1>
        <p className="section-description">{description}</p>
      </div>

      <aside className="page-hero-panel card">
        <div className="card-topline">
          <span>Quick Read</span>
          <span>For recruiters</span>
        </div>

        <div className="page-meta-list">
          {meta.map((item) => (
            <article key={item.label} className="page-meta-item">
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}
