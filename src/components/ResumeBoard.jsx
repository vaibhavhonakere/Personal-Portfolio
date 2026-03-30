import { useState } from "react";
import { SkillShowcase } from "./SkillShowcase";

export function ResumeBoard({ resumeBoard }) {
  const [activeTab, setActiveTab] = useState(resumeBoard.tabs[0].id);
  const activeSection = resumeBoard.sections[activeTab];

  return (
    <section className="section-shell resume-board-section">
      <div className="resume-board">
        <aside className="resume-sidebar">
          {resumeBoard.tabs.map((tab) => (
            <button
              key={tab.id}
              className={`resume-tab${activeTab === tab.id ? " is-active" : ""}`}
              type="button"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </aside>

        <div className="resume-content">
          <div className="resume-heading-block">
            <p className="card-topline">
              <span>{activeTab}</span>
            </p>
            <h1 className="resume-heading">{activeSection.title}</h1>
          </div>

          {activeSection.entries ? (
            <div className="resume-entry-list">
              {activeSection.entries.map((entry) => (
                <article key={`${entry.role}-${entry.period}`} className="resume-entry card">
                  <div className="resume-entry-meta">
                    <span>{entry.period}</span>
                    <span>{entry.location}</span>
                  </div>
                  <h2>{entry.role}</h2>
                  <p className="resume-entry-org">
                    <span className="resume-entry-org-mark" aria-hidden="true">
                      •
                    </span>
                    <span>{entry.org}</span>
                    <span className="resume-entry-org-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </p>
                  {entry.bullets?.length ? (
                    <ul className="detail-list">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          ) : null}

          {activeSection.groups ? (
            <div className="resume-group-list">
              {activeSection.groups.map((group) => (
                <article key={group.label} className="resume-group card">
                  <p className="card-topline">
                    <span>{group.label}</span>
                  </p>
                  <div className="chip-list">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          {activeSection.skillGroups ? (
            <SkillShowcase
              title={activeSection.title}
              intro={activeSection.intro}
              skillGroups={activeSection.skillGroups}
            />
          ) : null}

          {activeSection.paragraphs ? (
            <div className="resume-copy-list">
              {activeSection.paragraphs.map((paragraph) => (
                <article key={paragraph} className="resume-copy card">
                  <p>{paragraph}</p>
                </article>
              ))}
            </div>
          ) : null}

          {activeSection.intro ? (
            <div className="resume-about">
              <p className="resume-about-intro">{activeSection.intro}</p>

              {activeSection.facts?.length ? (
                <div className="resume-fact-list">
                  {activeSection.facts.map((fact) => (
                    <div key={fact.label} className="resume-fact-row">
                      <span className="resume-fact-label">{fact.label}</span>
                      <span className="resume-fact-value">{fact.value}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
