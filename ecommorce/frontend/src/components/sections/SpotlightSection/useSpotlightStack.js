import { useEffect } from 'react';
import { useGsap, ScrollTrigger } from '../../../lib/gsap';

const ROT = { fan: [-5.5, 3.5, -3, 5.5], grid: [0, 0, 0, 0] };
const BUMP = { fan: [0, -26, 16, -12], grid: [0, 0, 0, 0] };

/**
 * Pins the spotlight section for ~1.1 viewport heights while its four
 * cards scrub from a squared-up deck into their grid positions with
 * alternating rotation — the mockup's signature "card stack -> fan"
 * moment. Ported from the original `setupStack()`, which queried the
 * whole document for its elements; this version is scoped to refs on
 * the owning component, and the desktop/mobile split still goes
 * through `gsap.matchMedia` exactly as before (fan animation at
 * >=760px, a simple staggered fade-up below that — the plain CSS grid
 * layout is always the correct no-JS fallback either way).
 *
 * @param {React.RefObject} sectionRef  the pinned/trigger element
 * @param {React.RefObject} wrapRef  the grid wrapping the four cards
 * @param {React.RefObject} hintRef  "keep scrolling" hint text
 * @param {'fan'|'grid'} mode
 */
export function useSpotlightStack(sectionRef, wrapRef, hintRef, mode = 'fan') {
  const gsap = useGsap();

  useEffect(() => {
    const wrap = wrapRef.current;
    const section = sectionRef.current;
    if (!wrap || !section) return undefined;

    const cards = Array.from(wrap.querySelectorAll('[data-stack-card]'));
    if (cards.length < 4) return undefined;

    const rot = ROT[mode] || ROT.fan;
    const bumps = BUMP[mode] || BUMP.fan;
    const hint = hintRef.current;
    const boxes = [];

    const freeze = () => {
      cards.forEach((c) => gsap.set(c, { clearProps: 'all' }));
      wrap.style.height = '';
      const wr = wrap.getBoundingClientRect();
      boxes.length = 0;
      cards.forEach((c) => {
        const r = c.getBoundingClientRect();
        boxes.push({ x: r.left - wr.left, y: r.top - wr.top, w: r.width, h: r.height });
      });
      wrap.style.height = `${wr.height}px`;
      cards.forEach((c, i) => {
        gsap.set(c, {
          position: 'absolute',
          left: boxes[i].x,
          top: boxes[i].y,
          width: boxes[i].w,
          height: boxes[i].h,
          zIndex: 10 + i,
          rotate: rot[i % 4],
          y: bumps[i % 4],
        });
      });
      return wr;
    };

    const mm = gsap.matchMedia();

    mm.add('(min-width: 760px)', () => {
      const wr = freeze();
      if (wr.height < 120 || !boxes.length) return () => {};

      ScrollTrigger.addEventListener('refreshInit', freeze);
      const deckX = (wr.width - boxes[0].w) / 2;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${Math.round(window.innerHeight * 1.1)}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      cards.forEach((c, i) => {
        tl.from(
          c,
          {
            x: deckX - boxes[i].x + i * 8,
            y: bumps[i % 4] - boxes[i].y + i * 14,
            rotate: (i - 1.5) * 2.6,
            scale: 0.93,
            ease: 'power2.inOut',
            duration: 1,
            immediateRender: false,
          },
          i * 0.09
        );
      });
      if (hint) tl.to(hint, { opacity: 0, duration: 0.4, immediateRender: false }, 0);

      return () => {
        ScrollTrigger.removeEventListener('refreshInit', freeze);
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
        cards.forEach((c) => gsap.set(c, { clearProps: 'all' }));
        wrap.style.height = '';
        if (hint) hint.style.opacity = '';
      };
    });

    mm.add('(max-width: 759px)', () => {
      if (hint) hint.style.display = 'none';
      const tweens = cards.map((c, i) =>
        gsap.from(c, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.05,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: c, start: 'top 93%' },
        })
      );
      return () => {
        tweens.forEach((t) => t.scrollTrigger && t.scrollTrigger.kill());
        if (hint) hint.style.display = '';
      };
    });

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      clearTimeout(refreshTimer);
      mm.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gsap, mode]);
}
