import { Menu as MenuIcon, MapPin, ShoppingBag } from 'lucide-react';
import Logo from '../../common/Logo';
import Button from '../../ui/Button';
import { useShop } from '../../../context/ShopContext';
import { useBumpAnimation } from '../../../hooks/useBumpAnimation';
import { NAV_LINKS } from '../../../data/menu';
import './Header.css';

/**
 * Sticky site header: logo, city pill, desktop nav, phone number,
 * mobile hamburger (toggles the collapsible mobile nav below it) and
 * the bag button with a live item-count badge. Converted from the
 * `<header>` block in Rumdoul.dc.html.
 */
export default function Header() {
  const { cartCount, navOpen, toggleNav, closeNav, openCart, bumpTick } = useShop();
  const badgeRef = useBumpAnimation(bumpTick);

  return (
    <header className="rd-header">
      <div className="rd-header__bar">
        <a href="#top" className="rd-header__brand">
          <Logo size="md" withKhmer />
        </a>

        <span className="rd-header__city">
          <MapPin size={13} strokeWidth={2.5} aria-hidden="true" />
          Phnom Penh
        </span>

        <nav className="rd-header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="rd-header__actions">
          <span className="rd-header__phone">+855 23 900 620</span>

          <button
            type="button"
            className="rd-header__burger"
            onClick={toggleNav}
            aria-label="Toggle menu"
            aria-expanded={navOpen}
          >
            <MenuIcon size={20} strokeWidth={2.5} aria-hidden="true" />
          </button>

          <Button variant="pink" size="sm" onClick={openCart} className="rd-header__cart">
            <ShoppingBag size={16} strokeWidth={2.5} aria-hidden="true" />
            Bag
            <span ref={badgeRef} className="rd-header__cart-count">
              {cartCount}
            </span>
          </Button>
        </div>

        <div className="rd-header__mobile-nav" style={{ maxHeight: navOpen ? '160px' : '0px', opacity: navOpen ? 1 : 0 }}>
          <nav aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={closeNav}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
