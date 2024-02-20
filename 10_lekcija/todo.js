"use strict";
const todosWrapper = document.querySelector(".todos-wrapper");
const todoForm = document.querySelector("form");
const todoInput = document.querySelector("#new-todo");
function createTodo(todo) {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo");
    todoElement.innerHTML = `
    <div>
        <input type="checkbox" ${todo.done ? "checked" : undefined} />
        <p>${todo.value}</span>
    </div>
    <button>Delete</button>
  `;
    todosWrapper === null || todosWrapper === void 0 ? void 0 : todosWrapper.appendChild(todoElement);
}
function renderTodos() {
    const todos = JSON.parse(localStorage.getItem("todos") || "");
    const todosItems = todosWrapper === null || todosWrapper === void 0 ? void 0 : todosWrapper.children;
    if (todosItems) {
        const todosArray = Array.from(todosItems);
        todosArray.forEach((child) => child.remove());
    }
    todos.forEach(createTodo);
}
renderTodos();
if (todoForm) {
    todoForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        const newTodo = todoInput === null || todoInput === void 0 ? void 0 : todoInput.value;
    });
}
