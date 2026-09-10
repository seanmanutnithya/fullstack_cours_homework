import './Tag.css';

/**
 * Small read-only pill for labels: menu card tags ("Bestseller"),
 * product-detail note chips, shop hours/notes. Every instance in the
 * mockup was the same markup with a different background token.
 *
 * @param {'yellow'|'cream'|'white'} [tone]
 */
export default function Tag({ tone = 'yellow', className = '', children }) {
  return <span className={`rd-tag rd-tag--${tone} ${className}`}>{children}</span>;
}
