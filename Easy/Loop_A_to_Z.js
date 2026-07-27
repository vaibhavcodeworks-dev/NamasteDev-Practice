function generateAtoZ() {
  // your solution here
  let result = [],i=65,count=1
  while (count<27) {
    result.push(String.fromCharCode(i))
    i++
    count++
  }
  return result
}

module.exports = { generateAtoZ };