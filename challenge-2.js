/*
  Challenge 2:
  En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

  Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

  Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

  Ejemplo:
  const gifts = ['tren', 'oso', 'pelota']
  const materials = 'tronesa'

  manufacture(gifts, materials) // ["tren", "oso"]
  //* 'tren' SÍ porque sus letras están en 'tronesa'
  //* 'oso' SÍ porque sus letras están en 'tronesa'
  //* 'pelota' NO porque sus letras NO están en 'tronesa'

*/

// First iteration
// function manufacture(gifts, materials) {
//   let result = []
//   gifts.forEach(gift => {
//     let isAvailable = true
//     gift.split('').forEach(letter => {
//       if(!materials.includes(letter))
//         isAvailable = false
//     })
//     if(isAvailable)
//       result.push(gift)
//   })
//   return result
// }

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