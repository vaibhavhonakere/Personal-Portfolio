import { useEffect, useMemo, useRef, useState } from "react";

function parseMetricValue(value) {
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return null;
  }

  const [, rawNumber, suffix] = match;
  const decimals = rawNumber.includes(".") ? rawNumber.split(".")[1].length : 0;

  return {
    target: Number(rawNumber),
    suffix,
    decimals,
  };
}

function AnimatedMetric({ value, start }) {
  const parsed = useMemo(() => parseMetricValue(value), [value]);
  const [displayValue, setDisplayValue] = useState(parsed ? 0 : value);

  useEffect(() => {
    if (!parsed) {
      setDisplayValue(value);
      return undefined;
    }

    if (!start) {
      setDisplayValue(0);
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(parsed.target);
      return undefined;
    }

    let frameId;
    const durationMs = 1100;
    const startTime = performance.now();

    const tick = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = parsed.decimals
        ? Number((parsed.target * eased).toFixed(parsed.decimals))
        : Math.round(parsed.target * eased);

      setDisplayValue(nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [parsed, start, value]);

  if (!parsed) {
    return value;
  }

  return `${displayValue}${parsed.suffix}`;
}

export function HomeStats({ highlights }) {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setHasAnimated(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="home-stats" aria-label="Key highlights">
      <div className="home-stats-grid">
        {highlights.map((item) => (
          <article key={item.label} className="home-stat">
            <strong>
              <AnimatedMetric value={item.value} start={hasAnimated} />
            </strong>
            <h3>{item.label}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
