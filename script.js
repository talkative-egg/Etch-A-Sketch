const containter = document.querySelector("#container");
const clearButton = document.querySelector("#clear");

setContainer(16);
createSquares(16);

let squareNum = prompt("How many squares per row?");
setContainer(squareNum);
createSquares(squareNum);
const squares = document.querySelectorAll(".square");

squares.forEach(e => {
    e.addEventListener("mouseover", function(){
        let hue = numberRandomizer();
        e.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    });
});

clearButton.addEventListener("click", function(){
    squares.forEach(e => {
        e.style.backgroundColor = "white";
    });
});

function numberRandomizer(){
    return Math.random() * 361;
}

function createSquares(squareNum){
    removeAllChildNodes(container);
    for(let i = 0; i < squareNum; i++){
        for(let j = 0; j < squareNum; j++){
            const square = document.createElement("div");
            square.className = "square";
            container.appendChild(square);
        }
    }
}

function setContainer(squareNum){
    let width = squareNum * 20 + (squareNum - 1) * 2;
    container.style.width = `${width}px`;
    container.style.height = `${width}px`;
    container.style.gridTemplateColumns = `repeat(${squareNum}, auto)`;
    container.style.gridTemplateRows = `repeat(${squareNum}, auto)`;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}