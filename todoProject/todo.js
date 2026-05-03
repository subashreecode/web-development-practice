let addButton = document.getElementById("add");
let inputText = document.getElementById("input-text");
let todoList  = document.getElementById("todoContainer");
let tasks =[];
addButton.addEventListener("click",event=>
{
   console.log(event.target);
   console.log(inputText.value);
   const newList = document.createElement("li");
   const text =inputText.value.trim();
   if(text!=="")
   {
   newList.textContent=inputText.value;
   tasks.push(text);
   localStorage.setItem("tasks",JSON.stringify(tasks));
   document.getElementById("todoContainer").append(newList);
   inputText.value="";
   }
}
);

//Load saved tasks on refresh
window.addEventListener("load",()=>
{
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = saved;
    saved.forEach(task => {
        const li = document.createElement("li");
        li.textContent=task;
        todoList.append(li);
    });
});

