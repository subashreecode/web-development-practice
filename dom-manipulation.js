//element selectors = Methods used to target and manipulate html 
// elements they allow you to select one or multi elements from the DOM(Document object model)
//1.document.getElementById  ---element or null
// document.getElementsByClassName --html collection
//document.getElementsBy/tag/name --html collection
//document.queryselector --first element or null
//document.queryselectorall() --nodelist

const myHeading = document.getElementById("my-heading");

//const myHeading = document.getElementById("my-headingg");
console.log(myHeading);
myHeading.style.backgroundColor="yellow";
myHeading.style.textAlign="center";

const fruits =document.getElementsByClassName("fruits");
console.log(fruits[0]);

//for(let fruit of fruits)
//{
    //fruit.style.backgroundColor ="yellow";
//}

Array.from(fruits).forEach(fruit =>
    {
        fruit.style.backgroundColor="yellow";

})

const h4Tag=document.getElementsByTagName("h4");
console.log(h4Tag);

const liElements = document.getElementsByTagName("li");
console.log(liElements);


Array.from(h4Tag).forEach(h4Tag=>
{
    h4Tag.style.backgroundColor ="yellow";
}
);

Array.from(liElements).forEach(liElements=>
{
    liElements.style.backgroundColor ="red";
}
);


const element = document.querySelector(".fruits");
element.style.backgroundColor="yellow";


const foods = document.querySelectorAll("li");
foods.forEach(food=>
{
  food.style.backgroundColor="yellow";
}
)

//DOM NAVIGATION = the process of navigating through the 
// structure of the html document using javascript

//.firstElement
//.lastElementChild
//.nextElementSibling
//.parentElement
//.children

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElements=>{

    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor="red";

    const lastElementChild = ulElements.lastElementChild;
    lastElementChild.style.backgroundColor="green";

});


const elementVeggies = document.getElementById("veggies");
const nextElementSibling = elementVeggies.nextElementSibling;
nextElementSibling.style.backgroundColor="blue";


 const elementFruits = document.getElementById("desserts");
 const previousElemenetSibling = elementFruits.previousElementSibling;
 previousElemenetSibling.style.backgroundColor="red";

      //it changes the body
      const parentElement =  elementFruits.parentElement;
      parentElement.style.backgroundColor="lightBlue";
      const children = elementFruits.children;
      Array.from(children).forEach(child =>
      {
           child.style.backgroundColor ="yellow";
      }
      );

 //....Example 1 <h1> ......
 //STEP 1 CREATE THE ELEMENT
 //STEP 2 ADD Attributes and properties
 //STEP 3 APPEND ELEMENT TO DOM
 //REMOVE THE ELEMENT
 




















