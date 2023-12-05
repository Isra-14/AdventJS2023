/* 
    Challenge 1:
    En la fabrica de juguetes del Polo Norte, cada juguete tiene un numero de identificacion unico.
    Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

    ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

    En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

    Ejemplo:
    const giftsIds = [2, 1, 3, 5, 3, 2];
    const firstRepeatedId = findFirstRepeted(giftsIds);
    console.log(firstRepeatedId); // 3
*/  

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