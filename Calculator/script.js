const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const numberDisplay = document.getElementById("numberDisplay");
const clearButton = document.getElementById("clear");
const negateButton = document.getElementById("negation");

let currentValue = parseFloat(numberDisplay.textContent);

let firstValue = 0;
let secondValue = 0;
let storedOperator = "";

/* DISPLAY FUNCTIONS */

function updateDisplayValue (numValue) {
    if(currentValue === 0) {
        currentValue = numValue;
    } else {
        currentValue += numValue;
    }
    numberDisplay.textContent = currentValue;
}

function clearDisplay () {
    numberDisplay.textContent = 0;
    currentValue = 0;
    firstValue = 0;
    secondValue = 0;
    storedOperator = "";
}

/* OPERATIONAL FUNCTIONS */

function storeValueAndOperator (operator) {

    if (operator === "equals" && storedOperator === "") {
        numberDisplay.textContent = currentValue;
    }  else if (operator != "equals" && firstValue === 0) {
        firstValue = currentValue;
        storedOperator = operator;
        numberDisplay.textContent = 0;
        currentValue = 0;
    } else if (operator != "equals" && firstValue != 0) {
        storedOperator = operator;
    } else if (operator === "equals") {
        secondValue = currentValue;
        calculate(storedOperator);
    } else {
        numberDisplay.textContent = "ERROR";
    }
}

function calculate (storedOperator) {

    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    let result = 0;

    console.log(firstValue, storedOperator, secondValue);

    if(storedOperator === "divide") {
        if(secondValue === 0) {
            numberDisplay.textContent = "Not allowed!"
            return;
        }
        result = Math.round((firstValue / secondValue) * 10000) / 10000;
    } else if (storedOperator === "multiply") {
        result = Math.round((firstValue * secondValue) * 10000) / 10000;
    } else if (storedOperator === "subtract") {
        result = Math.round((firstValue - secondValue) * 10000) / 10000;
    } else if (storedOperator === "add") {
        result = Math.round((firstValue + secondValue) * 10000) / 10000;
    }

    firstValue = result;
    numberDisplay.textContent = firstValue;
}

// UTILS

function negateValue (num) {
    num = (parseFloat(num) * (-1));
    currentValue = num;
    numberDisplay.textContent = num;
}


/* EVENT LISTENERS */
 
numberButtons.forEach((numBtn) => {
    numBtn.addEventListener("click", () => updateDisplayValue(numBtn.value))
})

operatorButtons.forEach((opButton) => {
    opButton.addEventListener("click", () => storeValueAndOperator(opButton.value));
})

clearButton.addEventListener("click", () => clearDisplay());

negateButton.addEventListener("click", () => negateValue(currentValue));