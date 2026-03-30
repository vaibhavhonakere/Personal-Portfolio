export function Hero({ identity, links, highlights }) {
  return (
    <section className="hero-section section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          {identity.location} / {identity.role}
        </p>

        <h1 className="hero-title">
          {identity.headline.lead} <span>{identity.headline.accent}</span>
        </h1>

        <p className="hero-summary">{identity.intro}</p>

        <div className="hero-actions">
          <a className="button button-primary" href={links.primary.href}>
            {links.primary.label}
          </a>
          <a className="button button-secondary" href={links.secondary.href}>
            {links.secondary.label}
          </a>
        </div>

        <div className="social-links">
          {links.socials.map((item) => (
            <a
              key={item.href}
              className="social-link"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <aside className="hero-panel">
        <p className="panel-kicker">Recruiter Snapshot</p>
        <h2>{identity.recruiterNote}</h2>

        <div className="highlight-grid">
          {highlights.map((item) => (
            <article key={item.label} className="highlight-card">
              <strong>{item.value}</strong>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}
