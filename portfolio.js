alert("Hello world");
document.body.style.background="red";



//String methods allows to manipulate and work with text
let userName="Subashree";
let phoneNumber = "123-456-7890";
//console.log(userName.length);
//console.log(userName.indexOf("u"));
//console.log(userName.charAt(0));
//console.log(userName.lastIndexOf("o"));
userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();
userName = userName.repeat(3);
let result = userName.startsWith(" ");
//let result = userName.endsWith(" ");
//let result = userName.includes(" ");
//phoneNumber = phoneNumber.replaceAll("-", "");
phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);

//String slicing , creating substring from a portion of another string
const fullName = "Bro Code";

let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 8);

console.log(firstName);
console.log(lastName);

//function - section of reusable code . declare code once use it whenever you want
//call the function to execute the code

function happyBirthday(userName,age)
{
    console.log(`happy bday to dear ${userName}!you are ${age} years old`);

}
happyBirthday("Subashree",30);

function add(x,y)
{
    let result = x+y;
    return result;
}

console.log(add(1,4));

function subtract(x,y)
{
    return x-y;
}

function isEven(number)
{
   return number%2===0?true:false;
}
console.log(isEven(12));

function isValid(email)
{
    return email.includes("@")?true:false;
}
console.log(isValid("Sub@gmail.com"));


//variable scope - local scope /global scope
let x=3;
function function1(x)
{
    //let x=1;
    console.log(x);
}

function function2(x)
{
    //let x=2;
    console.log(x);
}
function1(x);
function2(x);

//spread operator -> ...allows an iterable  such as an  array or string to be expanded into separte elements
//unpacks the elements
let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);

let letters =[...userName];
console.log(letters);


let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);

//rest parameters ->...rest allows a function work with a variable  number of arguments by bunding them into array
//spread -> expands an array into sepearte elements 
//rest->bundles seperate elements into array

const food1 ="pizza";
const food2="hamburger";
const food3 ="hot dog";
const food4="sushi";
const food5="ramen";


function openFridge(...foods)
{
    console.log(...foods);
}

function getFood(...foods)
{
    return foods;
}

openFridge(food1, food2, food3, food4, food5);

const food =getFood(food1, food2, food3, food4, food5);


function sumofNumbers(...numbers)
{
    let result =0;
    for(let number of numbers)
    {
        result+=number;
    }
    return result;
}
const sumTotal=sumofNumbers(1,2,3,4,5,6);
console.log(sumTotal);


//callback - a function that is passed as an argument to another function
   //used to handle asynchrnous operation
   //1.Reading a file
   //2.Network requests
   //3.Interacting with database


function hello(callback)
{
    setTimeout(function()
{
console.log("Hello");
callback();
},1000);
}

function goodBye()
{
    console.log("Good bye");
}
hello(goodBye);

function sum(callback,x,y)
{
    let result = x+y;
    callback(result);
}

function displayConsole(result)
{
    console.log(result);
}

sum(displayConsole,27,3);
function displayPage(result)
{
    document.getElementById("myH1").textContent=result
}
sum(displayPage,89,90);


//for each() method used to iterate over the elements
//of an array and apply a specified function callback
// to each element callback(element, index, array)

const nums =[1,2,3,4,5];
nums.forEach(double);
nums.forEach(display);

function double (element,index,array)
{
    array[index]=element*2;
}

function display(element){
    console.log(element);
}














































