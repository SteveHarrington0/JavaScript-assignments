

// 1.

// const prompt = require("prompt-sync")({sigint:true});
// let no_of_elm;
// do{
//     no_of_elm = prompt("enter no of elements");
// }
// while(no_of_elm <= 0);
// let array = [];
// for (let i = 0; i < no_of_elm; i++){
//     array[i] = parseInt(prompt("enter element"));
// }
// let gcd = [];
// let odd_counter = 0;
// let even_counter = 0;
// let odd_sum = 0;
// let even_sum = 0;
// let largest = 0;
// let set_odd = new Set();
// let set_even = new Set();
// array.forEach((element)=>{
//     if (element % 2 != 0){
//         odd_sum += element;
//         odd_counter ++;
//     }

//     else{
//         even_counter ++;
//         even_sum += element;
//     }
// for (let i = 1; i <= odd_sum; i++){
//     if (odd_sum % i === 0){
//         set_odd.add(i);
//     }
// }
// for (let j = 1; j <= even_sum; j++){
//     if(even_sum % j === 0){
//         set_even.add(j);
//     }
// }

// })
// set_even.forEach((elements)=>{
//     if (set_odd.has(elements)){
//         gcd.push(elements);
//     }
// })
// gcd.forEach((elements)=>{
//     if (elements > largest){
//         largest = elements
//     }
// })
// let average = (odd_sum + even_sum) / (odd_counter + even_counter);
// console.log(`difference${odd_sum - even_sum}`);
// console.log(`odd elements${odd_counter}`);
// console.log(`even elements${even_counter}`);
// console.log(`Average = ${average}`);
// console.log(`GCD ${largest}`);





//2.


// const prompt = require("prompt-sync")({sigint:true});
// let is_present = false;
// let is_present2 = false;
// let no_of_elm1;
// let no_of_elm2;
// do{
//      no_of_elm1 = prompt("enter no of elements of array 1   ");
// }
// while(no_of_elm1 <= 0);
// do{
//      no_of_elm2 = prompt("enter no of elements of array 2   ")
// }
// while(no_of_elm2 <= 0)
// let array1 = [];
// let array2 = [];
// for (let i = 0; i < no_of_elm1; i++){
//     array1[i] = parseInt(prompt(` enter element no ${i} of array 1  `))
// }
// for (let i = 0; i < no_of_elm2; i++){
//     array2[i] = parseInt(prompt(` enter element no ${i} of array 2  `))
// }
// for (let i = 0; i < array1.length; i++){
//     if (array1[i] === 4){
//         is_present = true;
//         break;
//     }
// }
// for(let i = 0; i < array2.length; i++){
//     if(array2[i] === 4){
//         is_present2 = true;
//         break;
//     }
// }

// if(is_present && is_present2){
//     console.log("4 present in both arrays")
// }
// else if(is_present){
//      console.log("4 present in array 1 only")
// }
// else if (is_present2){
//     console.log("4 present in array 2 only")
// }
// else{
//     console.log("4 is not present in both arrays")
// }



// 3.




// let array = [1,4,6,[1,3,[2,6,[4,6],[7,9]]]];

// let flatter = (array)=>{
//     let backup = [];
//     let object_count = 0;

//    for (let i of array){
//     if (typeof i == "object"){
//         object_count++;
//     }
//    }
//    if (object_count === 0){
//     return array
//    }

//    else{ 
//         for (let i = 0; i < array.length; i++){
//             if (typeof array[i] == "object"){
            
//                 array[i].forEach((elements)=>{
//                     backup.push(elements);
//                 })
//             }
//             else{
//                 backup.push(array[i]);
//             }
//         }
//         array = backup
//         return flatter(array);
//     }
    
// }
// let result = flatter(array);
// console.log(result)




//4.



// const prompt = require("prompt-sync")({sigint:true});
// let no_of_elm;
// do{
//     no_of_elm = prompt("enter no of elements");
// }
// while(no_of_elm <= 0);
// let array = [];
// for (let i = 0; i < no_of_elm; i++){
//     array[i] = parseInt(prompt("enter element"));
// }
// array.sort();
// let set = new Set();
// let duplicate = [];
// let wout = [];
// let set_all = new Set()
// for (let i = 0; i < array.length; i++){
//     if (array[i] === array[i+1]){
//         set.add(array[i]);
//         set_all.add(array[i])
//     }
//     else{
//         set_all.add(array[i]);
//     }
// }
// set_all.forEach((Element)=>{
//     wout.push(Element)
// })
// set.forEach((Element)=>{
//     duplicate.push(Element)
// })
// console.log(`Duplicate Elements = `,duplicate)
// console.log(`Array without Duplicate Elements = `,wout)




// 5.



// function thirdLargest(arr, arr_size)
// {
// /* There should be
// at least three elements */
// if (arr_size < 3)
// {
// document.write(" Invalid Input "); return;
// }
// let first = arr[0];

// for (let i = 1; i < arr_size ; i++){
//     if (arr[i] > first){
//         first = arr[i];
//     }
// }

// let second = Number.MIN_VALUE; 
// for (let i = 0; i < arr_size ; i++){
//     if (arr[i] < first && arr[i] > second){
//         second = arr[i];
//     }
// }
// let third = Number.MIN_VALUE; 
// for (let i = 0; i < arr_size ; i++){
//     if (arr[i] > third && arr[i] < second){
//     third = arr[i];
//     document.write("The third Largest " + "element is ", third); 
//     }
// }
// }

// let arr = [12, 13, 1,45,56, 10, 34, 16];
// let n = arr.length;
// thirdLargest(arr, n);

