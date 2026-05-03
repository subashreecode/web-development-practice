//Event Listener => listen for specific events to create intercative web pages events : click,mouse over ,mouse out . 
// addevent Listener (event,callback);, anonymous function, arrow functions

const myBox = document.getElementById("myBox");
function changeColor(event)
{
    console.log(event);
    event.target.style.backgroundColor ="tomato";

}
//myBox.addEventListener("click",changeColor);
myBox.addEventListener("click",function(event)
{

event.target.style.backgroundColor ="tomato";
event.target.textContent="Ouch😒";
});

myBox.addEventListener("mouseover",event=>
{
    event.target.style.backgroundColor="yellow";
    event.target.textContent="Dont do it";
});

myBox.addEventListener("mouseout",event=>
{
  event.target.style.backgroundColor="green";
  event.target.textContent="Mouse out";
}
);

//key events = listen for specific events to create interactive web pages events 
// :key down, keyup,document.addEventListener(event,callback);

document.addEventListener("keydown",event=>
{
   console.log(`key ${event.key}`);
}
);

document.addEventListener("keyup",event=>
{
  console.log(`key ${event.key}`);
}
);
const myBox = document.getElementById("mySmileyBox");
const moveAmount =10;
let x=0;
let  y=0;
document.addEventListener("keydown",event=>
{

    if(event.key.startsWith("Arrow"))
    {
        switch(event.key)
        {
            case "ArrowUp":
                y=y-moveAmount;
                console.log(y);
                break;
            case "ArrowDown":
                y=y+moveAmount;
                console.log(y);
                break;
            case "ArrowLeft":
                x=x-moveAmount;
                console.log(x);
                break;
            case "ArrowRight":
                x=x+moveAmount;
                console.log(x);
                break;
        }
        myBox.style.top=`${y}px`;
        myBox.style.left=`${x}px`;
    }
}
);


const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click",event=>
{
if(myImg.style.display==="none")
{
    myImg.style.display ="block";
    myButton.textContent="hide";
}
else
{
    myImg.style.display="none";
    myButton.textContent="show";
}
if(myImg.style.visibility==="hidden")
{
    myImg.style.visibility="visible";
    myButton.textContent="Hide";
}
else
{
    myImg.style.visibility="hidden";
    myButton.textContent="show";
}
}
);

// NodeList = Static collection of HTML elements by (id, class, element)
//                     Can be created by using querySelectorAll()
//                     Similar to an array, but no (map, filter, reduce) 
//                     NodeList won't update to automatically reflect changes

// ---------- CREATE A NODELIST ----------

let buttons = document.querySelectorAll(".myButtons");

// ---------- ADD HTML/CSS PROPERTIES ----------

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😁";
});

// ---------- CLICK event listener ---------- 

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});

// ----------  MOUSEOVER + MOUSEOUT event listener ---------- 

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});

// ---------- ADD AN ELEMENT ----------

const newButton = document.createElement("button"); //STEP 1 
newButton.textContent = "Button 5"; //STEP 2
newButton.classList = "myButtons";
document.body.appendChild(newButton); //STEP 3

buttons = document.querySelectorAll(".myButtons");

// ---------- REMOVE AN ELEMENT ----------

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
    });
});

// JSON = (JavaScript Object Notation) data-interchange format 
//               Used for exchanging data between a server and a web application
//               JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object

// ---------- JSON.stringify() ----------

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}];

const jsonString = JSON.stringify(people);

console.log(jsonString);

// ---------- JSON.parse() ----------

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                                     {"name": "Patrick","age": 34,"isEmployed": false},
                                     {"name": "Squidward","age": 50,"isEmployed": true},
                                     {"name": "Sandy","age": 27,"isEmployed": false}]`;

const parsedData = JSON.parse(jsonPeople);

console.log(parsedData);


/*fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error));*/


// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response=>response.json())
.then(data=>console.log(data.id))
.catch(error=>console.error(error));


async function fetchData()
{
    try
    {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok)
        {
            throw new ("could not load resource");
        }

        const data = await response.json();
        console.log(data);
        const pokemonSprite = data.sprites.font_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src=pokemonSprite;
        imgElement.style.display="block";
    }
    catch(error)
    {
        console.log(error);
    }
}