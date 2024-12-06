const sketchboard = document.querySelector(".sketchboard");
const setGridSizeBtn = document.getElementById("set-size-btn");
const gridSizeInput = document.getElementById("gridsize");
const clearGridBtn = document.getElementById("clear-grid-btn");
const colorButtons = document.querySelectorAll(".color-btn");
const eraseButton = document.getElementById("erase-btn");

let currentColor = "#ffffff";
let selectedButton = document.getElementById("white");

function setColorBtnBackground () {
    colorButtons.forEach((btn) => {
        btn.style.backgroundColor = btn.value;
    })
}

setColorBtnBackground();

colorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        selectedButton.classList.remove("selected");
        selectedButton = btn;
        selectedButton.classList.add("selected");
        currentColor = btn.value;
    })
})

eraseButton.addEventListener("click", () => {
    selectedButton.classList.remove("selected");
    selectedButton = eraseButton;
    selectedButton.classList.add("selected");
    currentColor = "transparent";
})

function updateGrid () {

    const size = parseInt(gridSizeInput.value, 10);

    if (!size || size <= 0 || size > 100) {
        alert("Please enter a valid number between 1 and 100");
        return;
    } else {
        deleteGrid();
        generateGrid(size);
        gridSize = size;
    }

} 

function generateGrid (gridSize) {

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < (gridSize ** 2); i++) {
        fragment.appendChild(generatePixel(gridSize));
    }
    sketchboard.appendChild(fragment);
}

function deleteGrid () {
    sketchboard.innerHTML = "";
}

function generatePixel (gridSize) {
    const pixel = document.createElement("div");
    const pixelSize = calculateSize(gridSize);
    pixel.classList.add("pixel");
    pixel.style.width = pixelSize;
    pixel.style.height = pixelSize;

    pixel.addEventListener ("mouseover", () => {
        let currentOpactiy = parseFloat(pixel.style.opacity) || 0;
        let newOpacity = Math.min(currentOpactiy + 0.1, 1);
        newOpacity = parseFloat(newOpacity.toFixed(1));
        pixel.style.backgroundColor = currentColor;
        pixel.style.opacity = newOpacity;
        
    });

    return pixel;
}

function calculateSize (gridSize) {
    pixelSize = (800/gridSize); 
    return pixelSize + "px";
}

generateGrid(16);

setGridSizeBtn.addEventListener ("click", () => updateGrid());
clearGridBtn.addEventListener("click", () => updateGrid());

