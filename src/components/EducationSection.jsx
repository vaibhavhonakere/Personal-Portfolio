import { SectionIntro } from "./SectionIntro";

export function EducationSection({ education }) {
  return (
    <section className="section-shell" id="education">
      <SectionIntro
        label="Education"
        title="Academic grounding with repeat honors."
        description="The education section stays concise and evidence-based while still reinforcing discipline and consistency."
      />

      <div className="education-layout">
        <article className="education-card card">
          <div className="card-topline">
            <span>{education.school}</span>
            <span>{education.period}</span>
          </div>
          <h3>{education.degree}</h3>

          <div className="honors-list">
            {education.honors.map((item) => (
              <span key={item} className="honor-chip">
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="tooling-card card">
          <div className="card-topline">
            <span>Public Tooling Footprint</span>
            <span>From internships + projects</span>
          </div>

          <div className="chip-list">
            {education.tools.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
