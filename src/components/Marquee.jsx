export function Marquee({ items }) {
  const repeatedItems = [...items, ...items];

  return (
    <section className="marquee-shell" aria-label="Areas of focus">
      <div className="marquee-track">
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
