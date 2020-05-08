const getNextVersion = currentVersion => {
  try {
    const numbers = currentVersion.split('.').map(char => Number(char))
    const lastNumberIndex = numbers.length - 1
    const lastNumber = Number(numbers[lastNumberIndex]) + 1
    numbers.splice(lastNumberIndex, 1, lastNumber)
    return numbers.join('.')
  } catch (err) {
    return currentVersion
  }
}

module.exports = getNextVersion
