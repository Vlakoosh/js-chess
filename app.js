const gameboard =document.querySelector("#gameboard");
const currentTurnDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("#infoDisplay");

const width = 8;

const startPieces = [
    rook,   knight, bishop, queen,  king,   bishop, knight, rook    ,
    pawn,   pawn,   pawn,   pawn,   pawn,   pawn,   pawn,   pawn    ,
    '',     '',     '',     '',     '',     '',     '',     ''      ,
    '',     '',     '',     '',     '',     '',     '',     ''      ,
    '',     '',     '',     '',     '',     '',     '',     ''      ,
    '',     '',     '',     '',     '',     '',     '',     ''      ,
    pawn,   pawn,   pawn,   pawn,   pawn,   pawn,   pawn,   pawn    ,
    rook,   knight, bishop, queen,  king,   bishop, knight, rook    ,
]

function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div');
        square.innerHTML = startPiece;
        square.firstChild && square.firstChild.setAttribute('draggable', true)
        square.setAttribute('square-id', i);

        const row = Math.floor( (63 - i) / 8) + 1;
        if (row % 2 === 0){
            square.classList.add(i % 2 === 0 ? "black" : "white")
        }
        else {
            square.classList.add(i % 2 === 0 ? "white" : "black")
        }
        square.classList.add('square');

        if (i < 16) {
            square.firstChild.firstChild.classList.add('black-piece')
        }
        if (64 - i <= 16){
            square.firstChild.firstChild.classList.add('white-piece')
        }

        gameboard.appendChild(square);
    })
}

createBoard();




const allSquares = document.querySelectorAll("#gameboard .square");

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart)
})

let startPosition;
let draggedElement;

function dragStart (e) {
    startPosition = e.target.parentNode.getAttribute('square-id');
    draggedElement = e.target
}