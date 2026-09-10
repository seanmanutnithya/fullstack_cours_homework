import { useEffect } from 'react';
import { useGsap } from '../../../lib/gsap';
import { SCRUB } from '../../../theme/motion';

/**
 * Draws the spine's ink/fill strokes and drops the bean down the path as
 * the element scrolls through view. Scoped with gsap.context so
 * everything it creates (timeline + ScrollTrigger) is cleaned up
 * together on unmount.
 */
export function useZigzagSpineAnimation(rootRef, { start = 'top 90%', end = 'bottom 62%', scrub = SCRUB } = {}) {
  const gsap = useGsap();

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start, end, scrub },
      });

      tl.fromTo(
        el.querySelectorAll('[data-ink], [data-fill]'),
        { strokeDasharray: 1, strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 1, ease: 'none', immediateRender: false },
        0
      );

      tl.fromTo(
        el.querySelectorAll('[data-bean]'),
        { top: '0%' },
        { top: '100%', duration: 1, ease: 'none', immediateRender: false },
        0
      );
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gsap, start, end, scrub]);
}
