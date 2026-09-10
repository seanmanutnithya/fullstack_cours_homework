import { useId, useMemo, useRef } from 'react';
import { useZigzagBandAnimation } from './useZigzagBandAnimation';
import './ZigzagBand.css';

const PATH_D = 'M -60 148 C 140 28, 330 24, 486 104 S 800 208, 954 118 S 1180 24, 1266 70';

/**
 * Full-bleed wavy ribbon banner with brand copy marqueeing along the
 * path, drawing itself in as it scrolls into view. Converted from
 * ZigzagBand.dc.html — the original built the `<text>`/`<textPath>`
 * imperatively on every mount; here it's declarative JSX with a stable
 * id from `useId`, and the draw + marquee tweens live in
 * `useZigzagBandAnimation`.
 *
 * @param {string} text  brand copy repeated around the marquee
 * @param {number} [speed]  seconds per full marquee loop
 */
export default function ZigzagBand({ text = 'Rumdoul · brewed in Phnom Penh · Khmer vibe only', speed = 34 }) {
  const rootRef = useRef(null);
  const textElRef = useRef(null);
  const textPathRef = useRef(null);
  const pathId = useId();

  const marqueeText = useMemo(() => {
    const one = `${text} ✦ `.toUpperCase();
    return one.repeat(5);
  }, [text]);

  useZigzagBandAnimation(rootRef, textElRef, textPathRef, { speed });

  return (
    <div ref={rootRef} className="rd-zigzag-band" aria-hidden="true">
      <svg viewBox="0 0 1200 210" preserveAspectRatio="none" className="rd-zigzag-band__svg">
        <defs>
          <path id={pathId} fill="none" d={PATH_D} />
        </defs>
        <path data-ink="" className="rd-zigzag-band__path rd-zigzag-band__path--ink" pathLength="1" d={PATH_D} />
        <path data-fill="" className="rd-zigzag-band__path rd-zigzag-band__path--fill" pathLength="1" d={PATH_D} />
        <text ref={textElRef} fill="var(--rd-ink)" dominantBaseline="middle" className="rd-zigzag-band__text">
          <textPath ref={textPathRef} href={`#${pathId}`} startOffset="0%">
            {marqueeText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
