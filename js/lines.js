function lines(color) {
    this.color = color;
    this.stroke = 10;
    this.positions = [];
}

function addStation(station){
    allStations.push(station);
    allStX.push(station.x + 15);
    allStY.push(station.y + 15)
}



var lineaA = [];

var allStXA = lineaA.map(function(obj) {       
    return obj.x + 15;
});

var allStYA = lineaA.map(function(obj) {       
    return obj.y + 15;
});


var lineaB = [];

var allStXB = lineaB.map(function(obj) {       
    return obj.x + 15;
});

var allStYB = lineaB.map(function(obj) {       
    return obj.y + 15;
});


var lineaC = [];

var allStXC = lineaC.map(function(obj) {       
    return obj.x + 15;
});

var allStYC = lineaC.map(function(obj) {       
    return obj.y + 15;
});

var allStations = [];

var allStX = allStations.map(function(obj) {       
    return obj.x + 15;
});

var allStY = allStations.map(function(obj) {       
    return obj.y + 15;
});

var allLine = [];


btnLineaA.onclick = function () {

    canvas.onclick = function (e) {
        for (i = 0; i < allStX.length; i++) {
            if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                lineaA.push({ x: allStX[i], y: allStY[i] });
            }
        }
    };
};


btnLineaB.onclick = function () {

    canvas.onclick = function (e) {

        for (i = 0; i < allStX.length; i++) {
            if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                lineaB.push({ x: allStX[i], y: allStY[i] });
            }
        }
    };
};


btnLineaC.onclick = function () {
    
    canvas.onclick = function (e) {

        for (i = 0; i < allStX.length; i++) {
            if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                lineaC.push({ x: allStX[i], y: allStY[i] });
            }
        }
    };
};

