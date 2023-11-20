// Practical task 1
const numbers = [2, 3, 4, 5];
let product = 1;
let i = 0;

for(let number of numbers) {
    product *= number;
};

while (i < numbers.length) {
    product *= numbers[i];
    i++;
};

// Practical task 2
for(let i = 0; i <= 15; i++) {
    if(i % 2 === 0) console.log(`${i} is even`)
    else console.log(`${i} is odd`);
};

// Practical task 3
function randArray(amount){
    let arr = [];
    for(let i = 0; i < amount; i++){
        arr.push(Math.floor(Math.random() * (500 - 1) + 1));
    };
    return arr;
};

// Practical task 4
function raiseToDegree(a, b) {
    if(Number.isInteger(a) && Number.isInteger(b)) return a ** b;
};

let a = Number(prompt('Please, enter the INT Number'));
let b = Number(prompt('Please, enter the INT Number'));

console.log(raiseToDegree(a, b));

// Practical task 5
function findMin(){
    let minValue = arguments[0];
    for(let i = 0; i < arguments.length; i++){
        if(minValue > arguments[i]) {
            minValue = arguments[i];
        };
        continue;
    };
    return minValue;
};

// Practical task 6
function findUnique(array) {
    for (let i = 0; i < array.length;) {
        let element = array[0];
        array.shift();
        if(array.includes(element)) return false;
    }; return true;
}

// Practical task 7
function lastElement(arr, number = 1) {
    return arr.slice(arr.length - number, arr.length);
};

// Practical task 8
function convertFirstLetter(string) {
    let arrayFromString = string.split(' ');
    index = 0;
    for(let word of arrayFromString) {
        let arrayFromWord = word.split('');
        arrayFromWord[0] = arrayFromWord[0].toUpperCase();
        word = arrayFromWord.join('');
        arrayFromString[index++] = word;
    };
    return arrayFromString.join(' ');
}

