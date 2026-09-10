import { ArrowRight } from 'lucide-react';
import ImageSlot from '../../common/ImageSlot';
import { useHoverTimeline } from '../../../hooks/useHoverTimeline';
import './CategoryCard.css';

/**
 * Horizontal browse card used in the "Browse first" category grid.
 * Converted from CategoryCard.dc.html — same hover choreography (card
 * lifts and turns yellow, photo tilts, arrow nudges right), now built
 * on the shared `useHoverTimeline` hook instead of hand-rolled
 * mouseenter/mouseleave listeners.
 *
 * @param {{id:string, title:string, desc:string, slotId:string}} item
 * @param {(item) => void} onSelect
 */
export default function CategoryCard({ item, onSelect }) {
  const rootRef = useHoverTimeline((tl, { q, el }) => {
    tl.to(el, { y: -7, rotate: 0.8, backgroundColor: 'var(--rd-yellow-soft)', duration: 0.34 }, 0)
      .to(q('[data-photo]'), { scale: 1.09, rotate: -3, duration: 0.5 }, 0)
      .to(q('[data-arrow]'), { x: 6, duration: 0.35 }, 0);
  });

  return (
    <article
      ref={rootRef}
      className="rd-category-card"
      onClick={() => onSelect?.(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect?.(item)}
    >
      <div data-photo="" className="rd-category-card__photo">
        <ImageSlot alt={item.title} hint={item.title} />
      </div>
      <div className="rd-category-card__body">
        <h3 className="rd-category-card__title">{item.title}</h3>
        <p className="rd-category-card__desc">{item.desc}</p>
        <span className="rd-category-card__link">
          Browse <ArrowRight data-arrow="" size={14} strokeWidth={2.5} aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
