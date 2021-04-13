var board = []
var diamond
var clubs
var spades
var hearts

function forca() {

    for (i = 0; i < 6; i++) {
        board.push([jogador[i][1]])
    }

    for (i = 0; i < 6; i++) {
        if (board[i].indexOf("D") != 1) {
            diamond = diamond + 1
        }
        else if (board[i].indexOf("C") != 1) {
            clubs = clubs + 1
        }
        else if (board[i].indexOf("H") != 1) {
            hearts = hearts + 1
        }
        else if (board[i].indexOf("S") != 1) {
            spades = spades + 1
        }
    }

    for (i=0; i < 12; i++) {
        if (board[i].indexOf("D") != 1) {
            diamond = diamond + 1
        }
    }
}