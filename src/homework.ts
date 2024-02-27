// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: an array of booleans (boolean[])

let d = {age: number};
// A: an object with one key 'age' and value of any type

let e = [3]
// A: an array of number types (number[])

let f;
// A: any

let g = []
// A: an array of any types



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: it is expecting the object to have a value for releaseYear but didn't get one

let prices = [100, 200, 300];
prices[0] = '$100';
// A: Since the prices array is assumed to be an array of numbers, it cannot assign something, '$100',
// that is a type string to the array

function myFunc(a: number, b: number): number {}
// A: The function says it is going to return a number but it doesn't return one (nothing is in the curly brackets)
// Also, a and b are defined but not used, so that will be another error.


// CODEWARS

//1. Highest and Lowest

function highAndLow(numbers){
    let arr = numbers.split(' ');
    for (index in arr) {
      arr[index] = parseInt(arr[index]);
    }
    console.log(arr)
    max = Math.max(...arr)
    min = Math.min(...arr)
    return `${max} ${min}`;
  }

//2. Get the Middle Character

function getMiddle(s){
    if (s.length % 2 == 0){
        const middle = s.length/2;
        return s.splice(middle-1, middle+1);
    } else {
        const middle = Math.floor(s.length/2);
        return s[middle];
    }
}