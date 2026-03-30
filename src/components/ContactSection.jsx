import { SectionIntro } from "./SectionIntro";

export function ContactSection({ contact, links }) {
  return (
    <section className="section-shell contact-section" id="contact">
      <SectionIntro
        label="Contact"
        title={contact.heading}
        description={contact.summary}
      />

      <div className="contact-layout">
        <div className="contact-actions card">
          <div className="card-topline">
            <span>Public Links</span>
            <span>Ready now</span>
          </div>

          <div className="link-stack">
            {links.socials.map((item) => (
              <a
                key={item.href}
                className="contact-link"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="contact-actions card">
          <div className="card-topline">
            <span>Before Deploying</span>
            <span>Finish these</span>
          </div>

          <ul className="detail-list">
            {links.pending.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
