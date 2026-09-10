/**
 * Static content for the Rumdoul menu, lifted verbatim from the
 * Rumdoul.dc.html mockup's inline `MENU` / `SPOTLIGHTS` / ... arrays.
 * Pulling it out of component code means the same data can later be
 * swapped for an API response without touching any component.
 */

export const MENU = [
  { id: 'm1', name: 'Kafe Toek Doh Ko', cat: 'Coffee', tag: 'Bestseller', price: 3.2, desc: 'The classic: dark Mondulkiri roast poured over ice and sweet condensed milk.', notes: ['Iced', 'Condensed milk', 'Strong'] },
  { id: 'm2', name: 'Rumdoul Latte', cat: 'Coffee', tag: 'Signature', price: 4.5, desc: 'Espresso, steamed milk and a whisper of rumdoul-flower syrup. Floral, not sweet.', notes: ['Floral', 'Hot or iced', 'House syrup'] },
  { id: 'm3', name: 'Palm Sugar Cold Brew', cat: 'Coffee', tag: '18h steep', price: 4.2, desc: 'Steeped overnight, finished with Kampong Speu palm sugar. Zero bitterness.', notes: ['Cold brew', 'Low acid', 'Vegan'] },
  { id: 'm4', name: 'Kampot Pepper Mocha', cat: 'Coffee', tag: 'Bold', price: 4.8, desc: 'Dark chocolate, espresso and a crack of Kampot black pepper on the foam.', notes: ['Spicy finish', 'Cocoa', 'Hot'] },
  { id: 'm5', name: 'Pandan Matcha Ice', cat: 'Tea', tag: 'New', price: 4.6, desc: 'Ceremonial matcha shaken with fresh pandan milk over crushed ice.', notes: ['Caffeine light', 'Pandan', 'Iced'] },
  { id: 'm6', name: 'Lemongrass Ginger Tea', cat: 'Tea', tag: 'Caffeine free', price: 3.4, desc: 'Whole lemongrass and young ginger, steeped 8 minutes with wild honey.', notes: ['Herbal', 'Honey', 'Hot'] },
  { id: 'm7', name: 'Mango Sticky Rice Frappe', cat: 'Frappe', tag: 'Crowd pleaser', price: 5.2, desc: 'Blended mango, coconut cream and a scoop of warm sticky rice at the bottom.', notes: ['Blended', 'Dessert', 'Coconut'] },
  { id: 'm8', name: 'Coconut Espresso Tonic', cat: 'Frappe', tag: 'Refresher', price: 4.9, desc: 'Double shot over coconut water tonic. Fizzy, bright, dangerously drinkable.', notes: ['Sparkling', 'Vegan', 'Iced'] },
  { id: 'm9', name: 'Num Kong Donut', cat: 'Pastry', tag: 'Baked 6am', price: 2.6, desc: 'The street-side ring, fried light and glazed in caramelised palm sugar.', notes: ['Warm', 'Palm sugar', 'Sharing'] },
  { id: 'm10', name: 'Banh Chao Croissant', cat: 'Pastry', tag: 'Savoury', price: 3.8, desc: 'Turmeric-laminated croissant filled with pork, bean sprout and herbs.', notes: ['Savoury', 'Herbs', 'Warm'] },
  { id: 'm11', name: 'Nom Ansom Slice', cat: 'Pastry', tag: 'Homestyle', price: 3.1, desc: 'Banana sticky-rice cake, steamed in banana leaf and griddled to order.', notes: ['Gluten free', 'Banana', 'Steamed'] },
  { id: 'm12', name: 'Kralan Bamboo Bar', cat: 'Pastry', tag: 'Grab & go', price: 2.9, desc: 'Coconut sticky rice and black bean, roasted the traditional way in bamboo.', notes: ['Vegan', 'Portable', 'Roasted'] },
].map((m) => ({ ...m, slotId: `rd-${m.id}` }));

