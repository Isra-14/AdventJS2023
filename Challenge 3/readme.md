# Challenge 3: 😏 The naughty elf

![Challenge3](/imgs/challenge3.jpg)

In Santa's workshop, <b>a mischievous elf</b> has been playing around with the gift production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to <b>write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain</b>. If there is no difference between the sequences, return an empty string.

```JavaScript
const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
```

Please, keep in mind:

* There will always be one different step or none.
* The modification can occur anywhere in the string.
* The original steps could be empty

Photo by <a href="https://unsplash.com/es/@arkansas007?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Misty Ladd</a> from <a href="https://unsplash.com/es/fotos/chico-con-sombrero-rojo-y-blanco-de-santa-tY6eXMyGh2w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>