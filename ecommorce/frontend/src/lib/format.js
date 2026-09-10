/**
 * Every price in the mockups is formatted the same way:
 * `'$' + Number(n).toFixed(2)`. Centralized here so currency formatting
 * (or a future locale/currency change) only has one place to update.
 */
export function formatMoney(amount) {
  return `$${Number(amount).toFixed(2)}`;
}
