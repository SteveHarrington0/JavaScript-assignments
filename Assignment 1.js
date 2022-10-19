"use strict"

//Factorial

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


//Leap Year

let year = 2012

if(year % 400 === 0){

    console.log(`${year} is a leap year`)

}

else if (year % 100 === 0){

    console.log(`${year} is not a leap year`)

}

else if (year % 4 === 0){

    console.log(`${year} is a leap year`)

}

else{

    console.log(`${year} not a leap year`)

}


// Temperature

let temp_in_Celsius = parseInt("60C")

let temp_in_Fahrenheit = parseInt("45F")

let cel_to_Far = ((9 * temp_in_Celsius) / 5) + 32

let far_to_cel = ((temp_in_Fahrenheit - 32) * 5) / 9

console.log (`${temp_in_Celsius}C is ${cel_to_Far}F`)

console.log(`${temp_in_Fahrenheit}F is ${far_to_cel}C`)