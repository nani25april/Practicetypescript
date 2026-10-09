

const string = 'Hello, World!';


// program for first non-repeating character:
let nonRepeatFirst = '';


console.log(string.indexOf(string[0]));

for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
        nonRepeatFirst = string[i];
        break;
    }

    for(let j=string.indexOf(string[i]); j<string.length; j++)

        
}

console.log(nonRepeatFirst);



let firstrep = "";

for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
        firstrep = string[i];
        break;
    }
}

console.log(firstrep);





