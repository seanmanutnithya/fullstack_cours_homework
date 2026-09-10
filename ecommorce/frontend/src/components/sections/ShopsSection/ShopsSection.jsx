import ImageSlot from '../../common/ImageSlot';
import Tag from '../../ui/Tag';
import { SHOPS } from '../../../data/menu';
import './ShopsSection.css';

/**
 * Store locator cards. Converted from the `#shops` section of
 * Rumdoul.dc.html.
 */
export default function ShopsSection() {
  return (
    <section id="shops" className="rd-shops">
      <div className="rd-shops__inner">
        <div className="rd-shops__head">
          <span className="rd-shops__eyebrow">Come sit with us</span>
          <h2 className="rd-shops__title">Three shops, one vibe</h2>
        </div>

        <div className="rd-shops__grid">
          {SHOPS.map((shop) => (
            <article key={shop.name} className="rd-shops__card">
              <div className="rd-shops__photo">
                <ImageSlot hint={shop.hint} />
              </div>
              <div className="rd-shops__body">
                <h3 className="rd-shops__name">{shop.name}</h3>
                <p className="rd-shops__address">{shop.address}</p>
                <div className="rd-shops__tags">
                  <Tag tone="yellow">{shop.hours}</Tag>
                  <Tag tone="cream">{shop.note}</Tag>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
