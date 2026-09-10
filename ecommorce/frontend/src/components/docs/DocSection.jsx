import './DocSection.css';

/**
 * One full-bleed "page" of the brand guideline / case study. The
 * mockups used a print-paginated `<doc-page>` custom element (one
 * fixed Letter-size sheet per section); on the web this is just a
 * full-width section people scroll through, with the same background
 * + padding rhythm.
 *
 * @param {'cream'|'pink'|'ink'} [tone]
 */
export default function DocSection({ tone = 'cream', className = '', children }) {
  return <section className={`rd-doc-section rd-doc-section--${tone} ${className}`}>{children}</section>;
}
