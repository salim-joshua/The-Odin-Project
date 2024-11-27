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
    
    deleteBtn.addEventListener("click", (e) => {
        e.currentTarget.parentNode.remove();
    })

    list.appendChild(listItem);
    
    input.focus();

});