import { useRef } from 'react';
import SpotlightCard from '../../widgets/SpotlightCard';
import ZigzagSpine from '../../widgets/ZigzagSpine';
import StickerBadge from '../../widgets/StickerBadge';
import { useShop } from '../../../context/ShopContext';
import { useSpotlightStack } from './useSpotlightStack';
import { SPOTLIGHTS } from '../../../data/menu';
import './SpotlightSection.css';

/**
 * "Top picks" section: four spotlight cards that scrub out of a pinned
 * deck into their grid layout. Converted from the `#spotlight` /
 * `data-stack-section` block of Rumdoul.dc.html.
 *
 * @param {'fan'|'grid'} [stackMode]  exposed so a future settings panel
 *   could offer the plain-grid fallback as a user preference, mirroring
 *   the mockup's own `cardStackMode` prop.
 */
export default function SpotlightSection({ stackMode = 'fan' }) {
  const { openProduct } = useShop();
  const sectionRef = useRef(null);
  const wrapRef = useRef(null);
  const hintRef = useRef(null);

  useSpotlightStack(sectionRef, wrapRef, hintRef, stackMode);

  return (
    <section id="spotlight" ref={sectionRef} className="rd-spotlight-section">
      <div className="rd-spotlight-section__spine" aria-hidden="true">
        <ZigzagSpine />
      </div>
      <div className="rd-spotlight-section__sticker" aria-hidden="true">
        <StickerBadge ring="top picks · this week" center="TOP 4" bg="var(--rd-pink-soft)" duration={34} />
      </div>

      <div className="rd-spotlight-section__inner">
        <div className="rd-spotlight-section__intro">
          <span className="rd-spotlight-section__eyebrow">Why everyone keeps coming back</span>
          <h2 className="rd-spotlight-section__title">Four things we&rsquo;re a bit obsessed with</h2>
          <p className="rd-spotlight-section__desc">
            Our top drink and top food of the moment &mdash; hover any card to order it on the spot.
          </p>
        </div>

        <div ref={wrapRef} className="rd-spotlight-section__stack">
          {SPOTLIGHTS.map((item) => (
            <div data-stack-card="" key={item.id + item.n} className="rd-spotlight-section__stack-card">
              <SpotlightCard item={item} onOrder={openProduct} />
            </div>
          ))}
        </div>

        <p ref={hintRef} className="rd-spotlight-section__hint">
          Keep scrolling &darr; the deck fans out
        </p>
      </div>
    </section>
  );
}
