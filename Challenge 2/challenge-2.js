function manufacture(gifts, materials) {
  return gifts.filter(gift => {
    let isAvailable = true
    gift.split('').forEach(letter => {
      if(!materials.includes(letter))
        isAvailable = false
    })
    return isAvailable
  })
}

// TESTS

let gifts = ['tren', 'oso', 'pelota']
let materials = 'tronesa'

console.assert(JSON.stringify(manufacture(gifts, materials)) === JSON.stringify(['tren', 'oso']), 'Must be ["tren", "oso"]')

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

console.assert(JSON.stringify(manufacture(gifts, materials)) === JSON.stringify(['puzzle']), 'Must be ["puzzle"]')

gifts = ['libro', 'ps5']
materials = 'psli'

console.assert(JSON.stringify(manufacture(gifts, materials)) === JSON.stringify([]), 'Must be []')