import {getArea,getVolume,getCircumference,PI} from './mathUtils.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(3);
console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
//Closure() - A function defined inside of another function, the inner function has access 
// to variables and scope of outer function. Allow for private variables and state maintenance 
//used frequently in JS framework :React, Vue, Angular
function outer()
{
    let message ="Hi Dude";
    console.log(message);
    function inner()
    {
        console.log(message);
        console.log("Hello from inner");
    }
    //inner();
}
outer();
function createCounter()
{
let count=0;
function increment()
{
    //let count=0;
    count++;
    console.log(`count increment ${count}`);
}
function getCount()
{
    return count;

}
return {increment,getCount};
//instead of writing like this moving count outside the function because closure has state maintenance
//increment();
//increment();
}
const counter = createCounter();
counter.increment();
counter.increment();

//count=0;
//console.log(count);
console.log(counter.getCount());
function calculateScore()
{
let score =0;
function increaseScore(points)
{
    score+=points;
    console.log(`${points}pts`);
}
function decreaseScore(points)
{
    score-=points;
    console.log(`-${points}pts`);
}
function getScore()
{
    return score;
}
return {getScore,increaseScore,decreaseScore};
}
//score = 1000;
const countScore= calculateScore();
countScore.increaseScore(3);
countScore.decreaseScore(1);

console.log(`the final score is ${countScore.getScore()}`);


//synchronous = Executes line by line conseccutively in a sequential manner 
//code that waits for an operation to complete.

//asynchronous = Allows multiple operations to be performed concurrently without waiting 
//doesnt block execution flow and allows the program to continue ((I/O) operations,network requests,fetching data)
//Handled with : callbacks , promises,Async/wait



//Ex1: synchronous
console.log("task1");
console.log("task2");
console.log("task3");

//Ex2: async
function funct1 (callback)
{
setTimeout(()=>
console.log("Async task1"),callback(),1000);

};
function funct2()
{
console.log("async task2");
console.log("async task3");
console.log("async task4");
}

funct1(funct2);


//Error - An object that is created to represent a problem that occurs often with user input or establishing connection
//NETWORK ERRORS
//PROMISE REJECTION
//SECURITY ERRORS
// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//                    ex. close files, close connections, release resources
try{
console.lag("Hello");
}
catch(error)
{
    console.log(error);
}
finally{
    //CLOSE FILES
    //CLOSE CONNECT
    //RELEASE RESOURCES
    console.log("This always executes");
}
console.log("You have reached end!");

try
{
const dividend = Number(window.prompt("Enter a dividend"));
const divisor = Number(window.prompt("Enter a divisor"));
if(divisor==0)
{
    throw new Error ("You can't divide by Zero");
}
if(NaN(dividend)|| isNaN(divisor))
{
   throw new Error ("Value is not a number");
}

const result = dividend/divisor;
console.log(result);
}catch(error)
{
    console.error(error);
}

//DOM - Document Object Model Object{} that represents the page you see in the web browser
//and provides you with an API to interact with it.
//Web browser constructs the DOM when it loads an HTML document
//and structures all elements in tree like representation.
//Java script can access the DOM to dynamically change the content , structure,and style of web page.


console.log(document);
console.dir(document);

document.title = "My website";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

const username = "";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest` : username;






