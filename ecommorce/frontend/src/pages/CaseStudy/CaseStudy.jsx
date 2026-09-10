import Logo from '../../components/common/Logo';
import Tag from '../../components/ui/Tag';
import DocSection from '../../components/docs/DocSection';
import SpecCard from '../../components/docs/SpecCard';
import BrowserFrame from '../../components/docs/BrowserFrame';
import BackToStoreLink from '../../components/docs/BackToStoreLink';
import Hero from '../../components/sections/Hero/Hero';
import SpotlightCard from '../../components/widgets/SpotlightCard';
import MenuCard from '../../components/widgets/MenuCard';
import { PillGroup } from '../../components/ui/PillOption';
import { ShopProvider } from '../../context/ShopContext';
import { SPOTLIGHTS, MENU, CATEGORY_FILTERS } from '../../data/menu';
import { COMPONENTS } from '../../data/brand';
import './CaseStudy.css';

const TECH_TAGS = ['React', 'GSAP + ScrollTrigger', 'CSS', 'SVG motion'];

const STATS = [
  { n: '11', label: 'sections', bg: 'var(--rd-yellow)' },
  { n: '6', label: 'reusable components', bg: 'var(--rd-pink-soft)' },
  { n: '4', label: 'step order flow', bg: 'var(--rd-violet-soft)' },
  { n: '3', label: 'breakpoints', bg: 'var(--rd-coral-soft)' },
];

const SCOPE = [
  'Sticky header, cart counter, mobile nav',
  'Hero with floating product frames',
  'Four category entry cards',
  'Pinned deck-to-fan spotlight cards',
  'Scroll-drawn zigzag ribbon & spine',
  'Filterable 12-item menu grid',
  'Product modal with size pricing',
  'Cart drawer with live totals',
  'Three-step checkout & payment',
  'Subscription, reviews, store locator',
];

const FAN_STEPS = [
  { label: 'Step 1', bg: 'var(--rd-violet-soft)', text: 'Four cards render in a plain CSS grid. That is the layout the page has with JavaScript disabled.' },
  { label: 'Step 2', bg: 'var(--rd-coral-soft)', text: 'GSAP measures every cell, freezes the cards absolutely at those coordinates, and pins the section.' },
  { label: 'Step 3', bg: 'var(--rd-pink-soft)', text: 'A scrubbed from() timeline pulls them back into a squared-up deck. Scrolling plays it forward.' },
  { label: 'Re-measure', bg: 'var(--rd-yellow)', text: 'A refreshInit hook re-runs the measurement on resize, so the fan never drifts.' },
];

const MENU_NOTES = [
  { title: 'Sidebar that folds', text: 'Flexbox holy-grail sizing — the filter sits beside the grid on desktop and becomes a bar above it when the grid runs out of room. No media query.' },
  { title: 'Card hover', text: 'Lift, tilt, photo zoom to 1.10, and the order cue slides over the image — one paused GSAP timeline per card, reversed on leave.' },
  { title: 'Two targets, one card', text: 'The card opens the detail modal; the Add button stops propagation and drops straight into the bag.' },
];

const ORDER_FLOW_NOTES = [
  { title: 'Product detail', text: 'Size changes the price live (−$0.50 / base / +$0.80). Two exits: add and pay, or just add.' },
  { title: 'Payment step', text: 'Local rails first — ABA Pay and Wing alongside card, which is what people in Phnom Penh actually use.' },
];

const CART_NOTES = [
  { title: 'Live totals', bg: 'var(--rd-yellow-soft)', text: 'Subtotal, delivery and total recompute on every quantity change. Delivery flips to free at $12 — the threshold is a component prop, not a magic number.' },
  { title: 'Shared photo slots', bg: 'var(--rd-pink-soft)', text: 'Drawer thumbnails key off the same slot id as the menu card, so one uploaded photo shows everywhere the item appears.' },
  { title: 'Empty state', bg: 'var(--rd-white)', text: '"Nothing brewing yet" with a route back to the menu — written in the brand voice, not the framework’s.' },
];

