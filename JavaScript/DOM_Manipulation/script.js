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

// Button Events

const btn = document.querySelector("#btn");
btn.onclick = alertFunction;

const btnTwo = document.querySelector("#btn-2");
btnTwo.addEventListener("click", alertFunction);

function alertFunction () {
    alert("Yaaay!")
}

btn.addEventListener("click", function (e) {
    console.log(e.target);
  });

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
  


