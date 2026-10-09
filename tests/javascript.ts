
let prices = ["100", "200", "300"];

let numericPrices = prices.map(price => Number(price));

console.log(numericPrices);

let num = [1, 4, 6, 8];

let result = num.map(n=>n*5);

let result1 = num.filter(n=>n%2===0);

console.log(result);
console.log(result1);

for (let k of num) {
    console.log(k); 
}


const highest: Record<string, number> = {
    Rama: 100,
    Krishna: 200,
    Girish: 300
};

for (const key in highest) {
    console.log(key, highest[key]);
}

console.log(Object.values(highest).filter((value) => value > 150));



//for of is for the values of the array and for in is for the keys of the array

let users = [
    { id: 1, name: "Rama" },
    { id: 2, name: "Krishna" },
    { id: 3, name: "John" }
];

let user = users.find(u => u.id === 2);

console.log(user);

let numbers = [10, 20, 30, 40];

let index = numbers.findIndex(num => num === 30);

console.log(index);

let numbers4 = [10, 20, 30];

console.log(numbers4.some(num => num > 25));
console.log(numbers4.every(num => num > 25));

[1, 2, 3].forEach(x => {
    console.log(x * 2);
});


let str2Value = "RAMA KRISHNA IS";

console.log(str2Value.charAt(6));
console.log(str2Value.toLowerCase());

console.log(str2Value.split('').reverse().join(''));

const num4 = 3242342;
console.log(num4.toString().split('').reverse().join(''));

let reversedStr = "";
for (let i = str2Value.length - 1; i >= 0; i--) {
    reversedStr += str2Value[i];
}
console.log(reversedStr);

let Nonrepeatfirst ="";
let secondnonrepeat = "";
for (let i = 0; i < str2Value.length; i++) {
    if (str2Value.indexOf(str2Value[i]) === str2Value.lastIndexOf(str2Value[i])) {

        Nonrepeatfirst = str2Value[i];
        break;
    }   
}
    console.log(Nonrepeatfirst);

    for (let j = str2Value.indexOf(Nonrepeatfirst + 1); j < str2Value.length; j++) {
        if (str2Value.indexOf(str2Value[j]) === str2Value.lastIndexOf(str2Value[j])) {
            secondnonrepeat = str2Value[j];
            break;
        }
    }
    console.log(secondnonrepeat);
