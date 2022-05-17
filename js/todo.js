const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];
function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos.splice(event.target.parentNode.id, 1);
    console.log(toDos);
    saveTodos();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; 
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    console.log(toDos);
    paintTodo(newTodoObj);
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text + ' - ' + new Date(newTodo.id).toDateString();
    const button = document.createElement("button");
    button.innerText = '❌';
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    console.log(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
function sayHello() {
    console.log("hello");
}

const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));

if (savedTodos !== null) {
    savedTodos.forEach(paintTodo);
}