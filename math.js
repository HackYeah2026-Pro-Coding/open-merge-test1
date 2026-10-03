/**
 * Limits a number to the inclusive range [min, max].
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
