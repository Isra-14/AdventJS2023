function maxDistance(movements) {
  let max = 0
  let left = movements.split('<').length-1
  let rigth = movements.split('>').length-1
  let any = movements.split('*').length-1
  
  max = left >= rigth ? 
        left += any - rigth 
        : rigth += any - left

  return max
}

// TESTS

// Result -> 2
let test = '>>*<'
console.assert(maxDistance(test) === 2, 'Test 1')

// Result -> 5
test = '<<<<<'
console.assert(maxDistance(test) === 5, 'Test 2')

// Result -> 5
test = '>***>'
console.assert(maxDistance(test) === 5, 'Test 3')

// Result -> 10
test = '**********'
console.assert(maxDistance(test) === 10, 'Test 4')