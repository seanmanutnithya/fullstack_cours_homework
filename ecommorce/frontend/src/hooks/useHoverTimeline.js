import { useEffect, useRef } from 'react';
import { useGsap } from '../lib/gsap';

/**
 * Every hover-reactive card in the Rumdoul mockups (CategoryCard,
 * SpotlightCard, MenuCard) repeats the same recipe: build one paused
 * gsap timeline on mount, play it forward on mouseenter, reverse it on
 * mouseleave, kill it on unmount. This hook is that recipe, written
 * once, so each card only has to describe what its timeline animates.
 *
 * @param {(timeline: gsap.core.Timeline, helpers: { q: (sel: string) => Element[], el: Element }) => void} build
 *   Called once with a paused timeline, a `q` selector scoped to the
 *   root element (gsap.utils.selector) for descendants, and `el` itself
 *   for tweening the root.
 * @param {any[]} deps  Extra dependencies that should rebuild the timeline.
 * @returns {React.RefObject} attach to the hoverable root element.
 */
export function useHoverTimeline(build, deps = []) {
  const gsap = useGsap();
  const rootRef = useRef(null);
  const buildRef = useRef(build);
  buildRef.current = build;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;

    const q = gsap.utils.selector(el);
    const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
    buildRef.current(tl, { q, el });

    const play = () => tl.play();
    const reverse = () => tl.reverse();
    el.addEventListener('mouseenter', play);
    el.addEventListener('mouseleave', reverse);

    return () => {
      el.removeEventListener('mouseenter', play);
      el.removeEventListener('mouseleave', reverse);
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gsap, ...deps]);

  return rootRef;
}
