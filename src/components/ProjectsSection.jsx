import { useState } from "react";

export function ProjectsSection({ projects }) {
  const [activeProject, setActiveProject] = useState(-1);

  return (
    <section className="section-shell projects-page-section" id="projects">
      <div className="projects-page-intro">
        <p className="card-topline">
          <span>Projects</span>
        </p>
        <h1 className="projects-page-title">Projects that show technical range.</h1>
        <p className="projects-page-description">
          A dedicated project page for product work, systems thinking, and AI-assisted builds.
          Click a project card to drop open the full writeup and stack.
        </p>
      </div>

      <div className="project-accordion">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className={`project-accordion-item${activeProject === index ? " is-active" : ""}`}
          >
            <button
              className="project-accordion-trigger"
              type="button"
              aria-expanded={activeProject === index}
              aria-controls={`project-panel-${index}`}
              onClick={() => setActiveProject(activeProject === index ? -1 : index)}
            >
              <div className="project-trigger-rail">
                <span className="project-badge" aria-hidden="true">
                  {project.icon}
                </span>
                <span className="project-list-number">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="project-trigger-copy">
                <h2>{project.name}</h2>
                <p className="project-association">{project.association}</p>
              </div>

              <span className="project-toggle" aria-hidden="true">
                {activeProject === index ? "−" : "+"}
              </span>
            </button>

            <div
              id={`project-panel-${index}`}
              className={`project-accordion-panel${activeProject === index ? " is-open" : ""}`}
            >
              <div className="project-accordion-inner">
                <div className="project-list-body">
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-description">{project.description}</p>

                  {project.tech?.length ? (
                    <div className="chip-list project-chip-list">
                      {project.tech.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {project.links?.length ? (
                    <div className="link-row project-link-row">
                      {project.links.map((item) => (
                        item.href ? (
                          <a
                            key={`${project.name}-${item.label}`}
                            className="text-link"
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <span
                            key={`${project.name}-${item.label}`}
                            className="text-link text-link-muted"
                          >
                            {item.label}
                          </span>
                        )
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
