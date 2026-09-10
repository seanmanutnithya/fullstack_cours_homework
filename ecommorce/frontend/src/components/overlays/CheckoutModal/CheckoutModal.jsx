import { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import IconButton from '../../common/IconButton';
import Button from '../../ui/Button';
import { PillGroup } from '../../ui/PillOption';
import { useShop } from '../../../context/ShopContext';
import { useGsap } from '../../../lib/gsap';
import { METHODS } from '../../../data/menu';
import '../overlay.css';
import './CheckoutModal.css';

const METHOD_OPTIONS = METHODS.map((m) => ({ id: m.id, label: m.label }));
const STEP_LABELS = [
  { key: 'bag', label: 'Bag' },
  { key: 'details', label: 'Details' },
  { key: 'pay', label: 'Payment' },
];
const NEXT_LABEL = { bag: 'Continue →', details: 'Go to payment →', pay: null, done: 'Done' };

/**
 * The 4-step checkout wizard (review bag → delivery details → payment →
 * confirmation), rendered as one modal that swaps its body by step.
 * Converted from the `sc-if value="{{ checkout }}"` block of
 * Rumdoul.dc.html — the original built one flat DCLogic component with
 * `atBag` / `atDetails` / `atPay` / `atDone` booleans; here `stepKey`
 * from ShopContext drives the same four-way switch.
 */
export default function CheckoutModal() {
  const { checkoutOpen, stepKey, stepTitle, step, cart, totals, money, method, setMethod, closeAll, nextStep, prevStep, orderId } =
    useShop();
  const gsap = useGsap();
  const tickRef = useRef(null);

  useEffect(() => {
    if (stepKey === 'done' && tickRef.current) {
      gsap.fromTo(tickRef.current, { scale: 0, rotate: -40 }, { scale: 1, rotate: 0, duration: 0.7, ease: 'back.out(2.2)' });
    }
  }, [gsap, stepKey]);

  if (!checkoutOpen) return null;

  const canGoBack = step > 0 && step < 3;
  const nextLabel = stepKey === 'pay' ? `Pay ${money(totals.total)}` : NEXT_LABEL[stepKey];

  return (
    <div className="rd-overlay-wrap" style={{ zIndex: 120 }}>
      <div className="rd-checkout-modal">
        <div className="rd-checkout-modal__head">
          <span className="rd-checkout-modal__title">{stepTitle}</span>
          <IconButton icon={X} label="Close checkout" onClick={closeAll} />
        </div>

        <div className="rd-checkout-modal__steps">
          {STEP_LABELS.map((s, i) => {
            const done = step >= i;
            return (
              <div key={s.key} className="rd-checkout-modal__step">
                <span className={`rd-checkout-modal__step-bar ${done ? 'rd-checkout-modal__step-bar--done' : ''}`} />
                <span className={`rd-checkout-modal__step-label ${done ? 'rd-checkout-modal__step-label--done' : ''}`}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="rd-checkout-modal__body">
          {stepKey === 'bag' && (
            <div className="rd-checkout-modal__bag">
              {cart.map((line) => (
                <div key={line.key} className="rd-checkout-modal__bag-line">
                  <span>
                    {line.qty}&times; {line.name}
                  </span>
                  <span>{money(line.price * line.qty)}</span>
                </div>
              ))}
              <div className="rd-checkout-modal__bag-total">
                <span>Total</span>
                <span>{money(totals.total)}</span>
              </div>
            </div>
          )}

          {stepKey === 'details' && (
            <div className="rd-checkout-modal__form">
              <label>
                Full name
                <input type="text" placeholder="Sok Dara" />
              </label>
              <label>
                Delivery address
                <input type="text" placeholder="Street 240, Daun Penh" />
              </label>
              <label>
                Phone
                <input type="tel" placeholder="+855 12 345 678" />
              </label>
            </div>
          )}

          {stepKey === 'pay' && (
            <div className="rd-checkout-modal__form">
              <PillGroup options={METHOD_OPTIONS} value={method} onChange={setMethod} />
              <label>
                Card number
                <input type="text" placeholder="4242 4242 4242 4242" />
              </label>
              <div className="rd-checkout-modal__row">
                <label>
                  Expiry
                  <input type="text" placeholder="09 / 29" />
                </label>
                <label>
                  CVC
                  <input type="text" placeholder="123" />
                </label>
              </div>
              <div className="rd-checkout-modal__bag-total">
                <span>Pay now</span>
                <span>{money(totals.total)}</span>
              </div>
            </div>
          )}

          {stepKey === 'done' && (
            <div className="rd-checkout-modal__done">
              <span ref={tickRef} className="rd-checkout-modal__tick">
                <Check size={38} strokeWidth={3} aria-hidden="true" />
              </span>
              <h3>Paid! It&rsquo;s brewing.</h3>
              <p>
                Order <strong>{orderId}</strong> is with the barista. Arriving in about 25 minutes.
              </p>
            </div>
          )}

          <div className="rd-checkout-modal__actions">
            {canGoBack && (
              <Button variant="ghost" size="sm" onClick={prevStep}>
                Back
              </Button>
            )}
            <Button variant="inverse" size="sm" fullWidth onClick={nextStep}>
              {nextLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
