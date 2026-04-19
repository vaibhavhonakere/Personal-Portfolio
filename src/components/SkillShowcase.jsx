export function SkillShowcase({ title, intro, skillGroups }) {
  return (
    <div className="skill-showcase">
      <div className="skill-showcase-intro">
        <h2 className="skill-showcase-title">{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>

      <div className="skill-category-list">
        {skillGroups.map((group) => (
          <section key={group.label} className="skill-category">
            <h3 className="skill-category-title">{group.label}</h3>
            <div className="skill-tile-grid">
              {group.items.map((item) => (
                <article key={`${group.label}-${item.name}`} className="skill-tile card">
                  <div className="skill-symbol" aria-hidden="true">
                    {item.symbol}
                  </div>
                  <p className="skill-name">{item.name}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
