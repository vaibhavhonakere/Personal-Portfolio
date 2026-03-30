import { SectionIntro } from "./SectionIntro";

export function StrengthsSection({ strengths }) {
  return (
    <section className="section-shell" id="strengths">
      <SectionIntro
        label="Strengths"
        title="Why recruiters should keep reading."
        description="The site is tuned to emphasize credible strengths rather than generic self-description."
      />

      <div className="strength-grid">
        {strengths.map((item) => (
          <article key={item.title} className="strength-card card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
