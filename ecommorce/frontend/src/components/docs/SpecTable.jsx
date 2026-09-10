import './SpecTable.css';

/**
 * Generic spec table: a header row of column labels plus data rows.
 * The guideline has four different tables (voice & tone, colour usage,
 * type scale, motion timing) that are all just "N columns of short
 * strings" — one renderer instead of four hand-written `<table>`s.
 *
 * @param {string[]} columns
 * @param {string[][]} rows
 */
export default function SpecTable({ columns, rows }) {
  return (
    <table className="rd-spec-table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} data-emphasis={j === 0 ? 'true' : undefined}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
