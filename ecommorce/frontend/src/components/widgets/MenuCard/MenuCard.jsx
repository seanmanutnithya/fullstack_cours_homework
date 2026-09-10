import { Plus } from 'lucide-react';
import ImageSlot from '../../common/ImageSlot';
import Tag from '../../ui/Tag';
import { useHoverTimeline } from '../../../hooks/useHoverTimeline';
import { formatMoney } from '../../../lib/format';
import './MenuCard.css';

/**
 * A single menu grid item (12 of these render on the home page). The
 * mockup describes this component in the brand guideline ("Photo 186px,
 * tag pill top-left, hover cue bar, name / desc / price / add") but its
 * dc.html source wasn't part of the mockup set — it only appears as a
 * `<dc-import name="MenuCard">` reference — so this is built to match
 * that spec and the sibling cards' hover language (lift + cue bar).
 *
 * @param {{id, name, cat, tag, price, desc}} item
 * @param {(item) => void} onAdd  add straight to bag, no size picker
 * @param {(item) => void} onOpen  open the full product modal
 */
export default function MenuCard({ item, onAdd, onOpen }) {
  const rootRef = useHoverTimeline((tl, { q, el }) => {
    tl.to(el, { y: -8, boxShadow: '0 16px 0 -4px rgba(67,38,60,.2)', duration: 0.34 }, 0)
      .to(q('[data-photo]'), { scale: 1.07, duration: 0.5 }, 0)
      .to(q('[data-cue]'), { y: '0%', duration: 0.35, ease: 'back.out(1.7)' }, 0.04);
  });

  return (
    <article ref={rootRef} className="rd-menu-card">
      <button type="button" className="rd-menu-card__photo-btn" onClick={() => onOpen?.(item)}>
        <div data-photo="" className="rd-menu-card__photo">
          <ImageSlot alt={item.name} hint={`Drop a photo of ${item.name}`} />
        </div>
        {item.tag && (
          <Tag tone="yellow" className="rd-menu-card__tag">
            {item.tag}
          </Tag>
        )}
        <div data-cue="" className="rd-menu-card__cue">
          <span>View details</span>
        </div>
      </button>
      <div className="rd-menu-card__body">
        <h3 className="rd-menu-card__name">{item.name}</h3>
        <p className="rd-menu-card__desc">{item.desc}</p>
        <div className="rd-menu-card__footer">
          <span className="rd-menu-card__price">{formatMoney(item.price)}</span>
          <button
            type="button"
            className="rd-menu-card__add"
            aria-label={`Add ${item.name} to bag`}
            onClick={() => onAdd?.(item)}
          >
            <Plus size={18} strokeWidth={3} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
