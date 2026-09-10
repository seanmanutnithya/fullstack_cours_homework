import './Logo.css';

// Khmer for "Rumdoul" (the flower the brand is named after) — matches the
// original mockup's numeric character refs &#6042;&#6086;&#6026;&#6076;&#6043;
// (verified codepoint-for-codepoint against those references).
const KHMER_RUMDOUL = 'រំដូល';

const SIZES = {
  sm: { disc: 38, glyph: 22, name: 20, khmer: 11 },
  md: { disc: 46, glyph: 27, name: 24, khmer: 12 },
  lg: { disc: 82, glyph: 48, name: 46, khmer: 16 },
};

/**
 * The Rumdoul mark: a four-petal flower disc plus wordmark. Appears in
 * the header, footer, brand guideline and case study — previously four
 * copies of the same inline SVG, now one component with size/tone props.
 *
 * @param {'sm'|'md'|'lg'} size
 * @param {'ink'|'cream'} tone  wordmark color (cream for dark grounds)
 * @param {boolean} withKhmer  show the Khmer sub-line under the name
 */
export default function Logo({ size = 'sm', tone = 'ink', withKhmer = false, className = '' }) {
  const s = SIZES[size] || SIZES.sm;
  return (
    <span className={`rd-logo rd-logo--${size} ${className}`}>
      <span className="rd-logo__disc" style={{ width: s.disc, height: s.disc }}>
        <svg viewBox="0 0 24 24" style={{ width: s.glyph, height: s.glyph }} aria-hidden="true">
          <g fill="var(--rd-ink)">
            <ellipse cx="12" cy="5.6" rx="2.5" ry="4.4" />
            <ellipse cx="12" cy="18.4" rx="2.5" ry="4.4" />
            <ellipse cx="5.6" cy="12" rx="4.4" ry="2.5" />
            <ellipse cx="18.4" cy="12" rx="4.4" ry="2.5" />
          </g>
          <circle cx="12" cy="12" r="2.6" fill="var(--rd-pink-deep)" />
        </svg>
      </span>
      <span className="rd-logo__text">
        <span
          className={`rd-logo__name rd-logo__name--${tone}`}
          style={{ fontSize: s.name }}
        >
          Rumdoul
        </span>
        {withKhmer && (
          <span className="rd-logo__khmer" style={{ fontSize: s.khmer }}>
            {KHMER_RUMDOUL} &middot; Khmer vibe
          </span>
        )}
      </span>
    </span>
  );
}
