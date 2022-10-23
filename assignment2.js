
// Triangle

"use strict"

function triangle(s1,s2,s3){
    let result
    if(s1 === s2 && s1 === s3){
        result = "Equilateral"
        return result
    }
    else if((s1 === s2 && s1 != s3) || (s1 != s2 && s1 === s3)){
        result = "Isosceles"
        return result
    }
    else{
        result = "Sceles"
        return result
    }
}

let side1 = 13
let side2 = 1
let side3 = 10
let type = triangle(side1, side2, side3)
console.log(`type of the triangle is "${type}"`)



// Grade


function grade(marks){
    let q = parseInt(marks / 10) // rounding of the value
    switch(q){
        case 10:
        case 9:
            return "S grade"
            break
        case 8:
            return "A grade"
            break
        case 7:
            return "B grade"
            break
        case 6:
            return "C grade"
            break
        case 5:
            return "D grade"
            break
        case 4:
            return "E grade"
            break
        case 3:
        case 2:
        case 1:
        case 0:
            return "Student has failed"
            break
        default:
            return "Invalid marks"


    }
}

let marks = 190
let status_of_student = grade(marks)
console.log(`Status"${status_of_student}"`)


// sum of 3 and 5 multiples under 1000


let s35 = 0;
let s3 = 0;
let s5 = 0;

for (let i = 1; i < 1000; i++){
    if (i % 3 === 0 && i % 5 === 0){
        s35 += i;
    }
    if (i % 3 ===0){
        s3 += i;
    }
    if (i % 5 ===0){
        s5 += i;
    } 
}
let multiples = (s5 + s3) - s35;
console.log(multiples);


// Prime number Factorials

function prime(from,to){
    for (let i = from; i <= to; i++){
        if (i === 1){
            continue
        }
        let count = 0;
        for (let j = i; j >= 1; j--){
            if (i % j === 0){
                count += 1;
            }
        }
        if (count === 2){
            let sum = 1;
            for (let fact = i; fact >= 1; fact--){
                sum *= fact;
            }
            console.log(`factorial of ${i} is ${BigInt(sum)}`) //Using BigInt function here. it can hold large numbers upto some range.. 
        }
    }
}
let from = 0;
let to = 100;
prime(from,to)