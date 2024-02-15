const gameboard = document.querySelector("#player");document.querySelector("#gameboard");
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