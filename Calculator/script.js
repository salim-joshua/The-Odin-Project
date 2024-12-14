const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator")
const numberDisplay = document.getElementById("numberDisplay");
const clearButton = document.getElementById("clear");

let firstValue = 0;
let secondValue = 0;
let storedOperator = "";

/* DISPLAY FUNCTIONS */

function updateDisplayValue (currentValue, numValue) {
    if(parseInt(numberDisplay.textContent) === 0) {
        currentValue = numValue;
    } else {
        currentValue += numValue;
    }
    numberDisplay.textContent = currentValue;
}

function clearDisplay () {
    numberDisplay.textContent = 0;
    firstValue = 0;
    storedOperator = "";
}

/* OPERATIONAL FUNCTIONS */

function storeValueAndOperator (currentValue, operator) {

    if (operator === "equals" && storedOperator === "") {
        numberDisplay.textContent = currentValue;
    }  else if (operator != "equals") {
        firstValue = parseFloat(currentValue);
        storedOperator = operator;
        numberDisplay.textContent = 0;
    } else if (operator === "equals") {
        calculate(firstValue, storedOperator, parseFloat(currentValue));
    } else {
        numberDisplay.textContent = "ERROR";
    }
}

function calculate (firstValue, storedOperator, currentValue) {

    console.log(firstValue, storedOperator, currentValue);
    
    let result = 0;

    if(storedOperator === "divide") {
        result = Math.round((firstValue / currentValue) * 10000) / 10000;
    } else if (storedOperator === "multiply") {
        result = Math.round((firstValue * currentValue) * 10000) / 10000;
    } else if (storedOperator === "subtract") {
        result = Math.round((firstValue - currentValue) * 10000) / 10000;
    } else if (storedOperator === "add") {
        result = Math.round((firstValue + currentValue) * 10000) / 10000;
    }

    numberDisplay.textContent = result;
}


/* EVENT LISTENERS */
 
numberButtons.forEach((numBtn) => {
    numBtn.addEventListener("click", () => updateDisplayValue(numberDisplay.textContent, numBtn.value))
})

operatorButtons.forEach((opButton) => {
    opButton.addEventListener("click", () => storeValueAndOperator(numberDisplay.textContent, opButton.value));
})

clearButton.addEventListener("click", () => clearDisplay());