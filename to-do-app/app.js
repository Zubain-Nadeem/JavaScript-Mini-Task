let todos = [];
let taskListEl = document.querySelector('.taskList');
let inputEl = document.querySelector('.text-input');
let editIndex = null;

function taskAdd() {
    const taskText = inputEl.value.trim();
    if (taskText === "") return;

    if (editIndex !== null) {
        todos[editIndex].text = taskText;
        editIndex = null;
    } else {
        todos.push({ text: taskText, completed: false });
    }

    inputEl.value = ""; // clear input
    renderTasks();
}

function renderTasks() {
    taskListEl.innerHTML = "";

    todos.forEach((task, index) => {
        const li = document.createElement('li');

        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onchange = () => toggleComplete(index);

        // Task text
        const span = document.createElement('span');
        span.textContent = task.text;
        if (task.completed) span.classList.add('completed');

        // Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit";
        editBtn.classList.add('delete');
        editBtn.onclick = () => editTask(index);

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('delete');
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        taskListEl.appendChild(li);
    });
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTasks();
}

function deleteTask(index) {
    todos.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    inputEl.value = todos[index].text;
    editIndex = index;
}
