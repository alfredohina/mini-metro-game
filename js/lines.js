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
var allLineB = [];
var allLineC = [];

var pInicio = 0;
var pInicioB = 0;
var pInicioC = 0;

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



btnLineaAdel.onclick = function () {
    lineaA.shift();
}

btnLineaAdelB.onclick = function () {
    lineaA.pop();
}





btnLineaB.onclick = function () {

    canvas.onclick = function (e) {

        allStXB = lineaB.map(function(obj) {       
            return obj.x + 15;
        });
        
        allStYB = lineaB.map(function(obj) {       
            return obj.y + 15;
        });


        if (lineaB.length == 0) {
            for (i = 0; i < allStX.length; i++) {
                if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                    lineaB.push({ x: allStX[i], y: allStY[i] });
                    pInicioB = {x: allStX[i], y: allStY[i]}
                }
            }
        } else if (pInicioB === 0) {
            if ((e.clientX < (allStXB[0]) + 50) && (e.clientX >= allStXB[0] -50) && (e.clientY < (allStYB[0]) + 50) && (e.clientY >= allStYB[0] -50)) {
            pInicioB = {x: allStXB[0], y: allStYB[0]}
            } else if ((e.clientX < (allStXB[allStXB.length-1]) + 50) && (e.clientX >= allStXB[allStXB.length-1] - 50) && (e.clientY < (allStYB[allStYB.length-1]) + 50) && (e.clientY >= allStYB[allStYB.length-1] -50)) {
                pInicioB = {x: allStXB[allStXB.length-1], y: allStYB[allStYB.length-1]}
            
            } else {
                alert ('Selecciona una cabecera')
            }

            // pInicio = {e.clientX, e.clientY}

        } else if (pInicioB !== 0) {
            if ((pInicioB.x + 15 == (allStXB[0]) ) && (pInicioB.y + 15 == (allStYB[0]) )) {
                for (i = 0; i < allStX.length; i++) {
                    if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                        lineaB.push({ x: allStX[i], y: allStY[i] });
                    }
                }
            } else if ((pInicioB.x == (allStXB[0]) ) && (pInicioB.y == (allStYB[0]) )) {
                for (i = 0; i < allStX.length; i++) {
                    if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                        lineaB.unshift({ x: allStX[i], y: allStY[i] });
                    }
                }
            } else if ((pInicioB.x < (allStXB[allStXB.length-1]) + 50) && (pInicioB.x >= allStXB[allStXB.length-1]) && (pInicioB.y < (allStYB[allStYB.length-1]) + 50) && (pInicioB.y >= allStYB[allStYB.length-1])) {
                for (i = 0; i < allStX.length; i++) {
                    if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                        lineaB.push({ x: allStX[i], y: allStY[i] });
                       
                    }
                }
            }

            pInicioB = 0;
            
        }

        
    };

    
};



btnLineaBdel.onclick = function () {
    lineaB.shift();
}

btnLineaBdelB.onclick = function () {
    lineaB.pop();
}






btnLineaC.onclick = function () {

    canvas.onclick = function (e) {

        allStXC = lineaC.map(function(obj) {       
            return obj.x + 15;
        });
        
        allStYC = lineaC.map(function(obj) {       
            return obj.y + 15;
        });


        if (lineaC.length == 0) {
            for (i = 0; i < allStX.length; i++) {
                if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                    lineaC.push({ x: allStX[i], y: allStY[i] });
                    pInicioC = {x: allStX[i], y: allStY[i]}
                }
            }
        } else if (pInicioC === 0) {
            if ((e.clientX < (allStXC[0]) + 50) && (e.clientX >= allStXC[0] -50) && (e.clientY < (allStYC[0]) + 50) && (e.clientY >= allStYC[0] -50)) {
                pInicioC = {x: allStXC[0], y: allStYC[0]}
            } else if ((e.clientX < (allStXC[allStXC.length-1]) + 50) && (e.clientX >= allStXC[allStXC.length-1] - 50) && (e.clientY < (allStYC[allStYC.length-1]) + 50) && (e.clientY >= allStYC[allStYC.length-1] -50)) {
                pInicioC = {x: allStXC[allStXC.length-1], y: allStYC[allStYC.length-1]}
            
            } else {
                alert ('Selecciona una cabecera')
            }

            // pInicio = {e.clientX, e.clientY}

        } else if (pInicioC !== 0) {
            if ((pInicioC.x + 15 == (allStXC[0]) ) && (pInicioC.y + 15 == (allStYC[0]) )) {
                for (i = 0; i < allStX.length; i++) {
                    if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                        lineaC.push({ x: allStX[i], y: allStY[i] });
                    }
                }
            } else if ((pInicioC.x == (allStXC[0]) ) && (pInicioC.y == (allStYC[0]) )) {
                for (i = 0; i < allStX.length; i++) {
                    if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                        lineaC.unshift({ x: allStX[i], y: allStY[i] });
                    }
                }
            } else if ((pInicioC.x < (allStXC[allStXC.length-1]) + 50) && (pInicioC.x >= allStXC[allStXC.length-1]) && (pInicioC.y < (allStYC[allStYC.length-1]) + 50) && (pInicioC.y >= allStYC[allStYC.length-1])) {
                for (i = 0; i < allStX.length; i++) {
                    if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                        lineaC.push({ x: allStX[i], y: allStY[i] });
                       
                    }
                }
            }

            pInicioC = 0;
            
        }

        
    };

    
};



btnLineaCdel.onclick = function () {
    lineaC.shift();
}

btnLineaCdelB.onclick = function () {
    lineaC.pop();
}