async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return data;
}

// Base class Element
class Element {
  // Pass in all needed html atrributes + parentElement, where element will be appended
  constructor({ tag, className, textContent, parentElement }) {
    this.tag = tag; // Tag name
    this.className = className; // Class name
    this.textContent = textContent; // Text content - optional
    this.parentElement = parentElement; // Element where this element will be appended

    // Want to create and display element immediately
    this.init();
  }

  // Method that will add class to element
  addClass() {
    if (this.className) {
      // this.className = "phone-wrapper test test2"
      const classes = this.className.split(" "); // ["phone-wrapper", "test", "test2"]
      // ...classes -> "phone-wrapper", "test", "test2"
      this.element.classList.add(...classes);
    }
  }

  addTextContent() {
    if (this.textContent) {
      this.element.textContent = this.textContent;
    }
  }

  appendToParent() {
    this.parentElement.appendChild(this.element);
  }

  init() {
    // Create new element
    const element = document.createElement(this.tag);
    this.element = element;

    // Add class to element
    this.addClass();

    // Add text content to element
    this.addTextContent();

    // Append element to parent
    this.appendToParent();
  }
}

class Input extends Element {
  constructor({ className, parentElement, type, checked }) {
    super({
      tag: "input",
      className,
      parentElement,
    });

    this.type = type;
    this.checked = checked;

    this.addInputAttributes();
  }

  addInputAttributes() {
    this.element.type = this.type;
    this.element.checked = this.checked;
  }
}

class Todo {
  constructor({ id, title, completed }, todoWrapper) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.todoWrapper = todoWrapper;
  }

  draw() {
    const todoCard = new Element({
      tag: "div",
      className: "todo-card",
      parentElement: this.todoWrapper,
    });

    new Element({
      tag: "p",
      className: "user-id",
      textContent: this.id,
      parentElement: todoCard.element,
    });

    const todoContent = new Element({
      tag: "div",
      className: "todo-content",
      parentElement: todoCard.element,
    });

    new Input({
      type: "checkbox",
      checked: this.completed,
      parentElement: todoContent.element,
    });

    new Element({
      tag: "p",
      className: "title",
      textContent: this.title,
      parentElement: todoContent.element,
    });
  }
}

const rootElement = document.getElementById("root");

const todoWrapper = new Element({
  tag: "div",
  className: "todos-wrapper",
  parentElement: rootElement,
});

fetchTodos().then((todos) => {
  todos.forEach((todo) => {
    const todoElement = new Todo(todo, todoWrapper.element);
    todoElement.draw();
  });
});
