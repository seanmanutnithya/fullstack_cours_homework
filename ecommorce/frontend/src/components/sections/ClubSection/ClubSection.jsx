import Button from '../../ui/Button';
import { useShop } from '../../../context/ShopContext';
import { PERKS } from '../../../data/menu';
import './ClubSection.css';

/**
 * Dark "Rumdoul Club" membership pitch: perk stat cards plus a join CTA.
 * Converted from the `#club` section of Rumdoul.dc.html.
 */
export default function ClubSection() {
  const { joinClub } = useShop();

  return (
    <section id="club" className="rd-club">
      <div className="rd-club__glow" aria-hidden="true" />
      <div className="rd-club__inner">
        <div className="rd-club__copy">
          <span className="rd-club__eyebrow">Rumdoul Club &middot; $9 / month</span>
          <h2 className="rd-club__title">One subscription, a whole month of caffeine</h2>
          <p className="rd-club__desc">
            Members skip the queue, pay members-only prices and get a free pastry every Friday. Cancel any time, no
            hard feelings.
          </p>
          <div className="rd-club__ctas">
            <Button variant="primary" onClick={joinClub}>
              Join the club
            </Button>
            <Button as="a" href="#menu" variant="outline-light">
              Browse first
            </Button>
          </div>
        </div>

        <div className="rd-club__perks">
          {PERKS.map((perk) => (
            <div key={perk.title} className="rd-club__perk">
              <span className="rd-club__perk-stat">{perk.stat}</span>
              <span className="rd-club__perk-title">{perk.title}</span>
              <span className="rd-club__perk-desc">{perk.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
