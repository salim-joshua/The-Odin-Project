const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator")
const numberDisplay = document.getElementById("numberDisplay");

let storedValue = 0;
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

/* OPERATIONAL FUNCTIONS */

function storeValueAndOperator (currentValue, operator) {

    if (operator != "equals") {
        storedValue = parseFloat(currentValue);
        storedOperator = operator;
        numberDisplay.textContent = 0;
    } else {
        calculate(storedValue, storedOperator, parseFloat(numberDisplay.textContent));
    }
}

function calculate (storedValue, storedOperator, currentValue) {
    
    let result = 0;

    if(storedOperator === "divide") {
        result = Math.round((storedValue / currentValue) * 10000) / 10000;
    } else if (storedOperator === "multiply") {
        result = Math.round((storedValue * currentValue) * 10000) / 10000;
    } else if (storedOperator === "subtract") {
        result = Math.round((storedValue - currentValue) * 10000) / 10000;
    } else if (storedOperator === "add") {
        result = Math.round((storedValue + currentValue) * 10000) / 10000;
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