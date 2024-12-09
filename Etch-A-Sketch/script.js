const sketchboard = document.querySelector(".sketchboard");
const setGridSizeBtn = document.getElementById("set-size-btn");
const gridSizeInput = document.getElementById("gridsize");
const clearGridBtn = document.getElementById("clear-grid-btn");
const colorButtons = document.querySelectorAll(".color-btn");
const eraseButton = document.getElementById("erase-btn");
const opacityToggle = document.getElementById("opacity-toggle");

let currentColor = "255 255 255";
let selectedButton = document.getElementById("white");
let opacityVariation = true;

// COLOR HANDLING

// Initialize the colors of the Buttons by reading their given value in HTML

function setColorBtnBackground () {
    colorButtons.forEach((btn) => {
        btn.style.backgroundColor = `rgb(${btn.value})`;
    })
}

setColorBtnBackground();

// Handle Colors and Eraser buttons by assigning their respective value to the global active color

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


// OPACITY HANDLING

opacityToggle.addEventListener("click", () => {
    opacityToggle.classList.toggle("inactive");
    opacityVariation ? opacityVariation = false : opacityVariation = true;
})


// GRID GENERATION

// Call Grid update for generating new Tiles, depending on user input

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
     
        let currentOpactiy = parseFloat(pixel.dataset.opacity) || 0;
        let newOpacity = Math.min(currentOpactiy + 10, 100);
        newOpacity = parseFloat(newOpacity.toFixed(0));
        
        if(!opacityVariation) {
            newOpacity = 100;    
        }

        pixel.style.backgroundColor = `rgb(${currentColor} / ${newOpacity}%)`;
        pixel.dataset.opacity = newOpacity;
        
    });

    return pixel;
}


// UTILS

function calculateSize (gridSize) {
    pixelSize = (800/gridSize); 
    return pixelSize + "px";
}

// INITIAL FUNCTION CALLS 

generateGrid(16);


// Event Listeners

setGridSizeBtn.addEventListener ("click", () => updateGrid());
clearGridBtn.addEventListener("click", () => updateGrid());

