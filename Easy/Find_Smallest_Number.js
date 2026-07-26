function findSmallest(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false
  for (let val of arr) {
    if (isNaN(val) || !isFinite(val)) {
      return false
    }
  }
  if (arr.length === 0) return null
  if (arr.length === 1) return arr[0]
  let smallest = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

module.exports = { findSmallest };