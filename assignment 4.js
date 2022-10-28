let matchhouse =(number) => {
    let squares = number;
    let triangles = number;
    let square_sides = number * 4;
    let triangle_sides = number * 3;
    let sum = square_sides + triangle_sides;
    let value = (squares + triangles) - 1;
    let result = (sum - value);
    return result;
}
let matchSticks = matchhouse(1);
console.log(matchSticks);