export function SectionIntro({ label, title, description }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
