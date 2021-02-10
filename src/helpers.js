/**
 * Normalizes number result to be number.
 *
 * @param {*} possibleNumber
 * @returns {number}
 */
export function normalizeNumberResult(possibleNumber) {
  if (isNaN(possibleNumber)) {
    return 0
  }

  return possibleNumber
}
