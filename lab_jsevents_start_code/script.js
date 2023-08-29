const enterButton = document.querySelector("#enter");
const list = document.querySelector("#list");
const toDoItem = document.querySelector("#new-todo");
let newToDoItem;

const createAndAppendListItem = (content) => {
    const newListItem = document.createElement("li");
    newListItem.innerText = content;
    list.appendChild(newListItem);
}

toDoItem.addEventListener("input", (event) => {
     newToDoItem = event.target.value;
     console.log(newToDoItem);
})

enterButton.addEventListener("click", createAndAppendListItem(newToDoItem));



// (event) => {
//     // const newItem = event.target.value;
//     // console.log(newItem);
//     createAndAppendListItem(newToDoItem);
// }) 






// Adding a todo item on form submission



const handleSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoForm.target;
    console.log(newToDo);
    const newListItem = document.createElement('li');
    newListItem.innerText = newToDo;

    const list = document.querySelector('#list');
    list.appendChild(newListItem);

}
const toDoForm = document.querySelector('#todo-form');
console.log(toDoForm);

toDoForm.addEventListener('submit', handleSubmit);