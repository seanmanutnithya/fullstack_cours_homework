import { useEffect } from 'react';
import { useGsap } from '../../../lib/gsap';
import { SCRUB } from '../../../theme/motion';

/**
 * Draws the band's ink/fill strokes as it crosses the viewport, fades in
 * the ring text at the midpoint of that draw, then marquees the text
 * forever along the path. Two separate gsap tweens (one scroll-scrubbed,
 * one infinite) scoped together with gsap.context so both are cleaned
 * up on unmount — same shape as `useZigzagSpineAnimation`.
 */
export function useZigzagBandAnimation(rootRef, textRef, textPathRef, { speed = 34 } = {}) {
  const gsap = useGsap();

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: 'top 96%', end: 'bottom 52%', scrub: SCRUB },
      });

      tl.fromTo(
        el.querySelectorAll('[data-ink], [data-fill]'),
        { strokeDasharray: 1, strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 1, ease: 'none', stagger: 0.05, immediateRender: false },
        0
      );

      if (textRef.current) {
        tl.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'none', immediateRender: false }, 0.5);
      }

      if (textPathRef.current) {
        gsap.to(textPathRef.current, {
          attr: { startOffset: '-38%' },
          duration: speed,
          ease: 'none',
          repeat: -1,
        });
      }
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gsap, speed]);
}
