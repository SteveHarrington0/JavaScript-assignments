
// 1.

// let map = new Map();
// map.set("id",[12,56,90]);
// map.set("name",["tony","steve","bruce"]);
// map.set("salary",[75000, 82000, 98000]);
// let len = map.get("name");
// let ids = map.get("id");
// let names = map.get("name");
// console.log(map.get("id"))
// console.log(len.length)
// for (let i = 0; i < len.length; i++){
//     console.log(ids[i],":",names[i] )
// }
// let salaries = map.get("salary")
// console.log(salaries);
// let result = salaries.reduce((accumulator,curent_value)=>{
//             return accumulator + curent_value;
// },0)
// console.log(result / salaries.length);


// 2. 

// let map = new Map();
// map.set("id",["N170799","N170899","N170999"]);
// map.set("names",["Bruce Wayne", "Tony Stark", "Peter Parker"]);
// map.set("scores",[90,56,78]);
// let getnames = map.get("names");
// console.log(getnames);
// let result = map.values()
// console.log("------one parameter-------")
// for(let i of result){
//     console.log(i)
// }
// let empty =[];
// let keyss = map.keys();
// for (let i of keyss){
//     empty.push(i)
// }
// console.log("-------two parameters--------")
// for (let i = 0; i < empty.length; i++){
//     let str = empty[i];
//     console.log(empty[i], " " , map.get(str))
// }
// console.log("------three parameters-------")
// for (let i = 0; i < empty.length; i++){
//     let str = empty[i];
//     console.log(empty[i], " " , map.get(str))
//     console.log(map)
// }



// 3.


// let array = [1, 2, 3, 4, 5 ];
// let map = new Map();
// array.forEach((nums)=>{
//     map.set(nums,Math.pow(nums,2))
// })
// let empty_array = []
// map.forEach((elements)=>{
//     empty_array.push(elements)
// })
// console.log(empty_array)



    




