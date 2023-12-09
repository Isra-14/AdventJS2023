function findFirstRepeted(gifts) {
  const ids = []
  let repeated = -1

  gifts.every(gift => {
    if(ids.includes(gift)) {
      repeated = gift
      return false
    } else {
      ids.push(gift)
      return true
    }
  })

  return repeated
}

// TESTS
console.assert(findFirstRepeted([2, 1, 3, 5, 3, 2]) === 3, 'Must be 3')
console.assert(findFirstRepeted([1, 2, 3, 4]) === -1, 'Must be -1')
console.assert(findFirstRepeted([5, 1, 5, 1]) === 5, 'Must be 5')