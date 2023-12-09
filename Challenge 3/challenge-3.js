function findNaughtyStep(original, modified) {
  if(original.length === modified.length)
    return ''

  for(let i = 0; i < (original.length + 1); i++) {
    if (original[i] !== modified[i]) {
      if(original.length < modified.length) {
        return modified[i]
      } else {
        return original[i]
      }
    }
  }
}

// TESTS
// Result: 'f'
let original = 'stepfor'
let modified = 'stepor'
console.info(findNaughtyStep(original, modified))

// Result: 'e'
original = 'abcd'
modified = 'abcde'
console.info(findNaughtyStep(original, modified))

// Result: ''
original = 'abcde'
modified = 'abcde'
console.info(findNaughtyStep(original, modified))
