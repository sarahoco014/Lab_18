const enterButton = document.querySelector("#enter");
const list = document.querySelector("#list");
const toDoItem = document.querySelector("#new-todo");
let newToDoItem;
const dateButton = document.querySelector("#date");
const currentDate = document.querySelector("#current-date");

const handleDelete = (newListItem) => {
    list.removeChild(newListItem);
}

const createAndAppendListItem = (content) => {
  const newListItem = document.createElement("li");
  const newDeleteButton = document.createElement("button");
  newDeleteButton.innerText = "Delete";
  newDeleteButton.classList.add("delete");

  newDeleteButton.addEventListener("click", () => {
    handleDelete(newListItem);
  });

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

const deleteButton = document.querySelectorAll(".delete");

// deleteButton.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         console.log(event);
//     })
// }) 

dateButton.addEventListener("click", (event) => {
    currentDate.textContent = Date();
})

// const handleSubmit = (event) => {
//   event.preventDefault();
//   const newToDo = toDoForm.target;
//   console.log(newToDo);
//   const newListItem = document.createElement("li");
//   newListItem.innerText = newToDo;

//   const list = document.querySelector("#list");
//   list.appendChild(newListItem);
// };
// const toDoForm = document.querySelector("#todo-form");
// console.log(toDoForm);

// toDoForm.addEventListener("submit", handleSubmit);
