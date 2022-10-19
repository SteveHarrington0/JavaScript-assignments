"use strict"
let number = 5
let sum
if (number === 0){
    sum = 1
}
else{
    let i = number
    sum = 1
    while(i != 0){
        sum *= i
        i--
    }
}
console.log(`factorial of ${number} is ${sum}`)