const gameboard =document.querySelector("#gameboard");
const currentTurnDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("#infoDisplay");

const width = 8;

let playerTurn = 'white';
currentTurnDisplay.textContent = playerTurn;

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



const allStartingSquares = document.querySelectorAll("#gameboard .square");

allStartingSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

let startPosition;
let draggedElement;

function dragStart (e) {
    startPosition = e.target.parentNode.getAttribute('square-id');
    draggedElement = e.target
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop(e) {
    e.stopPropagation()
    const takenPiece = e.target.classList.contains('piece')

    //TODO needs a fix
    //replace piece only ???
    // e.target.parentNode.append(draggedElement)
    // e.target.remove()

    //move piece to empty tile only ???
    e.target.append(draggedElement)
    changePlayer();
}

function changePlayer() {
    if (playerTurn === "white") {
        playerTurn = "black";
        setTileIdReverse();
    }  else {
        playerTurn = "white";
        setTileIdRegular();
    }
    currentTurnDisplay.textContent = playerTurn;
}

function setTileIdReverse() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square, i) =>
        square.setAttribute('square-id', (Math.pow(width, 2) - 1) - i))
    setTileRotationReverse()
}

function setTileIdRegular() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square, i) =>
        square.setAttribute('square-id', i));
    setTileRotationRegular()
}

function setTileRotationReverse() {
    const allPieces = document.querySelectorAll(".square");
    gameboard.style.transform = 'rotate(180deg)';
    allPieces.forEach(piece => {
        piece.style.transform = 'rotate(180deg)';
    })
}

function setTileRotationRegular() {
    const allPieces = document.querySelectorAll(".square");
    gameboard.style.transform = 'rotate(0deg)';
    allPieces.forEach(piece => {
        piece.style.transform = 'rotate(0deg)';
    })
}