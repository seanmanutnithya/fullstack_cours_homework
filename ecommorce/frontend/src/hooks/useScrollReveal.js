import { useEffect } from 'react';
import { useGsap } from '../lib/gsap';
import { EASE } from '../theme/motion';

/**
 * Fades + slides an element up into place as it enters the viewport.
 * Mirrors the `setupReveals()` pattern used for the hero headline and
 * every section heading in the original mockup, but scoped to a single
 * ref instead of a page-wide querySelectorAll pass — each section owns
 * its own reveal instead of one god-component wiring the whole page.
 *
 * Content is correct and visible with zero animation frames: gsap.from
 * with `immediateRender: false` on scroll-triggered reveals only hides
 * the element once the ticker actually runs.
 *
 * @param {React.RefObject} ref
 * @param {{ y?: number, duration?: number, delay?: number, scrollTrigger?: boolean|object }} options
 */
export function useScrollReveal(ref, options = {}) {
  const gsap = useGsap();

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const {
      y: fromY = 30,
      duration: dur = 0.7,
      delay = 0,
      scrollTrigger = true,
    } = options;

    const tween = gsap.from(el, {
      y: fromY,
      opacity: 0,
      duration: dur,
      delay,
      ease: EASE.out,
      immediateRender: scrollTrigger ? false : undefined,
      scrollTrigger: scrollTrigger
        ? { trigger: el, start: 'top 90%', ...(scrollTrigger === true ? {} : scrollTrigger) }
        : undefined,
    });

    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gsap]);
}
