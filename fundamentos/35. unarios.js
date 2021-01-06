let num1 = 1
let num2 = 2

num1++

console.log(num1)

--num1

console.log(num1)

console.log(++num1 === num2--) // a comparação é foita antes do num2 ser decremantado
console.log( num1 === num2) // comparação após o num2 ser decrementado