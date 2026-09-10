import Logo from '../../components/common/Logo';
import Tag from '../../components/ui/Tag';
import Button from '../../components/ui/Button';
import DocSection from '../../components/docs/DocSection';
import SpecCard from '../../components/docs/SpecCard';
import ColorSwatch from '../../components/docs/ColorSwatch';
import SpecTable from '../../components/docs/SpecTable';
import BackToStoreLink from '../../components/docs/BackToStoreLink';
import { PRIMARY_COLORS, SECONDARY_COLORS, COMPONENTS, MOTION_PRINCIPLES } from '../../data/brand';
import './BrandGuideline.css';

/**
 * The Rumdoul brand guideline, converted from "Rumdoul Brand
 * Guideline.dc.html" — a printable, paginated style-guide mockup — into
 * a normal scrollable web page. It's pure documentation (no
 * interactivity to port), so the conversion work here is mostly
 * de-duplication: every one of the eight print "pages" repeated the
 * same tile/table/swatch shapes, now built from `DocSection`,
 * `SpecCard`, `ColorSwatch` and `SpecTable`.
 */
export default function BrandGuideline() {
  return (
    <article className="rd-brand-guide">
      <BackToStoreLink />
      <DocSection tone="pink" className="rd-brand-guide__cover">
        <Logo size="lg" withKhmer />
        <div className="rd-brand-guide__cover-copy">
          <Tag tone="yellow">Brand guideline &middot; v1.0 &middot; 2026</Tag>
          <h1 className="rd-doc-section__h1">
            Brand
            <br />
            guideline
          </h1>
          <p className="rd-doc-section__lede">
            Everything that makes Rumdoul look and sound like Rumdoul: the logo, the palette, the type, the grid,
            the components and the motion that ties them together.
          </p>
        </div>
        <div className="rd-brand-guide__cover-footer">
          <span>
            Designed by Sean Manutnithya
            <br />
            <span className="rd-doc-section__muted">sean.manutnithya.cs@gmail.com</span>
          </span>
          <span className="rd-doc-section__eyebrow-r">Phnom Penh, Cambodia</span>
        </div>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">01 &middot; The brand</span>
        <h2 className="rd-doc-section__h2">Who Rumdoul is</h2>
        <p className="rd-doc-section__lede">
          Rumdoul is a Phnom Penh coffee shop named after Cambodia&rsquo;s national flower. It sells Khmer coffee
          and Khmer sweets to people who are in a hurry in the morning and in no hurry at all in the afternoon. The
          brand is warm, loud and a little bit cheeky &mdash; never precious about coffee.
        </p>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <SpecCard title="We are" bg="var(--rd-yellow-soft)">
            Playful, generous, quick, proudly local. We use short sentences, real numbers and the occasional joke
            at our own expense.
          </SpecCard>
          <SpecCard title="We are not" bg="var(--rd-pink-soft)">
            Third-wave-serious, minimal-beige, or full of tasting notes nobody asked for. No &ldquo;artisanal
            journey&rdquo;. No whispering.
          </SpecCard>
        </div>
        <h3 className="rd-doc-section__h3">Voice &amp; tone</h3>
        <SpecTable
          columns={['Say this', 'Not this']}
          rows={[
            ['Order in two taps.', 'Begin your seamless ordering journey.'],
            ['Fried at six, gone by eleven.', 'Freshly prepared daily by our team.'],
            ['Nothing brewing yet.', 'Your cart is currently empty.'],
            ['Cancel any time, no hard feelings.', 'Subject to our cancellation policy.'],
          ]}
        />
        <div className="rd-brand-guide__quote">
          <span className="rd-brand-guide__quote-mark">&ldquo;</span>
          <p>Rule of thumb: if a barista wouldn&rsquo;t say it across the counter, it doesn&rsquo;t go on the site.</p>
        </div>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">02 &middot; Logo</span>
        <h2 className="rd-doc-section__h2">The mark &amp; lockup</h2>
        <p className="rd-doc-section__lede">
          The mark is a four-petal abstraction of the rumdoul flower with a pink centre, always inside a yellow
          disc with a 3px ink outline. The wordmark is Baloo&nbsp;2 ExtraBold at &minus;0.02em tracking.
        </p>
        <div className="rd-brand-guide__lockup">
          <Logo size="lg" withKhmer />
        </div>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <SpecCard title="✓ Clear space">Keep clear space equal to the disc radius on all four sides.</SpecCard>
          <SpecCard title="✓ Minimum size">Disc 32px on screen, 10mm in print. Below that, drop the wordmark.</SpecCard>
          <SpecCard title="✓ Backgrounds">Cream, pink or ink. On ink, the wordmark flips to cream.</SpecCard>
        </div>
        <h3 className="rd-doc-section__h3">Don&rsquo;t</h3>
        <div className="rd-doc-section__grid rd-brand-guide__donts">
          {['Recolour the disc', 'Stretch or rotate', 'Drop the outline', 'Swap the wordmark font'].map((d) => (
            <div key={d} className="rd-brand-guide__dont">
              ✗ {d}
            </div>
          ))}
        </div>
        <div className="rd-doc-section__note" style={{ background: 'var(--rd-yellow)' }}>
          The Khmer sub-line is optional on small surfaces (favicon, app icon, cup stamp) but required on the site
          header, packaging and any brand-first placement.
        </div>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">03 &middot; Colour</span>
        <h2 className="rd-doc-section__h2">Colour theme</h2>
        <p className="rd-doc-section__lede">
          Every colour ships as a CSS custom property on <code>:root</code>. Nothing in the UI hard-codes a hex.
        </p>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {PRIMARY_COLORS.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
          {SECONDARY_COLORS.map((c) => (
            <ColorSwatch key={c.name} {...c} size="sm" />
          ))}
        </div>
        <h3 className="rd-doc-section__h3">How to use them</h3>
        <SpecTable
          columns={['Role', 'Colour', 'Notes']}
          rows={[
            ['Page ground', 'Cream', 'Alternate sections with Cream 2 (#FFF9F0). Never more than two grounds.'],
            ['Hero / accent block', 'Pink', 'Always with Ink type on top — never white type on pink.'],
            ['Primary action', 'Yellow', 'Ink label, 2.5px ink border, 3-5px ink hard shadow.'],
            ['All type & strokes', 'Ink', 'Body copy at 80-100% opacity, never below.'],
            ['Price / link', 'Pink deep', 'Do not use for body copy.'],
          ]}
        />
        <div className="rd-doc-section__note" style={{ background: 'var(--rd-yellow-soft)' }}>
          Contrast floor: 4.5:1 for body, 3:1 for 24px+ headlines. Ink on Cream is 11.9:1, Ink on Yellow 8.6:1, Ink
          on Pink 5.1:1 &mdash; all pass. White on Pink is 2.6:1 and is banned.
        </div>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">04 &middot; Type</span>
        <h2 className="rd-doc-section__h2">Typography</h2>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <SpecCard title="Baloo 2">
            Weights 700 &amp; 800 only. Tracking &minus;0.02em to &minus;0.03em. Used for every heading, price and
            button-adjacent number.
          </SpecCard>
          <SpecCard title="Nunito Sans">400 body, 600-700 emphasis, 800 for uppercase labels at 0.12-0.18em tracking.</SpecCard>
        </div>
        <h3 className="rd-doc-section__h3">Scale</h3>
        <SpecTable
          columns={['Token', 'Font / weight', 'Size (clamp)', 'Leading']}
          rows={[
            ['Hero H1', 'Baloo 2 / 800', '38 → 86px', '0.94'],
            ['Section H2', 'Baloo 2 / 800', '30 → 68px', '0.97'],
            ['Card H3', 'Baloo 2 / 800', '21 → 30px', '1.02-1.10'],
            ['Body', 'Nunito Sans / 400', '13 → 18px', '1.45-1.60'],
            ['Label / button', 'Nunito Sans / 800', '10.5 → 14.5px', '1.0, caps'],
            ['Khmer sub-line', 'Noto Sans Khmer / 500', '11 → 16px', '1.4'],
          ]}
        />
        <div className="rd-brand-guide__signature">
          <p className="rd-brand-guide__signature-title">Coffee with a proper Khmer vibe</p>
          <p>
            Headline set in Baloo 2 800 with a 5px hard yellow text-shadow &mdash; the signature treatment, used
            once per page and never on body copy.
          </p>
        </div>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">05 &middot; Layout</span>
        <h2 className="rd-doc-section__h2">Spacing &amp; grid</h2>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <SpecCard title="Container">
            width: min(94vw, 1320px), centred. Section rhythm is clamp(56px, 7vw, 104px) top and bottom. No fixed
            widths anywhere — every grid is auto-fit / minmax() so it reflows without media queries.
          </SpecCard>
          <SpecCard title="Spacing scale">5 hairline · 10 pill inset · 20 card padding · 32 grid gutter · 56 block spacing · 104 section padding.</SpecCard>
        </div>
        <h3 className="rd-doc-section__h3">Breakpoints</h3>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <SpecCard title="< 760px · Phone" bg="var(--rd-pink-soft)">
            1 column everywhere. Nav collapses to a pill drawer. Spotlight cards stack and fade up — no pinning.
          </SpecCard>
          <SpecCard title="760-1023px · Tablet" bg="var(--rd-violet-soft)">
            2-up grids. Menu filter becomes a horizontal bar above the grid. Card stack pins in a 2×2 fan.
          </SpecCard>
          <SpecCard title="1024px+ · Desktop" bg="var(--rd-yellow)">
            Full nav, sidebar filter, 3-4-up grids, 4-across pinned card fan, zigzag spine visible at 1280px+.
          </SpecCard>
        </div>
        <div className="rd-doc-section__note" style={{ background: 'var(--rd-white)' }}>
          Radii step 14 / 18 / 22 / 26 / 30 / 999px. Every surface carries a 2-3px Ink border and a hard offset
          shadow — never a soft blur at rest. Blur is reserved for hover lift.
        </div>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">06 &middot; Components</span>
        <h2 className="rd-doc-section__h2">Component library</h2>
        <div className="rd-brand-guide__chip-row">
          <Button variant="primary" size="sm">
            Primary
          </Button>
          <Button variant="inverse" size="sm">
            Inverse
          </Button>
          <Button variant="ghost" size="sm">
            Ghost
          </Button>
          <Tag tone="white">Filter chip</Tag>
          <Tag tone="cream" className="rd-brand-guide__chip-active">
            Chip active
          </Tag>
          <Tag tone="yellow">Tag</Tag>
        </div>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {COMPONENTS.map((c) => (
            <SpecCard key={c.name} title={c.name}>
              {c.desc}
            </SpecCard>
          ))}
        </div>
        <div className="rd-doc-section__note" style={{ background: 'var(--rd-yellow)' }}>
          Every component is a standalone file with its own props and hover logic. Tap targets are never below
          44&times;44px; the Add button, quantity steppers and nav pills are all sized to that floor.
        </div>
      </DocSection>

      <DocSection>
        <span className="rd-doc-section__eyebrow">07 &middot; Motion</span>
        <h2 className="rd-doc-section__h2">Motion principles</h2>
        <p className="rd-doc-section__lede">
          All motion is GSAP with ScrollTrigger. The rule that governs everything:{' '}
          <strong>the page must be complete and correct with zero animation frames.</strong> Motion is enhancement,
          never the thing that makes content appear.
        </p>
        <div className="rd-doc-section__grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {MOTION_PRINCIPLES.map((m) => (
            <SpecCard key={m.title} title={m.title}>
              {m.desc}
            </SpecCard>
          ))}
        </div>
        <h3 className="rd-doc-section__h3">Timing</h3>
        <SpecTable
          columns={['Motion', 'Duration', 'Ease']}
          rows={[
            ['Hover lift', '0.34-0.38s', 'power3.out'],
            ['Cue slide-up', '0.35s', 'back.out(1.7)'],
            ['Scroll reveal', '0.6-0.9s', 'power3.out'],
            ['Scrubbed timelines', 'scrub 0.5-0.8', 'none / power2.inOut'],
            ['Drawer slide', '0.46s', 'cubic-bezier(.22,1,.36,1)'],
          ]}
        />
        <div className="rd-doc-section__note" style={{ background: 'var(--rd-ink)', color: 'var(--rd-cream)', borderColor: 'var(--rd-ink)' }}>
          Never animate opacity from 0 without <code>immediateRender: false</code>. If the ticker never runs &mdash;
          backgrounded tab, reduced motion, print &mdash; content that was hidden by a from-state stays hidden.
          That is a bug, not a style.
        </div>
      </DocSection>

      <DocSection tone="ink" className="rd-brand-guide__closing">
        <div className="rd-brand-guide__closing-brand">
          <Logo size="sm" tone="cream" />
        </div>
        <div>
          <h2 className="rd-doc-section__closing-title">
            That&rsquo;s the whole
            <br />
            system.
          </h2>
          <p className="rd-doc-section__lede">
            Two fonts, six colours, one border language, one motion rule. If a new screen needs something that
            isn&rsquo;t in here, it probably needs a rethink rather than a new token.
          </p>
        </div>
        <div className="rd-doc-section__closing-footer">
          <div>
            <span className="rd-doc-section__eyebrow-r">Design &amp; front-end</span>
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
