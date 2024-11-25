const container = document.querySelector("#container");
const paragraph = document.createElement("p");
const heading = document.createElement("h3");
const div = document.createElement("div");

paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red";
container.appendChild(paragraph);

heading.style.color = "blue";
heading.textContent = "I'm a blue h3!"
container.appendChild(heading);

div.style.cssText = "border: 1px solid black; background-color: pink;"

const divHeading = document.createElement("h1");
const divText = document.createElement("p");

divHeading.textContent = "I'm in a div";
divText.textContent = "ME TOO!";
div.append(divHeading,divText);

container.appendChild(div);




