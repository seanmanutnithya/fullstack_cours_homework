import { useEffect, useRef } from 'react';
import CategoryCard from '../../widgets/CategoryCard';
import { useGsap } from '../../../lib/gsap';
import { useShop } from '../../../context/ShopContext';
import { CATEGORIES } from '../../../data/menu';
import './CategoryGrid.css';

/**
 * "Browse first" category strip, just below the hero ribbon. Cards
 * stagger up into place as the grid enters the viewport — the mockup
 * gave each `[data-cat]` card its own ScrollTrigger; here one shared
 * trigger on the grid drives a `stagger` tween across all of them.
 */
export default function CategoryGrid() {
  const gsap = useGsap();
  const gridRef = useRef(null);
  const { filterTo } = useShop();

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return undefined;
    const cards = el.querySelectorAll('[data-cat]');
    const tween = gsap.from(cards, {
      y: 38,
      opacity: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: { trigger: el, start: 'top 94%' },
    });
    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
    };
  }, [gsap]);

  return (
    <section className="rd-category-grid">
      <div ref={gridRef} className="rd-category-grid__grid">
        {CATEGORIES.map((cat) => (
          <div data-cat="" key={cat.id}>
            <CategoryCard item={cat} onSelect={(item) => filterTo(item.filter)} />
          </div>
        ))}
      </div>
    </section>
  );
}
