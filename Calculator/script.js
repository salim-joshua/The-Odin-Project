const numberButtons = document.querySelectorAll(".number");
const numberDisplay = document.getElementById("numberDisplay");

function updateDisplayValue (currentValue, numValue) {
    if(parseInt(numberDisplay.textContent) === 0) {
        currentValue = numValue;
    } else {
        currentValue += numValue;
    }
    numberDisplay.textContent = currentValue;
}
 
numberButtons.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {updateDisplayValue(numberDisplay.textContent, numBtn.value)})
})