
// Pattern

let sum = "";
let counter = 0;
let n = 4;
for (let i = 1; i <= n; i++){
    for (let j = 1; j <= i; j++){
        sum = sum + " " + (counter + 1);
        counter ++;
    }
    sum = sum + "\n";
}
console.log(sum);


// Armstrong number


let number = 153;
let count = 0;
let i = number;
    for (i = number; i >= 10;){
        let remainder = i % 10;
        count += ((remainder) ** 3);
        i = parseInt(i / 10);
    }

count = count + ((i) ** 3);
if (count === number){
    console.log("Armstrong number");
}
else{
    console.log("Not an Armstrong number");
}

// Special number

let spn = 145;
let count1 = 0;
let m;
for(m = spn; m >= 10;){
    let remainder1 = m % 10;
    let count2 = 1;
    if (remainder1 === 0){
        count2 = 1;
    }
    else{
        while(remainder1 != 0){
            count2 *= remainder1;
            remainder1 --;
        }
}
    count1 += count2;
    m = parseInt(m / 10)
}
let count3 = 1;
while(m != 0){
    count3 *= m;
    m--
}
count1 += count3;
if(count1 === spn){
    console.log("Special number")
}
else{
    console.log("not a speacial number")
}


