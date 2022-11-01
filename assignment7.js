
// // 1. Truncate

// let truncate = (string1)=>{
//     let empty = [];
//     for (let i in string1){
//         empty.push(string1[i]);
//     }
//     if (empty.length > 4){
//         empty.splice(4);
//     }
//     empty = empty.join("");
//     return empty;
// }
// console.log(truncate("icecream"))

// // 2. Removing spaces

// let remove_spaces = (words)=>{
//     let empty2 = [];
//     for (let j in words){
//         empty2.push(words[j])
//     }
//     console.log(empty2)
//     for(let m = 0; m < empty2.length; m++){
//         if (empty2[m] == " "){
//             empty2.splice(m,1); // every time we splice lenght will be decreases and results in skiping some spaces so whenever we splice a space we should decrement the m by 1 so that it can unble to skip
//             m--; 
//         }
//     }
//     empty2 = empty2.join("");
//     return empty2;
// }
// console.log(remove_spaces("gopi vanama    ramau vanam agh hughjhghdsb sduyiuasydi"))



// // 3. Replace

// let replace = (string2) =>{
//     let empty3 = [];
//     let empty4 = [" "];
//     for (let k in string2){
//         empty3.push(string2[k])
//     }
//     let index = 0;
//     for (let i = 0; i < empty3.length; i++){
//         if (empty3[i] == " " ){
//                 index = i;
//                 for (let n = index + 1; n < empty3.length; n++){
//                     empty4.unshift(empty3[n]);
//                 }
//                 empty3.splice(i)
//                 empty3.unshift(" ");
//                 for (let b in empty4){
//                     empty3.unshift(empty4[b]);
//                 }
//                 empty3 = empty3.join("");
//                 return empty3;
//             }
//         }
//     return "not the expected format";
// }

// console.log(replace( "gopi vanama"))


// 4. Replacing A with X;

// let replace_char = (s)=>{
//     let empty = [];
//     for (let i of s){
//         empty.push(i);
//     }
//     for (let i in empty){
//         if (empty[i] == "a" || empty[i] == "A"){
//             empty.splice(i,1,"x")
//         }
//     }
//     empty = empty.join("");
//     return empty;
// }
// console.log(replace_char("apple"))






// 5. split("") method is used to convert string into an array
//    converts string into array of characters.



// 6. to break string to a new line we use \n





// 7. match("text here") is used to check the occurence of a specific text
//    and gives output of index number of the text's first character




// 8. Lowercase



// let lowercase = (string1)=>{
//     let letter = string1.charCodeAt(0);
//     if (letter >= 97 && letter <= 122){
//         return "lowercase"
//     }
//     else 
//         return "not lowercase"
// }
// let result = lowercase("zopi");
// console.log(result)




// 9.  I will convert the whole string into either 
//     upper case or lower case by string methods toUpperCase & toLowerCase.




// 10.
    let s = "string";

// to uppercase

    let upper = s.toUpperCase();
    console.log(upper);

// first letter to uper


    let first = s.charAt(0).toUpperCase() + s.slice(1); // slice copy the text from s string from index position 1;
    console.log(first);


// to lowercase
    let lower = s.toLowerCase();
    console.log(lower);


// breaking string into two halves and swapping


    let length = parseInt(s.length / 2);
    let split1 = s.substr(length);
    let split2 = s.substr(0,length);
    let combine = split1 + split2;
    console.log(combine)


// count repeating characters

let duplicate = (string4)=>{
    let count = 1;
    for (let i = 0; i < string4.length; i++){
        if(string4[i] == string4[i+1]){
            count++
        }
        else {
            console.log(`${count}`,string4[i]);
            count = 1;
        }
    }
}
let sorted = s.split("");
let final = sorted.sort();
let final_string = final.join("");
duplicate(final_string);

//Reversing the string

let reverse = s.split("")
let empty_array = [];
for (let i of reverse){
    empty_array.unshift(i);
}
empty_array = empty_array.join("");
console.log(empty_array)