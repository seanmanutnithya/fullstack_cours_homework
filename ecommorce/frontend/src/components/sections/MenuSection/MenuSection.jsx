import { Check } from 'lucide-react';
import MenuCard from '../../widgets/MenuCard';
import Button from '../../ui/Button';
import { PillGroup } from '../../ui/PillOption';
import { useShop } from '../../../context/ShopContext';
import { MENU, CATEGORY_FILTERS } from '../../../data/menu';
import './MenuSection.css';

const FILTER_OPTIONS = CATEGORY_FILTERS.map((f) => ({ id: f, label: f }));

const GOOD_TO_KNOW = [
  'Oat & coconut milk, no extra charge',
  'ABA Pay, Wing, card & cash',
];

/**
 * The full menu: a filter sidebar (category pills + a "surprise me"
 * bundle) next to the item grid. Converted from the `#menu` section of
 * Rumdoul.dc.html.
 */
export default function MenuSection() {
  const { filter, filterTo, addToCart, openProduct, addSurprise, totals } = useShop();
  const visible = filter === 'All' ? MENU : MENU.filter((m) => m.cat === filter);

  return (
    <section id="menu" className="rd-menu-section">
      <div className="rd-menu-section__inner">
        <div className="rd-menu-section__head">
          <div>
            <span className="rd-menu-section__eyebrow">Order online</span>
            <h2 className="rd-menu-section__title">The menu</h2>
          </div>
          <p className="rd-menu-section__desc">
            Twelve regulars, rotated with seasonal specials. Tap a card for the full story, or drop it straight in
            the bag.
          </p>
        </div>

        <div className="rd-menu-section__layout">
          <aside className="rd-menu-section__sidebar">
            <h3 className="rd-menu-section__sidebar-title">Category</h3>
            <PillGroup options={FILTER_OPTIONS} value={filter} onChange={filterTo} />

            <div className="rd-menu-section__divider" />

            <h3 className="rd-menu-section__sidebar-title">Good to know</h3>
            <ul className="rd-menu-section__notes">
              <li>
                <Check size={14} strokeWidth={3} aria-hidden="true" />
                {GOOD_TO_KNOW[0]}
              </li>
              <li>
                <Check size={14} strokeWidth={3} aria-hidden="true" />
                Free delivery over ${totals.threshold}
              </li>
              <li>
                <Check size={14} strokeWidth={3} aria-hidden="true" />
                {GOOD_TO_KNOW[1]}
              </li>
            </ul>

            <div className="rd-menu-section__surprise">
              <p className="rd-menu-section__surprise-title">Can&rsquo;t decide?</p>
              <p className="rd-menu-section__surprise-desc">Let us build a box of four bestsellers.</p>
              <Button variant="pink" size="sm" fullWidth onClick={addSurprise}>
                Surprise me
              </Button>
            </div>
          </aside>

          <div className="rd-menu-section__grid">
            {visible.map((item) => (
              <MenuCard key={item.id} item={item} onAdd={addToCart} onOpen={openProduct} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
