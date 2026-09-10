import { useEffect, useRef } from 'react';
import { useGsap } from '../../lib/gsap';
import { useShop } from '../../context/ShopContext';
import './Toast.css';

/**
 * Bottom-of-screen confirmation pill ("Kafe Toek Doh Ko added to your
 * bag"). Slides up on every `flash()` call and auto-hides after 2.1s,
 * matching the original mockup's toast timing from the brand guideline.
 */
export default function Toast() {
  const gsap = useGsap();
  const { toast, toastTick } = useShop();
  const ref = useRef(null);
  const hideTimer = useRef(null);

  // Establish the resting off-screen position once. gsap then owns the
  // transform for the rest of the component's life, so later tweens
  // that only touch `y` don't clobber this xPercent centering.
  useEffect(() => {
    if (ref.current) gsap.set(ref.current, { xPercent: -50, y: '140%' });
  }, [gsap]);

  useEffect(() => {
    if (toastTick === 0) return undefined;
    const el = ref.current;
    if (!el) return undefined;

    gsap.killTweensOf(el);
    gsap.fromTo(el, { y: '140%' }, { y: '0%', duration: 0.45, ease: 'back.out(1.7)' });

    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      gsap.to(el, { y: '140%', duration: 0.35, ease: 'power2.in' });
    }, 2100);

    return () => clearTimeout(hideTimer.current);
  }, [gsap, toastTick]);

  return (
    <div ref={ref} className="rd-toast" role="status" aria-live="polite">
      <span className="rd-toast__dot" />
      <span className="rd-toast__text">{toast}</span>
    </div>
  );
}