export const SPOTLIGHTS = [
  { id: 'm1', n: '01', kind: 'Top drink', name: 'Kafe Toek Doh Ko', desc: 'Sold every 90 seconds since 2019. Mondulkiri beans, ice, condensed milk, nothing else.', price: 3.2, bg: 'var(--rd-violet-soft)' },
  { id: 'm9', n: '02', kind: 'Top food', name: 'Num Kong Donut', desc: 'Fried at six, glazed in palm sugar, gone by eleven. Best eaten standing up.', price: 2.6, bg: 'var(--rd-coral-soft)' },
  { id: 'm7', n: '03', kind: 'Top drink', name: 'Mango Sticky Rice Frappe', desc: 'Dessert that survived the blender. Real mango, coconut cream, warm rice at the base.', price: 5.2, bg: 'var(--rd-pink-soft)' },
  { id: 'm10', n: '04', kind: 'Top food', name: 'Banh Chao Croissant', desc: 'Turmeric lamination, pork and herbs inside. Our pastry chef will not explain the recipe.', price: 3.8, bg: 'var(--rd-yellow)' },
];

export const CATEGORIES = [
  { id: 'c1', title: 'Morning rush', desc: 'Order at 7, sipping by 7:25. Straight to the office.', filter: 'Coffee' },
  { id: 'c2', title: 'Study & chill', desc: 'Big cups, slow tables, plugs at every seat.', filter: 'Tea' },
  { id: 'c3', title: 'Khmer sweets', desc: 'Num kong, nom ansom, kralan — baked daily.', filter: 'Pastry' },
  { id: 'c4', title: 'Party boxes', desc: 'Twelve drinks, one box, one very happy team.', filter: 'Frappe' },
];

export const PERKS = [
  { stat: '-20%', title: 'Members-only prices', desc: 'On every drink, every day.' },
  { stat: '4x', title: 'Free pastry Fridays', desc: 'One sweet on the house, weekly.' },
  { stat: '0s', title: 'Skip the queue', desc: 'Your order jumps to the front.' },
  { stat: '2', title: 'Guest passes', desc: 'Bring a friend, twice a month.' },
];

export const REVIEWS = [
  { name: 'Chanthou N.', role: 'Designer, BKK1', stars: '★★★★★', quote: 'The palm sugar cold brew ruined every other iced coffee in this city for me. Delivery is always early.', bg: 'var(--rd-pink-soft)' },
  { name: 'Marc D.', role: 'Regular since 2021', stars: '★★★★★', quote: 'Ordered a party box for twelve people at 9pm. It arrived at 9:22, still warm, perfectly labelled.', bg: 'var(--rd-yellow-soft)' },
  { name: 'Sreymom K.', role: 'Student, RUPP', stars: '★★★★★', quote: 'I come for the num kong and stay four hours. Nobody rushes you. The wifi actually works.', bg: 'var(--rd-violet-soft)' },
];

export const SHOPS = [
  { name: 'Daun Penh', address: '#42, Street 240, Phnom Penh', hours: '6:30 – 21:00', note: 'Flagship roastery', hint: 'Daun Penh shopfront' },
  { name: 'BKK1', address: '#118, Street 51, Boeung Keng Kang', hours: '7:00 – 22:00', note: 'Late-night seats', hint: 'BKK1 interior' },
  { name: 'Toul Kork', address: '#7, Street 315, Toul Kork', hours: '6:30 – 20:00', note: 'Drive-through', hint: 'Toul Kork counter' },
];

export const GRAM = [
  { hint: 'Latte art' },
  { hint: 'Num kong tray' },
  { hint: 'Barista at work' },
  { hint: 'Shopfront' },
  { hint: 'Cold brew pour' },
  { hint: 'Party box' },
];

export const SIZES = [
  { id: 'S', label: 'Small', delta: -0.5 },
  { id: 'M', label: 'Regular', delta: 0 },
  { id: 'L', label: 'Large', delta: 0.8 },
];

export const METHODS = [
  { id: 'aba', label: 'ABA Pay' },
  { id: 'card', label: 'Card' },
  { id: 'wing', label: 'Wing' },
];

export const CATEGORY_FILTERS = ['All', 'Coffee', 'Tea', 'Frappe', 'Pastry'];

export const CHECKOUT_STEPS = ['bag', 'details', 'pay', 'done'];

export const NAV_LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#spotlight', label: 'Top picks' },
  { href: '#club', label: 'Club' },
  { href: '#shops', label: 'Shops' },
  { href: '#reviews', label: 'Reviews' },
];

export const FOOTER_SHOP_LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#spotlight', label: 'Top picks' },
  { href: '#club', label: 'Rumdoul Club' },
  { href: '#shops', label: 'Store locator' },
];

export const FOOTER_HELP_LINKS = [
  { href: '#top', label: 'Delivery & payment' },
  { href: '#top', label: 'Allergens' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#top', label: 'Careers' },
];
