var canvas = document.getElementById("mini-metro");
var ctx = canvas.getContext("2d");
var img = new Image()



var time = 0;
var score = 0;
var travelers = 0;
var travelersA = 0;
var travelersB = 0;
var travelersC = 0;



function clock() {

    var imageClock = new Image();
    imageClock.src = 'images/clock.png';
    var imageScore = new Image();
    imageScore.src = 'images/score.png';
    var imageMoving = new Image();
    imageMoving.src = 'images/moving.png';

    ctx.font = "15px Arial";
    ctx.drawImage(imageClock, 820, 20);
    ctx.drawImage(imageScore, 820, 55);
    ctx.drawImage(imageMoving, 30, 20);

    ctx.fillText(this.time, 855, 40);
    ctx.fillText(this.score, 855, 75);
    ctx.fillText(this.travelers, 65, 41);

}



function passengers() {
    this.type = type;
}

function clear() {
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
var btnTrainA = document.getElementById("trainA");
var btnTrainAdel = document.getElementById("trainAdel");
var btnLineaB = document.getElementById("lineB");
var btnLineaBdel = document.getElementById("lineBdel");
var btnLineaBdelB = document.getElementById("lineBdelB");
var btnTrainB = document.getElementById("trainB");
var btnTrainBdel = document.getElementById("trainBdel");
var btnLineaC = document.getElementById("lineC");
var btnLineaCdel = document.getElementById("lineCdel");
var btnLineaCdelB = document.getElementById("lineCdelB");
var btnTrainC = document.getElementById("trainC");
var btnTrainCdel = document.getElementById("trainCdel");


var btnStart = document.getElementById("btnStart");



btnTrainA.onclick = function () {
    if ((lineaA.length > 1) && (allLine.length == 0)) {
        var newTrain = generateTrain('red', lineaA)
        newTrain.drawTrain();
        addTrain(newTrain);
    } else if (lineaA.length <= 1) {
        alert('Primero debes crear una Línea Roja');
    } else if (allLine.length > 0) {
        alert('Ya hay un tren recorriendo esta línea')
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
    if ((lineaB.length > 1) && (allLineB.length == 0)) {
        var newTrain = generateTrain('green', lineaB)
        newTrain.drawTrain();
        addTrainB(newTrain);
    } else if (lineaB.length <= 1) {
        alert('Primero debes crear una Línea Verde');
    } else if (allLineB.length > 0) {
        alert('Ya hay un tren recorriendo esta línea')
    }
}

btnTrainBdel.onclick = function () {
    travelers -= allLineB[0].passengers.length;
    allLineB.shift()
    estacionOrigenB = 0;
    estacionDestinoB = 1;
    stopB = false;
    incrementoB = 1;
    timeStoppedB = 0;
}


btnTrainC.onclick = function () {
    if ((lineaC.length > 1) && (allLineC.length == 0)) {
        var newTrain = generateTrain('blue', lineaC)
        newTrain.drawTrain();
        addTrainC(newTrain);
    } else if (lineaC.length <= 1) {
        alert('Primero debes crear una Línea Azul');
    } else if (allLineC.length > 0) {
        alert('Ya hay un tren recorriendo esta línea')
    }
}

btnTrainCdel.onclick = function () {
    travelers -= allLineC[0].passengers.length;
    allLineC.shift()
    estacionOrigenC = 0;
    estacionDestinoC = 1;
    stopC = false;
    incrementoC = 1;
    timeStoppedC = 0;
}



btnStart.onclick = function () {
    if (confirm("¿Estás seguro que deseas reiniciar el juego?")) {
        location.reload();
    } else {
        txt = "You pressed Cancel!";
    }
}