const STACK_NOTES = [
  { name: 'React', text: 'one component per UI element, props-driven, one context for shared cart/checkout state at this size.' },
  { name: 'GSAP + ScrollTrigger', text: 'pinning, scrubbing, matchMedia breakpoints, context-scoped cleanup.' },
  { name: 'CSS', text: 'plain component-scoped stylesheets with custom-property tokens — no utility framework, so first paint never waits on a build step.' },
  { name: 'SVG', text: 'ribbon paths, text-on-path, dash-offset drawing, the flower mark.' },
];

const DECISIONS = [
  { n: '01', title: 'Motion never gates content.', code: 'immediateRender: false', text: ', so a backgrounded tab, a reduced-motion setting or a print render still shows a complete page.' },
  { n: '02', title: 'Scoped teardown.', code: 'gsap.context()', text: ' and reverts only its own tweens, so a hot reload in one card can’t kill the ScrollTriggers of another.' },
  { n: '03', title: 'Intrinsic responsiveness.', code: 'auto-fit/minmax(), clamp()', text: ' and flex-wrap; breakpoints only handle what CSS can’t infer, like hiding the desktop nav.' },
  { n: '04', title: 'Pure state updates.', code: null, text: 'Cart quantities are updated immutably, which is what keeps the counter honest under React’s double-invoked updaters in development.' },
];

const SERVICES = [
  { label: 'Landing pages', bg: 'var(--rd-yellow)' },
  { label: 'Ecommerce UI', bg: 'var(--rd-pink)' },
  { label: 'Scroll animation', bg: 'var(--rd-violet-soft)' },
  { label: 'Design systems', bg: 'var(--rd-coral-soft)' },
];

/**
 * Portfolio case study for the Rumdoul build, converted from "Rumdoul
 * UI Showcase.dc.html". That mockup illustrated each section with an
 * `<img src="shots/*.png">` pointing at screenshots that were never
 * taken — since the real components already exist in this codebase,
 * the "screenshots" here are the live Hero, category cards, spotlight
 * cards and menu cards themselves, framed in `BrowserFrame`. The
 * product modal, payment step and cart drawer are described instead of
 * embedded live: those three are viewport-fixed overlays in the real
 * app, so mounting them inline would cover this page rather than
 * preview inside a frame.
 */
