import { SectionIntro } from "./SectionIntro";

export function ProjectsSection({ projects }) {
  return (
    <section className="section-shell" id="projects">
      <SectionIntro
        label="Projects"
        title="Hackathon builds that show range."
        description="Both public project pages point to a useful combination of product framing, React delivery, and system integration across AI and hardware-aware workflows."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card card">
            <div className="card-topline">
              <span>{project.name}</span>
              <span>{project.event}</span>
            </div>
            <p className="project-summary">{project.summary}</p>

            <ul className="detail-list">
              {project.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="chip-list">
              {project.tech.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>

            <div className="link-row">
              {project.links.map((item) => (
                <a
                  key={item.href}
                  className="text-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
