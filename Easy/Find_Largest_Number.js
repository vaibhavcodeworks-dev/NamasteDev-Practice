function findLargest(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false
  for (let val of arr) {
    if (isNaN(val) || !isFinite(val)) {
      return false
    }
  }
  if (arr.length === 0) return null
  if (arr.length === 1) return arr[0]
  let biggest = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i]
    }
  }
  return biggest
}

module.exports = { findLargest };
