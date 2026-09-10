import { ImagePlus } from 'lucide-react';
import './ImageSlot.css';

/**
 * Stand-in for a photo that hasn't been shot/uploaded yet. Used by every
 * card, review, shop and Instagram tile in the mockups (each one had its
 * own copy of the same `<image-slot>` custom element + placeholder text).
 *
 * Pass `src` once real photography exists and it renders a normal,
 * lazy-loaded `<img>` instead of the placeholder — no call sites need to
 * change shape.
 *
 * @param {string} [src]  real image URL; omit to show the placeholder
 * @param {string} [alt]
 * @param {string} [hint]  short caption shown inside the placeholder
 * @param {'rect'|'circle'} [shape]
 */
export default function ImageSlot({ src, alt = '', hint = '', shape = 'rect', className = '' }) {
  return (
    <div className={`rd-image-slot rd-image-slot--${shape} ${className}`}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      ) : (
        <div className="rd-image-slot__placeholder" role="img" aria-label={hint || alt}>
          <ImagePlus size={22} strokeWidth={2} aria-hidden="true" />
          {hint && <span>{hint}</span>}
        </div>
      )}
    </div>
  );
}
