document.getElementById('add').addEventListener('click', function () {
    let inputValue = document.getElementById('to-do').value.trim();
if (inputValue) {
    addTodo(inputValue);
    savedTooLocalStorage(inputValue, false);
document.getElementById('to-do').value="";}
});

function addTodo(item, isCompleted = false) {
    let todoList = document.getElementById('liste');
    const li= document.createElement('li');
    li.textContent = item;

    if (isCompleted) { 
        li.classlist.add("completed");
    }

    let removeButton = document.createElement('button');
    removeButton.textContent = 'Fjern';
    removeButton.onclick = function () {
        todoList.removeChild(li);
    };

    li.appendChild(removeButton);
    li.addEventListener('click', function(){
        li.classList.toggle('completed');
    });

    todoList.appendChild(li);

};



// Local storage:

document.addEventListener("DOMContentLoaded", function() {
    let savedItems = JSON.parse(localStorage.getItem("items") )|| [];
    savedItems.forEach(item => addItem(task.text, task.completed));
        
    });

    function saveTodoLocalStorage(item, isCompleted) {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push({text: item, completed: isCompleted});
        localStorage.setItem('todos', JSON.stringify(todos));
    };