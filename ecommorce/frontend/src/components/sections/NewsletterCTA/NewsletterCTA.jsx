import { useShop } from '../../../context/ShopContext';
import Button from '../../ui/Button';
import './NewsletterCTA.css';

/**
 * Yellow email-capture banner. Converted from the newsletter section of
 * Rumdoul.dc.html.
 */
export default function NewsletterCTA() {
  const { subscribe, subscribed } = useShop();

  return (
    <section className="rd-newsletter">
      <div className="rd-newsletter__card">
        <div className="rd-newsletter__copy">
          <h2 className="rd-newsletter__title">Get one free drink a month</h2>
          <p className="rd-newsletter__desc">
            New drops, secret menu items and a birthday coffee on us. One email a month, never more.
          </p>
        </div>
        <form className="rd-newsletter__form" onSubmit={subscribe}>
          <input type="email" required placeholder="you@example.com" className="rd-newsletter__input" />
          <Button type="submit" variant="inverse">
            {subscribed ? 'You’re in ✓' : 'Sign me up'}
          </Button>
        </form>
      </div>
    </section>
  );
}
