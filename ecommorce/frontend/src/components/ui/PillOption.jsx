import './PillOption.css';

/**
 * A single selectable pill in a picker row. The mockup's category
 * filters, size picker and payment-method picker are three separate
 * blocks of markup that all do the same thing: a row of pills where one
 * is "active" (ink fill, yellow text) and the rest are outlined. This
 * component is that one pill; `PillGroup` below lays out the row.
 */
export function PillOption({ active, onClick, children, flex = '1 1 0' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rd-pill-option ${active ? 'rd-pill-option--active' : ''}`}
      style={{ flex }}
    >
      {children}
    </button>
  );
}

/**
 * @param {{id: string, label: string}[]} options
 * @param {string} value  currently selected option id
 * @param {(id: string) => void} onChange
 */
export function PillGroup({ options, value, onChange, className = '' }) {
  return (
    <div className={`rd-pill-group ${className}`}>
      {options.map((opt) => (
        <PillOption key={opt.id} active={value === opt.id} onClick={() => onChange(opt.id)}>
          {opt.label}
        </PillOption>
      ))}
    </div>
  );
}
