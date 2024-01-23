function drawGift(size, symbol) {  
  let pattern = ""
  let lines = (2*size)-3
  let middle = Math.floor(lines/2)

  if(size === 1)
    return "#\n"
  
  for(let i=0; i < middle; i++) {
    pattern += ' '.repeat(middle-i) + '#' + symbol.repeat(size-2) + '#' + symbol.repeat(i) + '#\n'
  }

  pattern += '#'.repeat(size) + symbol.repeat(size-2) + '#\n'

  for (let i=middle; i>0; i--)
    pattern += '#' + symbol.repeat(size-2) + '#' + symbol.repeat(i-1) + "#\n"
  
  return ' '.repeat(size-1) + '#'.repeat(size) + '\n' + pattern + '#'.repeat(size) + '\n'
}

console.log(drawGift(4, '+'))
console.log(drawGift(5, '*'))
console.log(drawGift(1, '^'))