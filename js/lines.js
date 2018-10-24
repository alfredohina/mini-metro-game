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

var pInicio = 0;

btnLineaA.onclick = function () {

   

    canvas.onclick = function (e) {

        allStXA = lineaA.map(function(obj) {       
            return obj.x + 15;
        });
        
        allStYA = lineaA.map(function(obj) {       
            return obj.y + 15;
        });


        if (lineaA.length == 0) {
            for (i = 0; i < allStX.length; i++) {
                if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                    lineaA.push({ x: allStX[i], y: allStY[i] });
                    pInicio = {x: allStX[i], y: allStY[i]}
                }
            }
        } else if (pInicio === 0) {
            if ((e.clientX < (allStXA[0]) + 50) && (e.clientX >= allStXA[0] -50) && (e.clientY < (allStYA[0]) + 50) && (e.clientY >= allStYA[0] -50)) {
            pInicio = {x: allStXA[0], y: allStYA[0]}
            } else if ((e.clientX < (allStXA[allStXA.length-1]) + 50) && (e.clientX >= allStXA[allStXA.length-1] - 50) && (e.clientY < (allStYA[allStYA.length-1]) + 50) && (e.clientY >= allStYA[allStYA.length-1] -50)) {
                pInicio = {x: allStXA[allStXA.length-1], y: allStYA[allStYA.length-1]}
            
            } else {
                alert ('Selecciona una cabecera')
            }

            // pInicio = {e.clientX, e.clientY}

        } else if (pInicio !== 0) {
            if ((pInicio.x + 15 == (allStXA[0]) ) && (pInicio.y + 15 == (allStYA[0]) )) {
                for (i = 0; i < allStX.length; i++) {
                    if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                        lineaA.push({ x: allStX[i], y: allStY[i] });
                    }
                }
            } else if ((pInicio.x == (allStXA[0]) ) && (pInicio.y == (allStYA[0]) )) {
                for (i = 0; i < allStX.length; i++) {
                    if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                        lineaA.unshift({ x: allStX[i], y: allStY[i] });
                    }
                }
            } else if ((pInicio.x < (allStXA[allStXA.length-1]) + 50) && (pInicio.x >= allStXA[allStXA.length-1]) && (pInicio.y < (allStYA[allStYA.length-1]) + 50) && (pInicio.y >= allStYA[allStYA.length-1])) {
                for (i = 0; i < allStX.length; i++) {
                    if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                        lineaA.push({ x: allStX[i], y: allStY[i] });
                       
                    }
                }
            }

            pInicio = 0;
            
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

