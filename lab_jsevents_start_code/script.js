const enterButton = document.querySelector("#enter");
const list = document.querySelector("#list");
const toDoItem = document.querySelector("#new-todo");
const deleteButton = document.querySelectorAll(".delete");
let newToDoItem;

const createAndAppendListItem = (content) => {
  const newListItem = document.createElement("li");
  const newDeleteButton = document.createElement("button");
  newDeleteButton.innerText = "Delete";
  newDeleteButton.classList.add("delete");
  newListItem.innerText = content;
  list.appendChild(newListItem);
  newListItem.appendChild(newDeleteButton);
};

toDoItem.addEventListener("input", (event) => {
  newToDoItem = event.target.value;
  console.log(newToDoItem);
});

enterButton.addEventListener("click", (event) => {
  event.preventDefault();
  createAndAppendListItem(newToDoItem);
});

deleteButton.addEventListener("click", (event) => {});

const handleSubmit = (event) => {
  event.preventDefault();
  const newToDo = toDoForm.target;
  console.log(newToDo);
  const newListItem = document.createElement("li");
  newListItem.innerText = newToDo;

  const list = document.querySelector("#list");
  list.appendChild(newListItem);
};
const toDoForm = document.querySelector("#todo-form");
console.log(toDoForm);

toDoForm.addEventListener("submit", handleSubmit);
