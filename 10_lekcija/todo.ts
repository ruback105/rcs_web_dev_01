const todosWrapper = document.querySelector(".todos-wrapper");
const todoForm = document.querySelector<HTMLFormElement>("form");
const todoInput = document.querySelector<HTMLTextAreaElement>("#new-todo");

type Todo = {
  value: string;
  done: boolean;
};

function createTodo(todo: Todo) {
  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");

  todoElement.innerHTML = `
    <div>
        <input type="checkbox" ${todo.done ? "checked" : undefined} />
        <p>${todo.value}</span>
    </div>
    <button>Delete</button>
  `;

  todosWrapper?.appendChild(todoElement);
}

function renderTodos() {
  const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "");

  const todosItems = todosWrapper?.children;
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

    const newTodo = todoInput?.value;
  });
}
