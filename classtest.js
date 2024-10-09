Q1 Grade Calculation: Write a function that takes a numerical score (0-100) as an argument and returns a letter grade (A, B, C, D, or F) based on the standard grading scale.
let marks =100;
if (marks>90){
    console.log("grade A");
}
else if (marks>80 && marks <90){
    console.log("grade B");
}
else if (marks>70 && marks <80){
    console.log("grade C");
}
else if (marks>60 && marks <70){
    console.log("grade D");
}
else if (marks>50 && marks <60){
    console.log("grade E");
}
else {
    console.log("grade F");
}
Q2 Odd Numbers with while Loop: Use a while loop to print all odd numbers from 1 to 50.
Ans
 let i = 1;

while (i <= 50) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}


Q3 Array Methods: What will the following code output?
javascript
Copy code in
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2ghgfghhfg
console.log(doubled);
Ans const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2);
    console.log(doubled);
OUTPUT:-[ 2, 4, 6, 8, 10 ]


Q4 String Methods: How can you check if a string contains a specific substring? Provide an example using the string "Hello, World!".
Ans let str = "Hello, World!";
let substring = "World";
let containsSubstring = str.includes(substring);
console.log(containsSubstring); 
Output:- true


Q5 Ob0jects: How do you add a new property to an existing object? Provide an example object and show how to add a property called age.
Ans let person = {
    name: "kanchan maurya",
    city: "sangam vihar",
    
};
person['age'] = 24;

console.log(person);


Q6 Functions: Write a function called sum that takes two parameters and returns their sum. What will sum(5, 10) return?
Ans function sum(a, b)
{
    return a+b;
}
console.log(sum(5,10));


Q7 this Keyword: Explain how the this keyword behaves in a method of an object. Provide an example using an object that has a method.
let person = {
    name: "kanchan maurya",
    age: 24,
    greet: function() {
      
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
 
  person.greet(); 
  

Q10 given an array, the task is to cyclically rotate the array clockwise by one time.
Examples:
Input: arr[] = {1, 2, 3, 4, 5}
Output: arr[] = {5, 1, 2, 3, 4}
Input: arr[] = {2, 3, 4, 5, 1}
Output: {1, 2, 3, 4, 5}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 4, 5, 1];
function rotateArray(arr) {
    if (arr.length === 0) return arr;
     let  lastElement = arr[arr.length - 1];

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;

    return arr;
}
console.log(rotateArray(arr1)); 
console.log(rotateArray(arr2)); 



Q11 For a given two-dimensional integer array/list ‘ARR’ of size (N x M), print the ‘ARR’ in a sine wave order, i.e., print the first column top to bottom, next column bottom to top, and so on.
For eg:-
The sine wave for the matrix:-
1 2
3 4
will be [1, 3, 4, 2].
Ans 
let arr = [
    [1, 2],
    [3, 4]
];

function SineWave(arr) {
    
    if (arr.length === 0 || arr[0].length === 0) {
        return []; 
    }

    let R = arr.length;      
    let C = arr[0].length;   
    let result = [];        

    
    for (let col = 0; col < R; col++) {
        if (col % 2 === 0) {
            
            for (let row = 0; row < C; row++) {
                result.push(arr[row][col]);
            }
        } else {
            
            for (let row = R- 1; row >= 0; row--) {
                result.push(arr[row][col]);
            }
        }
    }

    return result; 
}
const sineWaveOutput = SineWave(arr);
console.log(sineWaveOutput);
