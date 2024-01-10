/**Q1. Write a program that grade student based on their marks */

let marks = 45

if(marks > 90){
    console.log("A Grade");
}else if(marks >= 70 && marks <= 90){
    console.log("B Grade");
}else if(marks >= 50 && marks < 70){
    console.log("C Grade");
}else{
    console.log("F Grade");
}

/**Q2. Generate numbers between any 2 given numbers.*/

const num1 = 20;
const num2 = 25;

for(let number = num1;number <= num2;number++){
    console.log(number);
}

// Question 3

let number = 0;

let result = number > 0 ? "positive" : number < 0 ? "negative" : "zero" ;
console.log(result);

//Question 4

// comma operator can be used in array for separating the elements, used in delcaring multiple elements and used for printing the multiple values.

let arr = [1,2,23,4];
let a = 2, b = 34, c = 89
console.log("Print a,b,c", a,b,c);

// Question 5

let username = "admin";
let password = "12345";

if(username === "admin" && password == "12345"){
    console.log('Login Successful')
}else{
    console.log('Invalid credentials');
}

// Question 6

let paymentMethod = 'debit'

switch(paymentMethod){
    case 'credit':
        console.log('Processing fee is 2%');
        break;
    case 'debit':
        console.log('Processing fee is 1.5%');
        break;   
    case 'paypal':
        console.log('Processing fee is 3%');
        break;    
    default:
        console.log('Please enter a valid payment method');    
}

// Question 7

let currTemp = 45;
let weatherCondition = currTemp > 30 ? "Hot" : "Moderate";
console.log('Weather condition :', weatherCondition)

// Question 8
let n = 20;
let sumOfNum = 0;
let i = 1
do{
    sumOfNum = sumOfNum + i
    i++
}while(i<=n)

console.log(sumOfNum);