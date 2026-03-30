import { SectionIntro } from "./SectionIntro";

export function ExperienceSection({ featuredRole, trajectory }) {
  return (
    <section className="section-shell" id="experience">
      <SectionIntro
        label="Experience"
        title="Real work, real systems, real signals."
        description="The strongest part of the public profile is the Amazon Alexa internship: LLM-backed navigation, Flask services, AWS integration, and a measurable retention lift."
      />

      <div className="experience-layout">
        <article className="featured-role card">
          <div className="card-topline">
            <span>{featuredRole.company}</span>
            <span>{featuredRole.period}</span>
          </div>
          <h3>{featuredRole.role}</h3>
          <p className="role-focus">{featuredRole.focus}</p>
          <p>{featuredRole.summary}</p>

          <ul className="detail-list">
            {featuredRole.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="chip-list">
            {featuredRole.stack.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </article>

        <aside className="trajectory card">
          <div className="card-topline">
            <span>Trajectory</span>
            <span>2022 - 2024</span>
          </div>

          <div className="trajectory-list">
            {trajectory.map((item) => (
              <article key={`${item.year}-${item.title}`} className="trajectory-item">
                <span className="trajectory-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
