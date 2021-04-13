var baralho = ["1H", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "11H", "12H", "13H", "1D", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "11D", "12D", "13D", "1C", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "11C", "12C", "13C", "1S", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "11S", "12S", "13S"]
var njogadores
var jogador = []
var flop = []
var carta1
var carta2
var aleat

function distribuir() {
    njogadores = prompt("Quantos jogadores? Máximo de 9 jogadores na mesa")
    elem = document.querySelector('#distribuir');
    elem.style.display = "none";
    elem = document.querySelector('#idflop');
    elem.style.display = "block";
    for (x = 0; x < njogadores; x++) {
        aleat = Math.floor(Math.random() * baralho.length)
        carta1 = (baralho.splice(aleat, 1))
        jogador.push([x, carta1[0]])

        aleat = Math.floor(Math.random() * baralho.length)
        carta2 = (baralho.splice(aleat, 1))
        jogador.push([x, carta2[0]])

        var imgcarta = ("url('fotos/" + jogador[x + x][1] + ".jpg')")

        elem = document.querySelector("#carta" + x + "1");
        elem.style.backgroundImage = imgcarta

        var imgcarta = ("url('fotos/" + jogador[x + 1 + x][1] + ".jpg')")

        elem = document.querySelector("#carta" + x + "2");
        elem.style.backgroundImage = imgcarta
    }
}

function dealflop() {

    elem = document.querySelector('#idflop');
    elem.style.display = "none";

    elem = document.querySelector('#idturn');
    elem.style.display = "block";

    aleat = Math.floor(Math.random() * baralho.length)
    carta1 = (baralho.splice(aleat, 1))
    flop.push([9, carta1[0]])

    var imgcarta = ("url('fotos/" + flop[0][1] + ".jpg')")
    elem = document.querySelector("#carta91");
    elem.style.backgroundImage = imgcarta

    aleat = Math.floor(Math.random() * baralho.length)
    carta1 = (baralho.splice(aleat, 1))
    flop.push([9, carta1[0]])

    var imgcarta = ("url('fotos/" + flop[1][1] + ".jpg')")
    elem = document.querySelector("#carta92");
    elem.style.backgroundImage = imgcarta

    aleat = Math.floor(Math.random() * baralho.length)
    carta1 = (baralho.splice(aleat, 1))
    flop.push([9, carta1[0]])

    var imgcarta = ("url('fotos/" + flop[2][1] + ".jpg')")
    elem = document.querySelector("#carta93");
    elem.style.backgroundImage = imgcarta
}

function dealTurn() {

    elem = document.querySelector('#idturn');
    elem.style.display = "none";

    elem = document.querySelector('#idriver');
    elem.style.display = "block";

    aleat = Math.floor(Math.random() * baralho.length)
    carta1 = (baralho.splice(aleat, 1))
    flop.push([9, carta1[0]])

    var imgcarta = ("url('fotos/" + flop[3][1] + ".jpg')")
    elem = document.querySelector("#carta94");
    elem.style.backgroundImage = imgcarta
}

function dealRiver() {

    elem = document.querySelector('#idriver');
    elem.style.display = "none";

    aleat = Math.floor(Math.random() * baralho.length)
    carta1 = (baralho.splice(aleat, 1))
    flop.push([9, carta1[0]])

    var imgcarta = ("url('fotos/" + flop[4][1] + ".jpg')")
    elem = document.querySelector("#carta95");
    elem.style.backgroundImage = imgcarta
}