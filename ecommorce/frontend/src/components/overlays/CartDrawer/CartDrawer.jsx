import { Coffee, Minus, Plus, X } from 'lucide-react';
import ImageSlot from '../../common/ImageSlot';
import IconButton from '../../common/IconButton';
import Button from '../../ui/Button';
import { useShop } from '../../../context/ShopContext';
import './CartDrawer.css';

/**
 * Slide-in bag drawer: line items with quantity steppers, totals, and a
 * checkout CTA. Converted from the `<aside data-drawer>` block of
 * Rumdoul.dc.html.
 */
export default function CartDrawer() {
  const { cart, cartEmpty, drawerOpen, closeAll, incLine, decLine, removeLine, totals, money, startCheckout } =
    useShop();

  return (
    <aside className={`rd-cart-drawer ${drawerOpen ? 'rd-cart-drawer--open' : ''}`} aria-hidden={!drawerOpen}>
      <div className="rd-cart-drawer__head">
        <span className="rd-cart-drawer__title">Your bag</span>
        <IconButton icon={X} label="Close bag" onClick={closeAll} />
      </div>

      <div className="rd-cart-drawer__body">
        {cartEmpty && (
          <div className="rd-cart-drawer__empty">
            <Coffee size={40} strokeWidth={1.8} aria-hidden="true" />
            <p className="rd-cart-drawer__empty-title">Nothing brewing yet</p>
            <p className="rd-cart-drawer__empty-desc">Add a drink or a sweet and it&rsquo;ll show up right here.</p>
            <Button variant="pink" size="sm" onClick={closeAll}>
              Back to the menu
            </Button>
          </div>
        )}

        {cart.map((line) => (
          <div key={line.key} className="rd-cart-drawer__line">
            <span className="rd-cart-drawer__line-photo">
              <ImageSlot hint="" />
            </span>
            <div className="rd-cart-drawer__line-body">
              <span className="rd-cart-drawer__line-name">{line.name}</span>
              <span className="rd-cart-drawer__line-price">{money(line.price * line.qty)}</span>
              <div className="rd-cart-drawer__stepper">
                <button type="button" onClick={() => decLine(line.key)} aria-label={`Decrease ${line.name}`}>
                  <Minus size={13} strokeWidth={3} aria-hidden="true" />
                </button>
                <span>{line.qty}</span>
                <button
                  type="button"
                  className="rd-cart-drawer__stepper-inc"
                  onClick={() => incLine(line.key)}
                  aria-label={`Increase ${line.name}`}
                >
                  <Plus size={13} strokeWidth={3} aria-hidden="true" />
                </button>
                <button type="button" className="rd-cart-drawer__remove" onClick={() => removeLine(line.key)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rd-cart-drawer__foot">
        <div className="rd-cart-drawer__row">
          <span>Subtotal</span>
          <span>{money(totals.sub)}</span>
        </div>
        <div className="rd-cart-drawer__row">
          <span>Delivery</span>
          <span>{totals.delivery === 0 ? 'Free' : money(totals.delivery)}</span>
        </div>
        <div className="rd-cart-drawer__row rd-cart-drawer__row--total">
          <span>Total</span>
          <span>{money(totals.total)}</span>
        </div>
        <Button variant="pink" fullWidth onClick={startCheckout}>
          Checkout &amp; pay
        </Button>
      </div>
    </aside>
  );
}
