import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

/**
 * Registers the ScrollTrigger plugin exactly once no matter how many
 * components import it. Every animation hook in this app should pull
 * `gsap` from here instead of importing the library directly, so plugin
 * setup stays centralized.
 */
export function useGsap() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

export { gsap, ScrollTrigger };
