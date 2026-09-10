import './IconButton.css';

/**
 * Small circular icon-only button. The cart drawer, product modal and
 * checkout modal each had their own identical "✕ close" button markup —
 * this is that button, generalized to take any lucide icon.
 *
 * @param {React.ComponentType} icon  a lucide-react icon component
 * @param {string} label  accessible name (rendered as aria-label)
 * @param {'cream'|'white'} [tone]
 */
export default function IconButton({ icon: Icon, label, tone = 'cream', onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`rd-icon-btn rd-icon-btn--${tone} ${className}`}
    >
      <Icon size={16} strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
}
