import { useId, useMemo } from 'react';
import './StickerBadge.css';

/**
 * Rotating circular stamp with text riding the rim (e.g. "6AM" /
 * "fresh daily", "TOP 4" / "top picks · this week"). Converted from
 * StickerBadge.dc.html, which built the `<textPath>` ring imperatively
 * via `document.createElementNS` on every mount/update; here it's
 * plain declarative JSX, and the spin is a pure CSS animation (no gsap
 * needed since it never starts/stops) using a unique id from `useId`
 * instead of `Math.random()` for the path reference.
 *
 * @param {string} ring  repeating rim text, e.g. "fresh daily"
 * @param {string} center  short label in the middle, e.g. "6AM"
 * @param {string} [bg]
 * @param {number} [duration]  full-rotation seconds
 */
export default function StickerBadge({ ring = 'fresh daily', center = '2026', bg = 'var(--rd-yellow)', duration = 26 }) {
  const pathId = useId();
  const ringText = useMemo(() => {
    const one = `${ring} · `.toUpperCase();
    return one.repeat(3);
  }, [ring]);

  return (
    <div className="rd-sticker-badge">
      <svg
        viewBox="0 0 120 120"
        className="rd-sticker-badge__svg"
        style={{ animationDuration: `${duration}s` }}
        aria-hidden="true"
      >
        <defs>
          <path id={pathId} fill="none" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
        </defs>
        <circle cx="60" cy="60" r="57" fill={bg} stroke="var(--rd-ink)" strokeWidth="3" />
        <circle cx="60" cy="60" r="34" fill="none" stroke="var(--rd-ink)" strokeWidth="1.6" strokeDasharray="3 5" opacity="0.55" />
        <text fill="var(--rd-ink)" className="rd-sticker-badge__ring-text">
          <textPath href={`#${pathId}`} startOffset="0%">
            {ringText}
          </textPath>
        </text>
      </svg>
      <div className="rd-sticker-badge__center">
        <span>{center}</span>
      </div>
    </div>
  );
}
