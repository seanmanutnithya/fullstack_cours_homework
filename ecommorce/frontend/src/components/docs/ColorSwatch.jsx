import './ColorSwatch.css';

/**
 * A color chip: a solid block plus its name / hex / CSS variable. Used
 * for both the four "primary" swatches (large) and the six "secondary"
 * ones (small) in the colour theme section.
 *
 * @param {'lg'|'sm'} [size]
 */
export default function ColorSwatch({ name, hex, varName, size = 'lg' }) {
  return (
    <div className={`rd-color-swatch rd-color-swatch--${size}`}>
      <span className="rd-color-swatch__block" style={{ background: hex }} />
      <span className="rd-color-swatch__label">
        {name}
        <span className="rd-color-swatch__meta">
          {hex}
          <br />
          {varName}
        </span>
      </span>
    </div>
  );
}
