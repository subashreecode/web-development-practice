alert("Hello world");
document.body.style.background="red";



//String methods allows to manipulate and work with text
let userName="Subashree";
let phoneNumber = "123-456-7890";
console.log(userName.length);
console.log(userName.indexOf("u"));
console.log(userName.charAt(0));
console.log(userName.lastIndexOf("o"));
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
//forEach automatically passes (element, index, array),
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


//map - it accepts the callback and applies that function to each element of an array, then return new array

const num = [1,2,3,4,5];
const squares = numbers.map(square);

console.log(squares);

function square(element)
{
    return Math.pow(element,2);
}

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);

function upperCase(element)
{
    return element.toUpperCase();
}
console.log(studentsUpper);

//filter - creating a new array by filtering out elements
let nos = [1,2,3,4,5,6,7];
let evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);

function isEven(element)
{
    return element %2==0;
}

//reduce - reduces the elements of a array to single value
//reduce() automatically passes accumulator, current element,index, array

const prices =[5,30,10,25,15,20];

const total = prices.reduce(sum);
console.log(`${total.toFixed(2)}`);

function sum(accumulator, element)
{
    return accumulator+element;
}

//function expression - a way to define function as values or variables
//1.callbacks in asynchronous operations
//2.high order function
//3.clousres
//4.event listeners
const fnos= [1,2,3,4,5];

const cube = fnos.map(
function cube(element)
{
    return Math.pow(element,3);
});

console.log(cube);


const seasonFruits = [{name:"apple",color:"red",calories:95},
    {name:"orange",color:"orange",calories:45},
    {name:"banana",color:"yellow",calories: 105},
    {name:"coconut",color:"white", calories: 159},
    {name:"pineapple",color:"yellow",calories:200}
]

//access properties of fruit object
console.log(seasonFruits[0].calories);

//Add new fruit
seasonFruits.push({name:"grapes",color:"purple",calories:62});
console.table(seasonFruits);


//Remove last fruit object
seasonFruits.pop();
console.table(seasonFruits);

//Remove fruit object by indices
seasonFruits.splice(1,2);
console.table(seasonFruits);

seasonFruits.forEach(fruit=>console.table(fruit));
seasonFruits.forEach(fruit=>console.log(fruit.color));
seasonFruits.filter(byColor);

function byColor(fruit)
{
    console.log(fruit.name,fruit.color);
}

seasonFruits.map(byColor);


const yellowFruits= seasonFruits.filter(fruit=>fruit.color==="yellow");
const lowCalFruits = seasonFruits.filter(fruit=>fruit.calories<100);
const highCalFruits=seasonFruits.filter(fruit=>fruit.calories>=100);

//need to revisit
//const maxFruit = seasonFruits.reduce((max,seasonFruits)=>seasonFruits.calories>max.calories?fruit:max);


const fruitsArray = [{name: "banana",color: "yellow"},{name: "apple", color: "red"},{name: "grapes", color:"purple"}];


//Access properties of fruit object
console.table(fruitsArray[0]);
console.table(fruitsArray[0].color);


//Adding new fruit object
console.table(fruitsArray.push({name: "kiwi",color: "green"}));

//Remove last fruit object
console.table(fruitsArray.pop);

fruitsArray.forEach(fruits=>console.table(fruits));

//sort() method used to sort elements of an array in place.
//sorts elements as strings in lexicographic order , not alphabetical
//lexicographic =(alphabet+numbers+symbol) as strings
const sortNumbers = [1,10,2,9,3,8,4,7,5,6];
sortNumbers.sort((a,b)=>b-a);//forward//desc

sortNumbers.sort((a,b)=>a-b);//reverse//asc
console.log(sortNumbers);

const people = [{name:"Spongebob",age:30,gpa:3.0},{name:"patrick",age:29,gpa:2.5},{name:"Sandy",age:45,gpa:6.7}];
people.sort((a,b)=>a.age-b.age);
console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name)); //FORWARD//desc
people.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE//asc

console.log(people);

























































