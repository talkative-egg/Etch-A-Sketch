const containter = document.querySelector("#container");

for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    }
}

const squares = document.querySelectorAll(".square");

squares.forEach(e => {
    e.addEventListener("mouseover", function(){
        e.classList.remove("square");
    });
});