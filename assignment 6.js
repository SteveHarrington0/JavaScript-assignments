
// Area of Rectangle & Square

class rectangle{
    constructor(length, breadth){
        this.area = length * breadth
    }
    get_area(){
        return this.area;
    }
}
class square extends rectangle{
    constructor(side,area){
        super(area);
        this.area = side * side;
    }
}
let rectangle1 = new rectangle(6,7);
let square_area = new square(5);
let result = rectangle1.get_area();
let result2 = square_area.get_area();
console.log(result);
console.log(result2);



// Finding Largest number


function find_largest(number){
    let array = [3,45,6,7,23,5,7,8];
    for (let i = 0; i < array.length; i++){
        for (let j = i +1; j < array.length; j++){ //sorting the eliments in decending order
            if (array[j] > array[i]){
                let temp = array[i];
                array[i] = array[j];
                array[j] =  temp;
            }
        }
    }
    let result = array[number-1]
    return result;
}
let value = find_largest(8);
console.log(value);



//compute Dash


function computeDash(num){
    let string1 = num.toString();
    let empty = [];
    for (let i of string1){
        empty.push(i);
    }
    for(let j = 0; j < empty.length - 1; j++){
        if(empty[j] % 2 === 0 && empty[j + 1] % 2 === 0){
            empty.splice(j+1,0,"-")
        }
    }
     empty = empty.join(""); //joins the string without commas
     return empty;
    

}

let resulted = computeDash("025468") //If the number which is taling as a parameter is having a leading zero it should passed as string otherwise zero is being elinating.
console.log(resulted)
