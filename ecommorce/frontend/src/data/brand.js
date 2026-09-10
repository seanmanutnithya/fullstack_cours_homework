/**
 * Design-system reference data shared by the two documentation pages
 * (BrandGuideline and CaseStudy) — both mockups described the same six
 * components and the same colour palette, so it lives here once instead
 * of twice.
 */

export const PRIMARY_COLORS = [
  { name: 'Cream', hex: '#FDF2E4', varName: '--rd-cream' },
  { name: 'Pink', hex: '#F76D9E', varName: '--rd-pink' },
  { name: 'Yellow', hex: '#FFD93B', varName: '--rd-yellow' },
  { name: 'Ink', hex: '#43263C', varName: '--rd-ink' },
];

export const SECONDARY_COLORS = [
  { name: 'Pink deep', hex: '#DE3372' },
  { name: 'Pink soft', hex: '#FFD3E2' },
  { name: 'Yellow soft', hex: '#FFF0AD' },
  { name: 'Violet soft', hex: '#C9BEF5' },
  { name: 'Coral soft', hex: '#FFAE94' },
  { name: 'Ink soft', hex: '#7A5A6F' },
];

export const COMPONENTS = [
  { name: 'MenuCard', desc: 'Photo 186px, tag pill top-left, hover cue bar, name / desc / price / add. Used 12× in the menu grid.' },
  { name: 'SpotlightCard', desc: 'Numbered, tinted ground, one hero item. Same type and ink colour across all four; only the ground changes.' },
  { name: 'CategoryCard', desc: 'Horizontal, 82px thumb, title / desc / browse link. Tilts and turns yellow on hover.' },
  { name: 'ZigzagBand', desc: 'Full-bleed yellow ribbon on an ink outline, with brand copy riding the path. Draws on scroll.' },
  { name: 'ZigzagSpine', desc: 'Vertical companion that grows top-to-bottom with scroll progress, with a pink bead riding the tip.' },
  { name: 'StickerBadge', desc: 'Rotating circular stamp, text on a circle path. Max two per screen, never over body copy.' },
];

export const MOTION_PRINCIPLES = [
  { title: 'Card deck → fan', desc: 'The spotlight section pins for ~1.1 viewport heights. Four cards start as a squared-up deck and scrub out into their grid positions with alternating rotation. Fallback: the plain grid.' },
  { title: 'Ribbon draw', desc: "Ink stroke then yellow stroke draw via stroke-dashoffset, scrubbed across the band's viewport crossing; the path text fades in at 50% and then marquees forever." },
  { title: 'Hover', desc: 'One paused timeline per card, played forward on enter and reversed on leave. Lift -10 to -12px, photo scale 1.05-1.10, order cue slides up from below the fold of the card.' },
  { title: 'Feedback', desc: 'Adding to the bag pops the counter (scale 1.45, yoyo) and slides an ink toast up from the bottom for 2.1s. Payment success springs the tick in with back.out(2.2).' },
];
