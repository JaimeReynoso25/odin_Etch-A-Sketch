const container = document.getElementById("container");

let gridSize = 50;

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
}

function getSquareSize(gridSize) {
    const containerSize = 960;
    const gapSize = 2;
    const totalGapSize = gapSize * (gridSize - 1);
    const availableSize = containerSize - totalGapSize;
    const squareSize = availableSize / gridSize;
    return squareSize;
}

createGrid(gridSize);

const gridSquares = document.querySelectorAll(".grid-Square");

gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
});