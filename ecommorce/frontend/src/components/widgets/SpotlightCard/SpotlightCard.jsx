import { ArrowRight } from 'lucide-react';
import ImageSlot from '../../common/ImageSlot';
import { useHoverTimeline } from '../../../hooks/useHoverTimeline';
import { formatMoney } from '../../../lib/format';
import './SpotlightCard.css';

/**
 * The pinned "top picks" hero card. Converted from SpotlightCard.dc.html:
 * on hover the whole card lifts and scales, the photo tilts, the arrow
 * rotates into a "go" pointer, a diagonal sheen sweeps across, and an
 * ink order-cue bar slides up from below the fold — five tweens on one
 * shared timeline, still built with `useHoverTimeline`.
 *
 * @param {{n:string, kind:string, name:string, desc:string, price:number, bg?:string}} item
 * @param {(item) => void} onOrder
 */
export default function SpotlightCard({ item, onOrder }) {
  const rootRef = useHoverTimeline((tl, { q, el }) => {
    tl.to(el, { scale: 1.045, y: -10, boxShadow: '0 30px 54px -18px rgba(67,38,60,.5)', duration: 0.38 }, 0)
      .to(q('[data-photo]'), { scale: 1.05, rotate: -1.4, duration: 0.5 }, 0)
      .to(q('[data-arrow]'), { rotate: -45, scale: 1.12, duration: 0.45, ease: 'back.out(2)' }, 0)
      .to(q('[data-cue]'), { y: '0%', duration: 0.38, ease: 'back.out(1.6)' }, 0.05)
      .fromTo(
        q('[data-sheen]'),
        { xPercent: 0, opacity: 0 },
        { xPercent: 460, opacity: 1, duration: 0.9, ease: 'power2.inOut' },
        0
      );
  });

  return (
    <article
      ref={rootRef}
      className="rd-spotlight-card"
      style={{ background: item.bg || 'var(--rd-violet-soft)' }}
      onClick={() => onOrder?.(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOrder?.(item)}
    >
      <div data-sheen="" className="rd-spotlight-card__sheen" />
      <div className="rd-spotlight-card__top">
        <span className="rd-spotlight-card__index">{item.n}</span>
        <span className="rd-spotlight-card__kind">{item.kind}</span>
      </div>
      <div data-photo="" className="rd-spotlight-card__photo">
        <ImageSlot alt={item.name} hint={`Drop a photo of ${item.name}`} />
      </div>
      <h3 className="rd-spotlight-card__name">{item.name}</h3>
      <p className="rd-spotlight-card__desc">{item.desc}</p>
      <div className="rd-spotlight-card__footer">
        <div className="rd-spotlight-card__price-wrap">
          <span className="rd-spotlight-card__price-label">From</span>
          <span className="rd-spotlight-card__price">{formatMoney(item.price)}</span>
        </div>
        <span data-arrow="" className="rd-spotlight-card__arrow">
          <ArrowRight size={19} strokeWidth={2.5} aria-hidden="true" />
        </span>
      </div>
      <div data-cue="" className="rd-spotlight-card__cue">
        <span className="rd-spotlight-card__cue-dot" />
        <span>Click to order &middot; pay in 2 taps</span>
      </div>
    </article>
  );
}
