const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const numberDisplay = document.getElementById("numberDisplay");
const calculationDisplay = document.getElementById("calculationDisplay");
const clearButton = document.getElementById("clear");
const negateButton = document.getElementById("negation");

const operators = {
    add: "+",
    subtract: "-",
    multiply: "×",
    divide: "÷",
};

let currentValue = parseFloat(numberDisplay.textContent);

let firstValue = 0;
let secondValue = 0;
let storedOperator = "";


/* DISPLAY FUNCTIONS */

function updateDisplay (numValue) {
    if(currentValue == 0) {
        currentValue = numValue;
    } else {
        currentValue += numValue;
    }
    numberDisplay.textContent = currentValue;
}

function clearDisplay () {
    disableActiveButton();
    numberDisplay.textContent = 0;
    calculationDisplay.textContent = "";
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
        calculationDisplay.textContent = firstValue + " " + operators[storedOperator];
        currentValue = 0;

    } else if (operator != "equals" && firstValue != 0 && secondValue === 0) {

        storedOperator = operator;
        calculationDisplay.textContent = firstValue + " " + operators[storedOperator];
    
    } else if (operator != "equals" && secondValue != 0) {

        storedOperator = operator;
        numberDisplay.textContent = 0;
        currentValue = 0;
        calculationDisplay.textContent = firstValue + " " + operators[storedOperator];

    } else if (operator === "equals") {

        secondValue = currentValue;
        calculate(storedOperator)

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

    calculationDisplay.textContent = firstValue + " " + operators[storedOperator] + " " + secondValue;
    firstValue = result;
    numberDisplay.textContent = firstValue;
}

// UTILS

function negateValue (num) {
    num = (parseFloat(num) * (-1));
    currentValue = num;
    numberDisplay.textContent = num;
}

function enableActiveButton () {
    operatorButtons.forEach((btn) => {
        if (btn.value === storedOperator) {
            btn.classList.add("active-btn");
        } else {
            btn.classList.remove("active-btn");
        }
    })
}

function disableActiveButton () {

    let activeButton = document.querySelector(".active-btn");

    if (activeButton) {
        activeButton.classList.remove("active-btn");
    }
}


/* EVENT LISTENERS */
 
numberButtons.forEach((numBtn) => {
    numBtn.addEventListener("click", () => updateDisplay(numBtn.value))
})

operatorButtons.forEach((opButton) => {
    opButton.addEventListener("click", () => {
        storeValueAndOperator(opButton.value)
        enableActiveButton();
    });
})

clearButton.addEventListener("click", () => clearDisplay());

negateButton.addEventListener("click", () => negateValue(currentValue));