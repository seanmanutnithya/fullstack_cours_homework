import { Link } from 'react-router-dom';
import Logo from '../../common/Logo';
import { FOOTER_SHOP_LINKS, FOOTER_HELP_LINKS } from '../../../data/menu';
import './Footer.css';

/**
 * Site footer: brand blurb, shop/help link columns, designer credit and
 * a legal line. Converted from the `<footer>` block of Rumdoul.dc.html.
 */
export default function Footer() {
  return (
    <footer className="rd-footer">
      <div className="rd-footer__grid">
        <div className="rd-footer__brand-col">
          <Logo size="sm" tone="cream" />
          <p className="rd-footer__blurb">Khmer coffee, Khmer sweets, Khmer vibe. Brewed in Phnom Penh since 2019.</p>
        </div>

        <div className="rd-footer__col">
          <span className="rd-footer__col-title">Shop</span>
          {FOOTER_SHOP_LINKS.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="rd-footer__col">
          <span className="rd-footer__col-title">Help</span>
          {FOOTER_HELP_LINKS.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="rd-footer__col">
          <span className="rd-footer__col-title">Designed by</span>
          <span className="rd-footer__designer">Sean Manutnithya</span>
          <a href="mailto:sean.manutnithya.cs@gmail.com" className="rd-footer__email">
            sean.manutnithya.cs@gmail.com
          </a>
          <span className="rd-footer__stack">UI design &amp; front-end &middot; React, GSAP</span>
          <Link to="/case-study" className="rd-footer__doc-link">
            Read the case study &rarr;
          </Link>
          <Link to="/brand-guideline" className="rd-footer__doc-link">
            View the brand guideline &rarr;
          </Link>
        </div>
      </div>

      <div className="rd-footer__bottom">
        <span>&copy; 2026 Sean Manutnithya. All rights reserved. Rumdoul is a concept brand created for portfolio purposes.</span>
        <a href="mailto:sean.manutnithya.cs@gmail.com" className="rd-footer__hire">
          Hire me &rarr; sean.manutnithya.cs@gmail.com
        </a>
      </div>
    </footer>
  );
}
