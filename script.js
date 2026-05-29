const container = document.getElementById("container");
const clearButton = document.getElementById("clear-btn");
const resizeButton = document.getElementById("resize-btn");

let gridSize = 16;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.style.display = "flex";
        gridRow.style.columnGap = "2px";
        
        for (let j = 0; j < gridSize; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-Square");
            gridSquare.style.backgroundColor = "white";
            gridSquare.style.width = `${getSquareSize(gridSize)}px`;
            gridSquare.style.height = `${getSquareSize(gridSize)}px`;
            gridRow.appendChild(gridSquare);
        }
        container.appendChild(gridRow);
    }

    const gridSquares = document.querySelectorAll(".grid-Square");

    gridSquares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
    });
}

function getSquareSize(gridSize) {
    const containerSize = 960;
    const gapSize = 2;
    const totalGapSize = gapSize * (gridSize - 1);
    const availableSize = containerSize - totalGapSize;
    const squareSize = availableSize / gridSize;
    return squareSize;
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

createGrid(gridSize);


clearButton.addEventListener("click", () => {
    clearGrid();
    createGrid(gridSize);
});

resizeButton.addEventListener("click", () => {
    gridSize = prompt("Enter new grid size (1-100):");
    while (gridSize < 1 || gridSize > 100) {
        gridSize = prompt("Invalid grid size. Please enter a number between 1 and 100.");
    }
    clearGrid();
    createGrid(gridSize);
});