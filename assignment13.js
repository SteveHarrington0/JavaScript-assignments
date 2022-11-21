
// 1.

// const prompt = require("prompt-sync")({sigint:true});
// let no_of_elements;
// do{
//     no_of_elements = prompt("enter number of elements")
// }
// while(no_of_elements <= 0);
// let array = [];
// for(let i = 0; i < no_of_elements; i++){
//     array[i] = parseInt(prompt("enter the element"))
// }

// let result = array.reduce((accumulator,current_value)=>{
//     return accumulator + current_value
// },0)
// console.log(result);
// console.log(result / array.length);


// 2.


let students = [
    { name: "John", marks: "92" },
    { name: "Oliver", marks: "85" },
    { name: "Michael", marks: "79" },
    { name: "Dwight", marks: "95"},
    { name: "Oscar", marks: "64" },
    { name: "Kevin", marks: "48" },
    ];

for(let i in students){

    if(parseInt(students[i].marks) > 90 && parseInt(students[i].marks) <= 100){
        students[i].marks = "A";
    }
    else if(parseInt(students[i].marks) > 80 && parseInt(students[i].marks) <= 90){
        students[i].marks = "B";
    }
    else if(parseInt(students[i].marks) > 70 && parseInt(students[i].marks) <= 80){
        students[i].marks = "C";
    }
    else if(parseInt(students[i].marks) > 60 && parseInt(students[i].marks) <= 70){
        students[i].marks = "D";
    }
    else if(parseInt(students[i].marks) > 50 && parseInt(students[i].marks) <= 60){
        students[i].marks = "E"
    }
    else{
        students[i].marks = "F"
    }

}
let map = new Map();
for (let i in students){
    map.set(students[i].name,students[i].marks)
}
console.log(map)
let A = [];
let B = [];
let C = [];
let D = [];
let E = [];
let F = [];
for(let i in students){
    if(students[i].marks == "A"){
        A.push(students[i]);
    }
    else if(students[i].marks == "B"){
        B.push(students[i])
    }
    else if(students[i].marks == "C"){
        C.push(students[i])
    }
    else if(students[i].marks == "D"){
        D.push(students[i])
    }
    else if(students[i].marks == "E"){
        E.push(students[i])
    }
    else{
        F.push(students[i]);
    }
}
let obj = {
    'A' : A,
    'B' : B,
    'C' : C,
    'D' : D,
    'E' : E,
    'F' : F
};
console.log(obj)






