import './SpecCard.css';

/**
 * A bordered white (or tinted) tile with a title and a line of body
 * copy. The brand guideline repeats this exact shape for "We are" /
 * "We are not", logo do's/don'ts, breakpoints, motion principles and
 * the component-library cards — one component instead of six
 * near-identical `<div>` blocks.
 *
 * @param {string} [bg]  CSS color/token for the tile background
 */
export default function SpecCard({ title, children, bg = 'var(--rd-white)', className = '' }) {
  return (
    <div className={`rd-spec-card ${className}`} style={{ background: bg }}>
      {title && <h3 className="rd-spec-card__title">{title}</h3>}
      <p className="rd-spec-card__body">{children}</p>
    </div>
  );
}
