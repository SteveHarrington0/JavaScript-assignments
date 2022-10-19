"use strict"
let temp_in_Celsius = parseInt("60C")
let temp_in_Fahrenheit = parseInt("45F")
let cel_to_Far = ((9 * temp_in_Celsius) / 5) + 32
let far_to_cel = ((temp_in_Fahrenheit - 32) * 5) / 9
console.log (`${temp_in_Celsius}C is ${cel_to_Far}F`)
console.log(`${temp_in_Fahrenheit}F is ${far_to_cel}C`)