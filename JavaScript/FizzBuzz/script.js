const enterBtn = document.getElementById("enter");
const userInput = document.getElementById("input");

function fizzBuzz (inputValue) {
    for (let i = 1; i <= inputValue; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log ("Fizz");
        } else {
            console.log(i);
        }      
    }
}


enterBtn.addEventListener("click", (e) => {
    e.preventDefault;
    let inputValue = parseInt(userInput.value);
    fizzBuzz(inputValue);
});
