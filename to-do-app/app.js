/*
let todos = [];
let olEl = document.querySelectorAll('.all-todos')[0];
let newTodoEl = document.querySelectorAll('#new-todo')[0];
let addBtnEl = document.querySelectorAll('.add-btn')[0];
let editIndex;

function renderTodos() {
    olEl.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        let todoItem = todos[i];
        let liEl = `<li>
                        ${todoItem}
                        <button onclick="deleteTodo(${i})">
                            Delete
                        </button>
                        <button onclick="editTodo(${i})">
                            Edit
                        </button>
                    </li>`;
        olEl.innerHTML += liEl;
    }
}

function addTodo() {
    let newTodo = newTodoEl.value;
    todos.push(newTodo);
    renderTodos();
    newTodoEl.value = "";
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function editTodo(index) {
    let editItem = todos[index];
    editIndex = index;
    newTodoEl.value = editItem
    addBtnEl.innerHTML = "Save";
    addBtnEl.onclick = saveTodo;
}

function saveTodo() {
    console.log(newTodoEl.value);
    console.log(editIndex);
    todos.splice(editIndex, 1, newTodoEl.value);
    renderTodos();
    addBtnEl.innerHTML = "Add";
    addBtnEl.onclick = addTodo;
    editIndex  = undefined;
    newTodoEl.value = "";
    
}
 */

let todos = [];
let ulEl = document.querySelectorAll(".taskList")[0];
let inputEl = document.querySelectorAll('.text-input')

function renderTodos() {
  ulEl.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let todoItem = todos[i];
    let liEl = `<li>
        <input type = "checkbox" class = "check" onclick = "taskCheck(this)">
        ${todoItem}
       <div> <button onclick="deleteTodo(${i})">
            Delete
        </button>
        <button onclick="editTodo(${i})">
            Edit
        </button></div>
    </li>`;
    ulEl.innerHTML += liEl;
  }
}

function taskAdd(){
    let newTodo = inputEl.value;
    todos.push(newTodo);
    renderTodos()
}

function taskCheck(){
    let taskItem = checkbox; 
    if (checkbox.checked) {
        taskItem.style.color = "gray"; 
        taskItem.style.textDecoration = "line-through"; 
    } else {
        taskItem.style.color = "black"; 
        taskItem.style.textDecoration = "none"; 
    }
}