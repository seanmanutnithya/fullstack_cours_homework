import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { CHECKOUT_STEPS, MENU, SIZES } from '../data/menu';
import { formatMoney } from '../lib/format';

const ShopContext = createContext(null);

const STEP_TITLES = { bag: 'Review your bag', details: 'Where to?', pay: 'Pay securely', done: 'Order confirmed' };

/**
 * Central store for the whole shopping flow (cart, product modal,
 * checkout wizard, menu filter, nav drawer, toasts). This replaces the
 * original mockup's single `DCLogic` class component, whose `state` +
 * `renderVals()` held every piece of UI state for the entire page —
 * here it's plain React state plus memoized selectors, shared through
 * context so any section can read/act on the cart without prop-drilling
 * through a dozen layers.
 *
 * @param {number} [freeDeliveryOver]  order subtotal ($) above which delivery is free
 */
export function ShopProvider({ children, freeDeliveryOver = 12 }) {
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState('M');
  const [method, setMethod] = useState('card');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [filter, setFilter] = useState('All');
  const [toast, setToast] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [navOpen, setNavOpen] = useState(false);
  const [bumpTick, setBumpTick] = useState(0);
  const [toastTick, setToastTick] = useState(0);

  // toastTick increments on every flash() call, even if the message text
  // repeats (e.g. adding the same drink twice in a row) — the Toast
  // component watches the tick, not the string, so it re-triggers its
  // show/auto-hide animation every time instead of only on text changes.
  const flash = useCallback((message, { bump = false } = {}) => {
    setToast(message);
    setToastTick((n) => n + 1);
    if (bump) setBumpTick((n) => n + 1);
  }, []);

  const add = useCallback(
    (item, qty = 1, sizeId = 'M') => {
      const key = `${item.id}-${sizeId}`;
      const sz = SIZES.find((s) => s.id === sizeId) || SIZES[1];
      setCart((prev) => {
        const exists = prev.some((l) => l.key === key);
        if (exists) {
          return prev.map((l) => (l.key === key ? { ...l, qty: l.qty + qty } : l));
        }
        return [
          ...prev,
          {
            key,
            id: item.id,
            name: item.name + (sizeId === 'M' ? '' : ` (${sz.label})`),
            slotId: item.slotId || `rd-${item.id}`,
            price: item.price + sz.delta,
            qty,
          },
        ];
      });
      flash(`${item.name} added to your bag`, { bump: true });
    },
    [flash]
  );

  const incLine = useCallback((key) => {
    setCart((prev) => prev.map((l) => (l.key === key ? { ...l, qty: l.qty + 1 } : l)));
  }, []);
  const decLine = useCallback((key) => {
    setCart((prev) => prev.map((l) => (l.key === key ? { ...l, qty: Math.max(1, l.qty - 1) } : l)));
  }, []);
  const removeLine = useCallback((key) => {
    setCart((prev) => prev.filter((l) => l.key !== key));
  }, []);

  const closeAll = useCallback(() => {
    setDrawerOpen(false);
    setProduct(null);
    setCheckoutOpen(false);
  }, []);

  const openCart = useCallback(() => {
    setDrawerOpen(true);
    setProduct(null);
    setCheckoutOpen(false);
  }, []);

  const toggleNav = useCallback(() => setNavOpen((v) => !v), []);
  const closeNav = useCallback(() => setNavOpen(false), []);

  const filterTo = useCallback((categoryFilter) => {
    setFilter(categoryFilter);
    const el = document.getElementById('menu');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const openProduct = useCallback((item) => {
    const full = MENU.find((m) => m.id === item.id) || item;
    setProduct(full);
    setSize('M');
    setDrawerOpen(false);
    setCheckoutOpen(false);
  }, []);

  const addProductOnly = useCallback(() => {
    if (!product) return;
    add(product, 1, size);
    setProduct(null);
    setDrawerOpen(true);
  }, [product, size, add]);

  const addProductAndCheckout = useCallback(() => {
    if (!product) return;
    add(product, 1, size);
    setProduct(null);
    setCheckoutOpen(true);
    setStep(0);
  }, [product, size, add]);

  const addToCart = useCallback((item) => add(item, 1, 'M'), [add]);

  const addSurprise = useCallback(() => {
    [MENU[0], MENU[4], MENU[8], MENU[6]].forEach((m) => add(m, 1, 'M'));
    setDrawerOpen(true);
  }, [add]);

  const startCheckout = useCallback(() => {
    setCart((prev) => {
      if (prev.length > 0) return prev;
      const first = MENU[0];
      const sz = SIZES[1];
      return [{ key: `${first.id}-M`, id: first.id, name: first.name, slotId: first.slotId, price: first.price + sz.delta, qty: 1 }];
    });
    setCheckoutOpen(true);
    setStep(0);
    setDrawerOpen(false);
    setProduct(null);
  }, []);

  const joinClub = useCallback(() => flash('Rumdoul Club — welcome aboard!'), [flash]);

  const subscribe = useCallback(
    (e) => {
      e?.preventDefault();
      setSubscribed(true);
      flash('Free drink unlocked. Check your inbox.');
    },
    [flash]
  );

  const nextStep = useCallback(() => {
    setStep((s) => {
      if (s < 2) return s + 1;
      if (s === 2) {
        setOrderId(`#RD-${Math.floor(1000 + Math.random() * 8999)}`);
        return 3;
      }
      setCheckoutOpen(false);
      setCart([]);
      return 0;
    });
  }, []);

  const prevStep = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);

  const totals = useMemo(() => {
    const sub = cart.reduce((a, l) => a + l.price * l.qty, 0);
    const delivery = sub === 0 ? 0 : sub >= freeDeliveryOver ? 0 : 1.5;
    return { sub, delivery, total: sub + delivery, threshold: freeDeliveryOver };
  }, [cart, freeDeliveryOver]);

  const cartCount = useMemo(() => cart.reduce((a, l) => a + l.qty, 0), [cart]);

  const anyOverlayOpen = drawerOpen || !!product || checkoutOpen;
  const stepKey = CHECKOUT_STEPS[step];

  const value = useMemo(
    () => ({
      cart,
      cartCount,
      cartEmpty: cart.length === 0,
      totals,
      money: formatMoney,
      drawerOpen,
      product,
      size,
      setSize,
      method,
      setMethod,
      checkoutOpen,
      step,
      stepKey,
      stepTitle: STEP_TITLES[stepKey],
      filter,
      toast,
      subscribed,
      orderId,
      navOpen,
      bumpTick,
      toastTick,
      anyOverlayOpen,
      add,
      incLine,
      decLine,
      removeLine,
      openCart,
      closeAll,
      toggleNav,
      closeNav,
      filterTo,
      openProduct,
      addProductOnly,
      addProductAndCheckout,
      addToCart,
      addSurprise,
      startCheckout,
      joinClub,
      subscribe,
      nextStep,
      prevStep,
      flash,
    }),
    [
      cart,
      cartCount,
      totals,
      drawerOpen,
      product,
      size,
      method,
      checkoutOpen,
      step,
      stepKey,
      filter,
      toast,
      subscribed,
      orderId,
      navOpen,
      bumpTick,
      toastTick,
      anyOverlayOpen,
      add,
      incLine,
      decLine,
      removeLine,
      openCart,
      closeAll,
      toggleNav,
      closeNav,
      filterTo,
      openProduct,
      addProductOnly,
      addProductAndCheckout,
      addToCart,
      addSurprise,
      startCheckout,
      joinClub,
      subscribe,
      nextStep,
      prevStep,
      flash,
    ]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used within a ShopProvider');
  return ctx;
}
