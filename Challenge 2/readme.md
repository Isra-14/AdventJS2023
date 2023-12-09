# Challenge 2: 🏭 We start the factory!

![Challenge2](/imgs/challenge2.jpg)

In Santa's workshop, the elves have a <b style="color:#FFC800">gift list</b> they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a <b style="color:#FFC800">list of the gifts that can be made</b>.

A gift can be made if we have all the necessary materials to make it.

```JavaScript
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
```