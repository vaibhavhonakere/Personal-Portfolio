export function HomeStats({ highlights }) {
  return (
    <section className="home-stats section-shell" aria-label="Key highlights">
      <div className="home-stats-grid">
        {highlights.map((item) => (
          <article key={item.label} className="home-stat">
            <strong>{item.value}</strong>
            <h3>{item.label}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
