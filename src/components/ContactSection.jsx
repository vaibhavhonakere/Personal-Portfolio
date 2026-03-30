export function ContactSection({ contact, links }) {
  return (
    <section className="section-shell contact-section" id="contact">
      <div className="contact-layout">
        <form className="contact-form card">
          <h2>{contact.heading}</h2>
          <p className="contact-copy">{contact.summary}</p>

          <div className="contact-form-grid">
            <input className="contact-input" type="text" placeholder="First Name" />
            <input className="contact-input" type="text" placeholder="Last Name" />
            <input className="contact-input" type="email" placeholder="Email Address" />
            <input className="contact-input" type="tel" placeholder="Phone Number" />
          </div>

          <textarea
            className="contact-input contact-textarea"
            rows="7"
            placeholder="Type your message here"
          />

          <button className="button button-primary contact-submit" type="submit">
            Send Message
          </button>
        </form>

        <div className="contact-info-stack">
          {contact.channels.map((item) => (
            <article key={item.label} className="contact-info">
              <div className="contact-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div>
                <p className="contact-info-label">{item.label}</p>
                <a
                  className="contact-info-link"
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {item.value}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
