const newItemInput = document.getElementById("newItemInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", addItem);
newItemInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});

function addItem() {
    const newItem = document.createElement("li");
    const text = document.createTextNode(newItemInput.value);
    newItem.appendChild(text);
    todoList.appendChild(newItem);
    newItemInput.value = "";
    newItem.addEventListener("click", markDone);
}

function markDone() {
    this.classList.toggle("done");
    this.addEventListener("dblclick", removeItem);
}

function removeItem() {
    this.remove();
}