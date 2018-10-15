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



var allStX = allStations.map(function(obj) {       
    return obj.x + 15;
});

var allStY = allStations.map(function(obj) {       
    return obj.y + 15;
});


btnLineaA.onclick = function () {
    
    ctx.strokeStyle = "#ff0000";
    ctx.beginPath();
    canvas.onclick = function (e) {
        
        for (i = 0; i < allStX.length; i++) {
            if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                ctx.lineWidth = 10;
                // ctx.strokeStyle = this.color;
                ctx.lineTo(allStX[i], allStY[i]);
                ctx.stroke();
                lineaA.push({ x: allStX[i], y: allStY[i] });
            }
        }
    };
};


btnLineaB.onclick = function () {
    ctx.strokeStyle = "#33cc33";
    ctx.beginPath();
    canvas.onclick = function (e) {

        for (i = 0; i < allStX.length; i++) {
            if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                ctx.lineWidth = 10;
                // ctx.strokeStyle = this.color;
                ctx.lineTo(allStX[i], allStY[i]);
                ctx.stroke();
                lineaA.push({ x: allStXB[i], y: allStYB[i] });
            }
        }
    };
};


btnLineaC.onclick = function () {
    ctx.strokeStyle = "#0066ff";
    ctx.beginPath();
    canvas.onclick = function (e) {

        for (i = 0; i < allStX.length; i++) {
            if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                ctx.lineWidth = 10;
                // ctx.strokeStyle = this.color;
                ctx.lineTo(allStX[i], allStY[i]);
                ctx.stroke();
                lineaA.push({ x: allStXC[i], y: allStYC[i] });
            }
        }
    };
};


// current mouse pos -> loop de los moveTo (comprobar con current mouse con evento client) Si es igual, hace splice.Guarda esa variable y punta 

// select color (en la instancia llamar a este metodo)