import { useEffect, useRef } from 'react';
import { useGsap } from '../lib/gsap';

/**
 * Pops an element (scale up then back with a yoyo) every time `tick`
 * changes. Used for the cart-count badge bump when an item is added —
 * the original mockup did this with a raw `document.querySelector`
 * inside the state class; here it's a ref-scoped hook driven by a
 * counter in ShopContext instead of reaching into the DOM by hand.
 */
export function useBumpAnimation(tick) {
  const gsap = useGsap();
  const ref = useRef(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(el, { scale: 1 }, { scale: 1.45, duration: 0.18, yoyo: true, repeat: 1, ease: 'power2.out' });
  }, [gsap, tick]);

  return ref;
}
