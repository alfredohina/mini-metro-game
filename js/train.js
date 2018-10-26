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
        var imageMoving = new Image();
        imageMoving.src = 'images/moving.png';
        ctx.drawImage(imageMoving, trainConstructor.x + 4, trainConstructor.y + 7);
        // ctx.font = "15px Arial";
        // ctx.fillText(travelers, trainConstructor.x + 28, trainConstructor.y + 37)
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

function addTrainB(train) {
    allLineB.push(train);
}

function addTrainC(train) {
    allLineC.push(train);
}



//MOVEMENT VALUES


var estacionOrigen = 0;
var estacionDestino = 1;
var stop = false;
var incremento = 1;
var timeStopped = 0;

var estacionOrigenB = 0;
var estacionDestinoB = 1;
var stopB = false;
var incrementoB = 1;
var timeStoppedB = 0;

var estacionOrigenC = 0;
var estacionDestinoC = 1;
var stopC = false;
var incrementoC = 1;
var timeStoppedC = 0;



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

    // var slope = (lineaA[estacionOrigen].y - lineaA[estacionDestino].y) / (lineaA[estacionOrigen].x - lineaA[estacionDestino].x);
    // var arctng = Math.atan(slope);

    // var cos = Math.cos(arctng * slope)
    // var sen = Math.sin(arctng * slope)

    // if (lineaA[estacionOrigen].x < lineaA[estacionDestino].x) {
    //     allLine[0].x += sen
    //     allLine[0].y -= cos
    // } else {
    //     allLine[0].x += sen
    //     allLine[0].y -= cos
    // }


    //CHECKS

    allStations.forEach(station => {
        if (stop) {
            if ((allLine[0].x + 15 >= station.x) && (allLine[0].x <= station.x)) {
                allLine.forEach(train => {
                    train.passengers.reduceRight(function (acc, item, index, object) {
                        if (item === station.type) {
                            object.splice(index, 1);
                            travelers--
                            travelersA--
                            score++
                        }
                    }, []);
                })

                station.passenger.forEach(pas => {
                    if (allLine[0].passengers.length < 6) {
                        allLine[0].passengers.push(pas.type);
                        station.passenger.splice(pas, 1);
                        travelers++
                        travelersA++
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



function moveTrainB() {

    //MOVEMENT
    var slope = (lineaB[estacionOrigenB].y - lineaB[estacionDestinoB].y) / (lineaB[estacionOrigenB].x - lineaB[estacionDestinoB].x);
    if (lineaB[estacionOrigenB].x < lineaB[estacionDestinoB].x) {
        allLineB[0].x += 0.5
        allLineB[0].y += slope / 2
    } else {
        allLineB[0].x -= 0.5
        allLineB[0].y += -slope / 2
    }

    //CHECKS

    allStations.forEach(station => {
        if (stopB) {
            if ((allLineB[0].x + 15 >= station.x) && (allLineB[0].x <= station.x)) {
                allLineB.forEach(train => {
                    train.passengers.reduceRight(function (acc, item, index, object) {
                        if (item === station.type) {
                            object.splice(index, 1);
                            travelers--
                            travelersB--
                            score++
                        }
                    }, []);
                })


                station.passenger.forEach(pas => {
                    if (allLineB[0].passengers.length < 6) {
                        allLineB[0].passengers.push(pas.type);
                        station.passenger.splice(pas, 1);
                        travelers++
                        travelersB++
                    }
                })
            }
        }
    });


    //RECALCULATIN DESTINY

    if (allLineB[0].x === lineaB[estacionDestinoB].x - 25) {
        estacionOrigenB += incrementoB;
        estacionDestinoB += incrementoB;
        if (estacionDestinoB === lineaB.length) {
            estacionOrigenB = lineaB.length - 1;
            estacionDestinoB = lineaB.length - 2;
            incrementoB = -1;
        }
        if (estacionDestinoB === -1) {
            estacionOrigenB = 0;
            estacionDestinoB = 1;
            incrementoB = +1;
        }
        stopB = true;
    }
}


function moveTrainC() {
    //MOVEMENT

    var slope = (lineaC[estacionOrigenC].y - lineaC[estacionDestinoC].y) / (lineaC[estacionOrigenC].x - lineaC[estacionDestinoC].x);
    if (lineaC[estacionOrigenC].x < lineaC[estacionDestinoC].x) {
        allLineC[0].x += 0.5
        allLineC[0].y += slope / 2
    } else {
        allLineC[0].x -= 0.5
        allLineC[0].y += -slope / 2
    }

    //CHECKS

    allStations.forEach(station => {
        if (stopC) {
            if ((allLineC[0].x + 15 >= station.x) && (allLineC[0].x <= station.x)) {
                allLineC.forEach(train => {
                    train.passengers.reduceRight(function (acc, item, index, object) {
                        if (item === station.type) {
                            object.splice(index, 1);
                            travelers--
                            travelersC--
                            score++
                        }
                    }, []);
                })

                station.passenger.forEach(pas => {
                    if (allLineC[0].passengers.length < 6) {
                        allLineC[0].passengers.push(pas.type);
                        station.passenger.splice(pas, 1);
                        travelers++
                        travelersC++
                    }
                })
            }
        }
    });


    //RECALCULATIN DESTINY

    if (allLineC[0].x === lineaC[estacionDestinoC].x - 25) {
        estacionOrigenC += incrementoC;
        estacionDestinoC += incrementoC;
        if (estacionDestinoC === lineaC.length) {
            estacionOrigenC = lineaC.length - 1;
            estacionDestinoC = lineaC.length - 2;
            incrementoC = -1;
        }
        if (estacionDestinoC === -1) {
            estacionOrigenC = 0;
            estacionDestinoC = 1;
            incrementoC = +1;
        }
        stopC = true;
    }
}