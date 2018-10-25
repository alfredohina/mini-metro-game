function train(color, x, y) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = 45;
    this.height = 26;
    this.speed = 1;
    this.currentCapacity = 0;
    this.maxCapacity = 6;
    this.passengers = [];
    this.drawTrain = function () {
        var trainConstructor = this;
        var image = new Image();
        image.src = 'images/' + trainConstructor.color + '.png';
        ctx.drawImage(image, trainConstructor.x, trainConstructor.y);
    }
}


function generateTrain(color, line) {
    var snd = new Audio("sounds/newTrain.mov");
    snd.play();
    var newTrain = new train(color, line[0].x - 25, line[0].y - 25);
    return newTrain;
}



function addTrain(train) {
    allLine.push(train);
}



//MOVEMENT VALUES


var estacionOrigen = 0;
var estacionDestino = 1;

var stop = false;

var incremento = 1;
var timeStopped = 0;




function moveTrain() {

//MOVEMENT

    var slope = (lineaA[estacionOrigen].y - lineaA[estacionDestino].y) / (lineaA[estacionOrigen].x - lineaA[estacionDestino].x);
    if (lineaA[estacionOrigen].x < lineaA[estacionDestino].x) {
        allLine[0].x += 0.5
        allLine[0].y += slope / 2
    } else {
        allLine[0].x -= 0.5
        allLine[0].y += -slope / 2
    }


//CHECKS

    allStations.forEach(station => {
        if (stop) {
            if ((allLine[0].x + 15 >= station.x) && (allLine[0].x <= station.x)) {

                allLine.forEach(train => {
                    train.passengers.forEach(pas => {
                        if (pas === station.type) {
                            // allLine[0].passengers.push(pas.type);
                            train.passengers.shift();
                            travelers--
                            score++
                        }
                    })
                })

                station.passenger.forEach(pas => {
                    if (allLine[0].passengers.length < 6) {
                        allLine[0].passengers.push(pas.type);
                        station.passenger.shift();
                        travelers++
                    }
                })
            }
        }
    });


//RECALCULATIN DESTINY

    if (allLine[0].x === lineaA[estacionDestino].x - 25) {


        estacionOrigen += incremento;
        estacionDestino += incremento;
        if (estacionDestino === lineaA.length) {
            estacionOrigen = lineaA.length - 1;
            estacionDestino = lineaA.length - 2;
            incremento = -1;
        }
        if (estacionDestino === -1) {
            estacionOrigen = 0;
            estacionDestino = 1;
            incremento = +1;
        }


        stop = true;

    }

}