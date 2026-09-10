import { Star } from 'lucide-react';
import ImageSlot from '../../common/ImageSlot';
import { REVIEWS } from '../../../data/menu';
import './ReviewsSection.css';

/**
 * Customer review cards. Converted from the `#reviews` section of
 * Rumdoul.dc.html.
 */
export default function ReviewsSection() {
  return (
    <section id="reviews" className="rd-reviews">
      <div className="rd-reviews__inner">
        <div className="rd-reviews__head">
          <h2 className="rd-reviews__title">Regulars say it better than we can</h2>
          <span className="rd-reviews__rating">
            <Star size={14} strokeWidth={2.5} fill="currentColor" aria-hidden="true" /> 4.9 average
          </span>
        </div>

        <div className="rd-reviews__grid">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rd-reviews__card" style={{ background: r.bg }}>
              <span className="rd-reviews__stars">{r.stars}</span>
              <blockquote className="rd-reviews__quote">{r.quote}</blockquote>
              <figcaption className="rd-reviews__author">
                <span className="rd-reviews__avatar">
                  <ImageSlot shape="circle" hint={r.name} />
                </span>
                <span className="rd-reviews__author-text">
                  <span className="rd-reviews__name">{r.name}</span>
                  <span className="rd-reviews__role">{r.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
