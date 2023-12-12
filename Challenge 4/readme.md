# Challenge 4: 😵‍💫 Turn the parentheses around 

![Challenge4](/imgs/challenge4.jpg)

In 🎅 Santa's workshop, <b>some Christmas messages have been written in a peculiar way</b>: the words within the brackets must be read backwards.

<b>Santa needs these messages to be correctly formatted</b>. Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

```JavaScript
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus
```

Notes:
* The input strings will always be well formed with parentheses that match correctly, you do not need to validate them.
* There should not be any parentheses left in the final message.
* The maximum nesting level is 2.

Photo by <a href="https://unsplash.com/es/@cardmapr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">CardMapr.nl</a> from <a href="https://unsplash.com/es/fotos/persona-escribiendo-en-sobre-blanco-F69TdIcN7hs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  