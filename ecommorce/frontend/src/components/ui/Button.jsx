import './Button.css';

/**
 * The one pill-button component behind every CTA in the mockups: hero
 * "See the menu" / "Order & pay now", header "Bag", club "Join the
 * club" / "Browse first", cart "Checkout & pay", modal "Add & pay" /
 * "Just add to bag", checkout "Back" / "Continue". They only ever
 * differed by color + border combination (variant) and padding (size),
 * so those became props instead of five near-duplicate button styles.
 *
 * @param {'primary'|'inverse'|'ghost'|'pink'|'outline-light'} [variant]
 *   primary: yellow fill, hard ink shadow (main CTAs)
 *   inverse: ink fill, yellow text (secondary CTAs on light grounds)
 *   ghost: transparent, ink border (tertiary actions)
 *   pink: pink fill (cart / commerce actions)
 *   outline-light: transparent, cream border+text (CTAs on dark grounds)
 * @param {'md'|'sm'} [size]
 * @param {'button'|'a'} [as]
 */
export default function Button({
  as = 'button',
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'end',
  fullWidth = false,
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const tagProps = as === 'button' ? { type } : {};
  return (
    <Tag
      {...tagProps}
      {...rest}
      className={`rd-btn rd-btn--${variant} rd-btn--${size} ${fullWidth ? 'rd-btn--full' : ''} ${className}`}
    >
      {Icon && iconPosition === 'start' && <Icon size={16} strokeWidth={2.5} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'end' && <Icon size={16} strokeWidth={2.5} aria-hidden="true" />}
    </Tag>
  );
}
