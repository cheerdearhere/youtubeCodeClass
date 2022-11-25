const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todos=[];
const TODOS_KEY = "todos";
function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}
function deleteTdo(event){
    event.preventDefault();
    const li = event.target.parentElement;
//    console.log(event.target.parentElement.innerText);
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}
function paintTodo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="지우기";
    button.addEventListener("click",deleteTdo);
    list.appendChild(span);
    list.appendChild(button);
    todoList.appendChild(list);
}
function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id:Date.now(),
        text:newTodo
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    //console.log(parsedTodos);
    //parsedTodos.forEach((item) => console.log(`this is the turn of ${item}`));
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
