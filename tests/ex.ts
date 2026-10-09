const str4 = 'automation';

console.log(str4.substring(0, 3));

let revstr = '';

for (let i = str4.length - 1; i >= 0; i--) {
    revstr += str4[i];
}

console.log(revstr);


let str5 = 4593453;

console.log(str5.toString().split('').reverse().join(''));

let rev1 = '';



function revere(num: number) {
    let rev = 0;
    while(num > 0)

        {
           
            rev = rev * 10 + num % 10;
            num = Math.floor(num / 10);
        }
    return rev;

        }


console.log(revere(8749873));
