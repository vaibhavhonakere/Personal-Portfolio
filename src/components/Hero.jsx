import { Link } from "react-router-dom";
import headshot from "../assets/vaibhav-headshot-optimized.jpg";

export function Hero({ identity, links }) {
  return (
    <section className="hero-section section-shell">
      <div className="hero-copy">
        <p className="eyebrow">
          {identity.location} / {identity.role}
        </p>

        <h1 className="hero-title">
          <span className="hero-title-lead">{identity.headline.lead}</span>
          <span className="hero-title-accent">{identity.headline.accent}</span>
          <span className="hero-title-trailing">{identity.headline.trailing}</span>
        </h1>

        <p className="hero-summary">{identity.intro}</p>

        <div className="hero-actions">
          <Link className="button button-primary" to={links.primary.href}>
            {links.primary.label}
          </Link>
          <Link className="button button-secondary" to={links.secondary.href}>
            {links.secondary.label}
          </Link>
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

      <aside className="hero-visual">
        <div className="portrait-shell">
          <div className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
          <div className="portrait-orbit portrait-orbit-two" aria-hidden="true" />

          <div className="portrait-frame">
            <img
              className="portrait-image"
              src={headshot}
              alt="Vaibhav Honakere portrait"
            />
          </div>
        </div>
      </aside>
    </section>
  );
}
