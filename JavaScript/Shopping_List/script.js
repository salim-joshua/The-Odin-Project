const list = document.querySelector("ul");
const input = document.querySelector("#item");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let item = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    listItem.append(span, deleteBtn);
    span.textContent = item;
    deleteBtn.textContent = "delete";

    list.appendChild(listItem);

    /*TODO: 
    1. Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
    2. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
    
    */

});