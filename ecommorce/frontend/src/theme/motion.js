/**
 * Shared GSAP timing tokens, lifted from the Rumdoul brand guideline's
 * "Motion" section (hover lift 0.34-0.38s / power3.out, cue slide-up
 * 0.35s / back.out(1.7), scroll reveal 0.6-0.9s / power3.out, scrubbed
 * timelines 0.5-0.8 scrub). Import these instead of re-typing magic
 * numbers in every animation hook.
 */
export const EASE = {
  out: 'power3.out',
  inOut: 'power2.inOut',
  cueIn: 'back.out(1.7)',
  popIn: 'back.out(2.2)',
};

export const DURATION = {
  hover: 0.36,
  cue: 0.35,
  reveal: 0.7,
  toast: 0.45,
};

export const SCRUB = 0.6;
