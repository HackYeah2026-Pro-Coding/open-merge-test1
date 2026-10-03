/**
 * Limits a number to the inclusive range [min, max].
 * Throws a RangeError when the range is inverted.
 */
export function clamp(value, min, max) {
  if (min > max) {
    throw new RangeError(`min (${min}) is greater than max (${max})`);
  }
  return Math.min(Math.max(value, min), max);
}
