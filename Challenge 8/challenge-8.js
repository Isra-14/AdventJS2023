function organizeGifts(gifts) {
  let regex = /\d+|[A-z]/g
  let matches = gifts.match(regex)
  let pallet = 0
  let bag = 0
  let box = 0
  let result = ''
  
  for (let i = 0; i < matches.length; i += 2) {
    bag = matches[i] % 10
    box = Math.floor(matches[i]/10)
    pallet = Math.floor(box/5)

    box -= pallet >= 1 ? 5 * pallet : 0
    
    result += `[${matches[i + 1]}]`.repeat(pallet) 
            + `{${matches[i + 1]}}`.repeat(box)
    result += bag > 0 ?  `(${matches[i + 1].repeat(bag)})` : ''

  }
  
  return result
}

// TEST 01
let gifts = '76a11b'
console.assert(organizeGifts(gifts) === '[a]{a}{a}(aaaaaa){b}(b)', `Test 01 failed\nExpected: [a]{a}{a}(aaaaaa){b}(b)\nActual: ${organizeGifts(gifts)}\n`)

// TEST 02
gifts = '66a11b'
console.assert(organizeGifts(gifts) === '[a]{a}(aaaaaa){b}(b)', `Test 02 failed\nExpected: [a]{a}(aaaaaa){b}(b)\nActual: ${organizeGifts(gifts)}\n`)

// TEST 03
gifts = '20a'
console.assert(organizeGifts(gifts) === '{a}{a}', `Test 03 failed\nExpected: {a}{a}\nActual: ${organizeGifts(gifts)}\n`)

// TEST 04
gifts = '70b120a4c'
console.assert(organizeGifts(gifts) === '[b]{b}{b}[a][a]{a}{a}(cccc)', `Test 04 failed\nExpected: [b]{b}{b}[a][a]{a}{a}(cccc)\nActual: ${organizeGifts(gifts)}\n`)