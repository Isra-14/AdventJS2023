function decode(message) {
  let positions = []
  let result = ''

  for (const letter of message) {
    if (letter === '(')
      positions.push(result.length)
    else if (letter === ')') {
      let start = positions.pop()
      let decode = result.slice(start).split('').reverse().join('')
      result = result.slice(0, start) + decode
    } else
      result += letter
  }

  return result
}

// Tests
console.assert(decode('hola (odnum)') === 'hola mundo', 'Should be "hola mundo"')