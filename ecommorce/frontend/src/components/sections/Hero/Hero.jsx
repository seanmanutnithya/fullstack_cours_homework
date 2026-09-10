import { useRef } from 'react';
import { Star, Timer, Heart } from 'lucide-react';
import ImageSlot from '../../common/ImageSlot';
import Button from '../../ui/Button';
import StickerBadge from '../../widgets/StickerBadge';
import { useShop } from '../../../context/ShopContext';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './Hero.css';

/**
 * The pink landing hero: floating product photos, the headline (drawn
 * with the signature hard-yellow text-shadow, once per page as the
 * brand guideline specifies), two CTAs and a trust-signal row.
 * Converted from the `#top` section of Rumdoul.dc.html.
 */
export default function Hero() {
  const { startCheckout } = useShop();
  const headingRef = useRef(null);
  useScrollReveal(headingRef, { y: 34, duration: 0.9, scrollTrigger: false });

  return (
    <section id="top" className="rd-hero">
      <div className="rd-hero__dots" aria-hidden="true" />

      <div className="rd-hero__float rd-hero__float--left" aria-hidden="true">
        <ImageSlot hint="Iced Khmer coffee — hero left" />
      </div>
      <div className="rd-hero__float rd-hero__float--right" aria-hidden="true">
        <ImageSlot hint="Pastry board — hero right" />
      </div>

      <div className="rd-hero__content">
        <span className="rd-hero__eyebrow">Roasted in Phnom Penh &middot; Delivered hot</span>
        <h1 ref={headingRef} className="rd-hero__title">
          Coffee with a<br />proper Khmer vibe
        </h1>
        <p className="rd-hero__desc">
          Palm-sugar cold brew, pandan matcha and warm num kong straight out of the oven. Order in two taps &mdash;
          we&rsquo;ll have it on your desk before it stops steaming.
        </p>
        <div className="rd-hero__ctas">
          <Button as="a" href="#menu" variant="primary">
            See the menu &rarr;
          </Button>
          <Button variant="inverse" onClick={startCheckout}>
            Order &amp; pay now
          </Button>
        </div>
        <div className="rd-hero__trust">
          <span>
            <Star size={14} strokeWidth={2.5} aria-hidden="true" /> 4.9 &middot; 2,140 reviews
          </span>
          <span>
            <Timer size={14} strokeWidth={2.5} aria-hidden="true" /> 25-min delivery
          </span>
          <span>
            <Heart size={14} strokeWidth={2.5} aria-hidden="true" /> 3 shops in the city
          </span>
        </div>
      </div>

      <div className="rd-hero__sticker" aria-hidden="true">
        <StickerBadge ring="fresh daily · 100% arabica" center="6AM" bg="var(--rd-yellow)" duration={26} />
      </div>
    </section>
  );
}
