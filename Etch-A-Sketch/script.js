const sketchboard = document.querySelector(".sketchboard");
const setGridSizeBtn = document.getElementById("set-size-btn");
const gridSizeInput = document.getElementById("gridsize");

let gridSize = 16;

function setGridSize () {
    gridSize = gridSizeInput.value;

    if (gridSize <= 100 && gridSize > 0) {
        deleteGrid();
        generateGrid(gridSize);
    } else {
        alert("Please enter a grid size between 1 and 100");
    }

} 

function generateGrid (gridSize) {
    for (let i = 0; i < (gridSize ** 2); i++) {
        sketchboard.appendChild(generatePixel(gridSize));
    }
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
        pixel.style.backgroundColor = "white";
    })

    return pixel;
}

function calculateSize (gridSize) {
    pixelSize = (960/gridSize); 
    return pixelSize + "px";
}

generateGrid(gridSize);

setGridSizeBtn.addEventListener ("click", () => setGridSize());

