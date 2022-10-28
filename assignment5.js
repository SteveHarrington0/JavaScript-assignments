class cylinder{
    constructor(radius, height){
        this.volume = (3.14 * (radius ** 2) * height).toFixed(4);
    }
    get_volume(){
        return this.volume;
    }
}
class sphere extends cylinder{
    constructor(radius, height,volume){
        super(volume)
        this.volume = ((4 / 3) * 3.14 * (radius ** 3)).toFixed(4);
    }
}
class cone extends cylinder{
    constructor(radius, height, volume){
        super(volume);
        this.volume = ((3.14 * (radius ** 2) * height) / 3).toFixed(4);
    }
}
let obj1 = new cylinder(4,7);
let result = obj1.get_volume();
let obj2 = new sphere(5,8);
let result2 = obj2.get_volume();
let obj3 = new cone(9,7);
let result3 = obj3.get_volume();
console.log(result3);
console.log(result2);
console.log(result);