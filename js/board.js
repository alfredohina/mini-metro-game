var canvas = document.getElementById("mini-metro");
var ctx = canvas.getContext("2d");
var img = new Image()



// function GameArea(time) {
//     this.time = 0;
//     this.score = 0;
// };


var time = 0;
var score = 0;
var travelers = 0;

var intervalId = setInterval(function() {
    time++;
}, 1000);

function clock() {
    ctx.fillText('Tiempo: ' + this.time, 10, 10);
    ctx.fillText('Puntos: ' + this.score, 10, 25);
    ctx.fillText('En transito: ' + this.travelers, 10, 40);
}


function passengers() {
    this.type = type;
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};


function launch() {
    for (i = 0; i < allStX.length; i++) {
        allStations[i].drawImage();
    }
}



var allStations = [];


var btnLineaA = document.getElementById("lineA");
var btnLineaAdel = document.getElementById("lineAdel");
var btnLineaAdelB = document.getElementById("lineAdelB");
var btnLineaB = document.getElementById("lineB");
var btnLineaC = document.getElementById("lineC");
var btnTrainA = document.getElementById("trainA");
var btnTrainAdel = document.getElementById("trainAdel");
var btnTrainB = document.getElementById("trainB");
var btnTrainC = document.getElementById("trainC");






btnTrainA.onclick = function () {
    if ((lineaA.length > 1) && (allLine.length == 0)) {
        var newTrain = generateTrain('red', lineaA)
        newTrain.drawTrain();
        addTrain(newTrain);
    } else if (lineaA.length <= 1) {
        alert ('Primero debes crear una Línea Roja');
    } else if (allLine.length > 0) {
        alert ('Ya hay un tren recorriendo esta línea')
    }
}

btnTrainAdel.onclick = function () {
    travelers -= allLine[0].passengers.length;
    allLine.shift()
    estacionOrigen = 0;
    estacionDestino = 1;
    stop = false;
    incremento = 1;
    timeStopped = 0;
}

btnTrainB.onclick = function () {
    if (lineaB.length > 1) {
        var newTrain = generateTrain('green', lineaB)
        newTrain.drawTrain();
        addTrain(newTrain);
    }
};

btnTrainC.onclick = function () {

    if (lineaC.length > 1) {
        var newTrain = generateTrain('blue', lineaC)
        newTrain.drawTrain();
        addTrain(newTrain);
    }
};