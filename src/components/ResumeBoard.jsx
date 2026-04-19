import { useState } from "react";
import { SkillShowcase } from "./SkillShowcase";

export function ResumeBoard({ resumeBoard }) {
  const [activeTab, setActiveTab] = useState(resumeBoard.tabs[0].id);
  const [openEntryByTab, setOpenEntryByTab] = useState({});
  const activeSection = resumeBoard.sections[activeTab];
  const activeEntry = openEntryByTab[activeTab] ?? -1;

  function toggleEntry(index) {
    setOpenEntryByTab((current) => ({
      ...current,
      [activeTab]: current[activeTab] === index ? -1 : index,
    }));
  }

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
            <h1 className="resume-heading">{activeSection.title}</h1>
          </div>

          {activeSection.entries ? (
            <div className="resume-entry-list">
              {activeSection.entries.map((entry, index) => {
                const isOpen = activeEntry === index;

                return (
                  <article
                    key={`${entry.role}-${entry.period}`}
                    className={`resume-entry card${isOpen ? " is-open" : ""}`}
                  >
                    <button
                      className="resume-entry-trigger"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`resume-entry-panel-${activeTab}-${index}`}
                      onClick={() => toggleEntry(index)}
                    >
                      <div className="resume-entry-meta">
                        <span>{entry.period}</span>
                        <span>{entry.location}</span>
                      </div>

                      <div className="resume-entry-header-row">
                        <div className="resume-entry-heading">
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
                        </div>

                        <span className="resume-entry-toggle" aria-hidden="true">
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                    </button>

                    <div
                      id={`resume-entry-panel-${activeTab}-${index}`}
                      className={`resume-entry-panel${isOpen ? " is-open" : ""}`}
                    >
                      <div className="resume-entry-panel-inner">
                        {entry.bullets?.length ? (
                          <div className="resume-entry-detail">
                            <ul className="detail-list">
                              {entry.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
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