function CaseStudyContent() {
  return (
    <article className="rd-case-study">
      <BackToStoreLink />
      <DocSection tone="pink" className="rd-case-study__cover">
        <div className="rd-case-study__cover-head">
          <Logo size="md" withKhmer />
          <Tag tone="cream" className="rd-case-study__inverse-tag">
            UI / UX case study
          </Tag>
        </div>
        <div className="rd-case-study__cover-copy">
          <h1 className="rd-doc-section__h1" style={{ fontSize: 'clamp(40px, 6vw, 66px)' }}>
            Coffee shop
            <br />
            ecommerce UI
          </h1>
          <p className="rd-doc-section__lede">
            A scroll-driven storefront for a Phnom Penh coffee shop &mdash; hero to checkout, built in React with
            GSAP ScrollTrigger, fully responsive from 360px up.
          </p>
          <div className="rd-case-study__tags">
            {TECH_TAGS.map((t) => (
              <Tag key={t} tone="yellow">
                {t}
              </Tag>
            ))}
          </div>
        </div>
        <div className="rd-case-study__cover-footer">
          <span>
            <span className="rd-doc-section__eyebrow-r">Design &amp; front-end</span>
            <br />
            <strong>Sean Manutnithya</strong>
            <br />
            <a href="mailto:sean.manutnithya.cs@gmail.com">sean.manutnithya.cs@gmail.com</a>
          </span>
          <span className="rd-doc-section__eyebrow-r">Available for hire</span>
        </div>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">01 &middot; Overview</span>
        <h2 className="rd-doc-section__h2">The brief, and what I shipped</h2>
        <p className="rd-doc-section__lede">
          Take a loud, playful food-delivery layout as reference and rebuild it as a coffee shop storefront &mdash;
          but make the motion do real work: cards that stack like a deck and fan out under the scrollbar, a ribbon
          that draws itself down the page, and an ordering path that never leaves the page.
        </p>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((s) => (
            <div key={s.label} className="rd-case-study__stat" style={{ background: s.bg }}>
              <span className="rd-case-study__stat-n">{s.n}</span>
              <span className="rd-case-study__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <SpecCard title="The problem">
            Reference layouts like this look great in a static mock and fall apart in build: the fun is all in the
            scroll, and the scroll is where accessibility and performance usually break.
          </SpecCard>
          <SpecCard title="The approach">
            Build the correct static layout first, then let GSAP take it apart. Every animated section renders
            complete with zero animation frames &mdash; motion is strictly additive.
          </SpecCard>
        </div>
        <div className="rd-case-study__scope">
          <h3>Scope</h3>
          <div className="rd-case-study__scope-grid">
            {SCOPE.map((s) => (
              <span key={s}>&bull; {s}</span>
            ))}
          </div>
        </div>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">02 &middot; Landing</span>
        <h2 className="rd-doc-section__h2">Above the fold</h2>
        <p className="rd-doc-section__lede">
          Flat pink with a halftone dot field instead of a gradient wash. The headline carries a 5px hard yellow
          shadow &mdash; ink on pink reads at 5.1:1, so nothing is sacrificed for the loud look.
        </p>
        <BrowserFrame height="640px">
          <div className="rd-case-study__live-hero">
            <Hero />
          </div>
        </BrowserFrame>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">03 &middot; Signature interaction</span>
        <h2 className="rd-doc-section__h2">Deck to fan, on scroll</h2>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: '1fr 300px' }}>
          <BrowserFrame height="400px">
            <div className="rd-case-study__fan-preview">
              {SPOTLIGHTS.map((item, i) => (
                <div key={item.n} className="rd-case-study__fan-card" style={{ rotate: `${[-5.5, 3.5, -3, 5.5][i]}deg`, zIndex: i }}>
                  <SpotlightCard item={item} onOrder={() => {}} />
                </div>
              ))}
            </div>
          </BrowserFrame>
          <div className="rd-case-study__steps">
            {FAN_STEPS.map((s) => (
              <div key={s.label} className="rd-case-study__step" style={{ background: s.bg }}>
                <span className="rd-case-study__step-label">{s.label}</span>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rd-case-study__callout">
          <span className="rd-case-study__callout-icon">&#9755;</span>
          <p>
            All four cards share one type ramp and one ink colour &mdash; only the ground changes. Each card
            carries a single hero drink or food item, and hovering slides up an ink bar reading &ldquo;Click to
            order &middot; pay in 2 taps&rdquo;.
          </p>
        </div>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">04 &middot; Catalogue</span>
        <h2 className="rd-doc-section__h2">Menu &amp; filtering</h2>
        <p className="rd-doc-section__lede">
          Twelve items across four categories. The sidebar holds the filter, the reassurance list and a
          &ldquo;surprise me&rdquo; shortcut that drops four bestsellers straight into the bag.
        </p>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: '1fr 260px' }}>
          <BrowserFrame height="420px">
            <div className="rd-case-study__live-menu">
              <PillGroup
                options={CATEGORY_FILTERS.map((f) => ({ id: f, label: f }))}
                value="All"
                onChange={() => {}}
              />
              <div className="rd-case-study__menu-grid">
                {MENU.slice(0, 4).map((item) => (
                  <MenuCard key={item.id} item={item} onAdd={() => {}} onOpen={() => {}} />
                ))}
              </div>
            </div>
          </BrowserFrame>
          <div className="rd-case-study__notes">
            {MENU_NOTES.map((n) => (
              <SpecCard key={n.title} title={n.title}>
                {n.text}
              </SpecCard>
            ))}
          </div>
        </div>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">05 &middot; Order flow</span>
        <h2 className="rd-doc-section__h2">From hover to paid</h2>
        <p className="rd-doc-section__lede">
          Four states, no page loads: hover cue &rarr; product detail with size pricing &rarr; cart drawer with
          live totals and a free-delivery threshold &rarr; three-step checkout ending in a confirmed order number.
        </p>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {ORDER_FLOW_NOTES.map((n) => (
            <SpecCard key={n.title} title={n.title}>
              {n.text}
            </SpecCard>
          ))}
        </div>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          {CART_NOTES.map((n) => (
            <SpecCard key={n.title} title={n.title} bg={n.bg}>
              {n.text}
            </SpecCard>
          ))}
        </div>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">06 &middot; System</span>
        <h2 className="rd-doc-section__h2">One theme file, six components</h2>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {COMPONENTS.map((c) => (
            <SpecCard key={c.name} title={c.name}>
              {c.desc}
            </SpecCard>
          ))}
        </div>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">07 &middot; Build</span>
        <h2 className="rd-doc-section__h2">Tech stack &amp; my role</h2>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <SpecCard title="Stack">
            <span className="rd-case-study__stack-list">
              {STACK_NOTES.map((s) => (
                <span key={s.name}>
                  <strong>{s.name}</strong> &mdash; {s.text}
                </span>
              ))}
            </span>
          </SpecCard>
          <div className="rd-case-study__role">
            <h3>My role</h3>
            <p>
              End to end: brand direction, colour and type system, wireframes, high-fidelity UI, motion design, and
              the front-end build. Copywriting for every screen is mine too.
            </p>
            <div className="rd-case-study__role-tags">
              {['Brand', 'UI design', 'Motion', 'Front-end', 'Copy'].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <h3 className="rd-doc-section__h3">Engineering decisions worth naming</h3>
        <div className="rd-case-study__decisions">
          {DECISIONS.map((d) => (
            <div key={d.n} className="rd-case-study__decision">
              <span className="rd-case-study__decision-n">{d.n}</span>
              <p>
                <strong>{d.title}</strong> {d.code && <code>{d.code}</code>}
                {d.text}
              </p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection tone="ink" className="rd-case-study__closing">
        <Logo size="sm" tone="cream" />
        <div>
          <h2 className="rd-doc-section__closing-title" style={{ fontSize: 'clamp(38px, 6vw, 60px)' }}>
            Need something
            <br />
            like this built?
          </h2>
          <p className="rd-doc-section__lede">
            I design and build marketing sites, storefronts and product UI &mdash; from the brand system down to
            the scroll timings. Happy to start with a single page or take the whole thing.
          </p>
          <div className="rd-case-study__services">
            {SERVICES.map((s) => (
              <span key={s.label} style={{ background: s.bg }}>
                {s.label}
              </span>
            ))}
          </div>
        </div>
        <div className="rd-doc-section__closing-footer">
          <div>
            <span className="rd-doc-section__eyebrow-r">Get in touch</span>
            <br />
            <span className="rd-doc-section__closing-name">Sean Manutnithya</span>
            <br />
            <a href="mailto:sean.manutnithya.cs@gmail.com">sean.manutnithya.cs@gmail.com</a>
          </div>
          <span className="rd-doc-section__muted">
            &copy; 2026 Sean Manutnithya
            <br />
            Rumdoul is a concept brand created for portfolio purposes.
          </span>
        </div>
      </DocSection>
    </article>
  );
}

/**
 * `Hero` (and, transitively, the live preview components below it)
 * reads from ShopContext for its "Order & pay now" handler. The case
 * study mounts its own isolated provider around the whole page so
 * these live previews work standalone, without sharing state with the
 * real storefront if both were ever rendered on the same page.
 */
export default function CaseStudy() {
  return (
    <ShopProvider>
      <CaseStudyContent />
    </ShopProvider>
  );
}
