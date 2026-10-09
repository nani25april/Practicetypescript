const str1 = 'automation';

console.log(str1.substring(0, 3));

console.log(...str1);

// Program to find first non-repeating character in a string

// Here is a simple program in JavaScript to find the first non-repeating character in a string:       

let str2: string = "RAMA KRISHNA IS";

console.log(str2.charAt(6));
console.log(str2.toLowerCase());

console.log(str2.length);


/*
//1st non-repeating character
function firstNonRepeatingCharacter(str: string): string | null {
    const charCount: { [key: string]: number } = {};    


    // Count the occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }   

    // Find the first character with a count of 1

    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }   



    }    return null; // Return null if no non-repeating character is found
}           
*/
            