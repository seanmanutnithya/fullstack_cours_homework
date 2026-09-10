import { useRef } from 'react';
import { useZigzagSpineAnimation } from './useZigzagSpineAnimation';
import './ZigzagSpine.css';

const SPINE_PATH =
  'M70 8 L18 128 L122 268 L18 408 L122 548 L18 688 L122 828 L18 968 L70 1128 L70 1192';

/**
 * Vertical companion to ZigzagBand: a zigzag spine that grows top-to-
 * bottom with scroll progress, with a bead riding its tip. Colors come
 * from the app-wide `--rd-ink` / `--rd-yellow` / `--rd-pink` tokens
 * defined once in src/index.css, so (unlike the first draft of this
 * component) it no longer needs its own theme context — pass `style`
 * to override a token locally if a section ever needs a one-off tint.
 */
export default function ZigzagSpine({ className = '', style, scrollStart, scrollEnd, scrub }) {
  const rootRef = useRef(null);

  useZigzagSpineAnimation(rootRef, {
    start: scrollStart,
    end: scrollEnd,
    scrub,
  });

  return (
    <div ref={rootRef} className={`rd-zigzag-spine ${className}`} style={style}>
      <svg className="rd-zigzag-spine__svg" viewBox="0 0 140 1200" preserveAspectRatio="none">
        <path
          data-ink=""
          className="rd-zigzag-spine__path rd-zigzag-spine__path--ink"
          pathLength="1"
          d={SPINE_PATH}
        />
        <path
          data-fill=""
          className="rd-zigzag-spine__path rd-zigzag-spine__path--fill"
          pathLength="1"
          d={SPINE_PATH}
        />
      </svg>
      <div data-bean="" className="rd-zigzag-spine__bean" />
    </div>
  );
}
