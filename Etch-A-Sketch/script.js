const sketchboard = document.querySelector(".sketchboard");
const gridSize = 16;

function generateGrid (gridSize) {
    for (let i = 1; i < (gridSize ** 2); i++) {
        console.log("generated pixel");
        sketchboard.appendChild(generatePixel(gridSize));
    }
}

function generatePixel (gridSize) {
    const pixel = document.createElement("div");
    const pixelSize = calculateSize(gridSize);
    console.log(pixelSize);
    pixel.classList.add("pixel");
    pixel.style.width = pixelSize;
    pixel.style.height = pixelSize;

    return pixel;
}

function calculateSize (gridSize) {
    pixelSize = (960/gridSize); 
    return pixelSize + "px";
}

generateGrid(gridSize);
