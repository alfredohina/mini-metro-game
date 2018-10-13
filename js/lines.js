function lines(color) {
    this.color = color;
    this.stroke = 10;
    this.positions = [];
}



lines.prototype.Draw = function(color, e){
// pintar linea y recibir posición

// con parámetro de color


var iniX = e.clientX;
var iniY = e.clientY;

    canvas.addEventListener("mousedown", function (e) {
        if (iniX === allStations.x && iniY === allStations.y) {
            ctx.moveTo();
        }
    });

    canvas.addEventListener("mousemove", function (e) {
        ctx.moveTo();
        ctx.lineTo(e.clientX, e.clientY);
    });
    
    canvas.addEventListener("mouseup", function (e) {
        if (iniX === allStations.x && iniY === allStations.y) {
            ctx.strokeStyle = this.color;
            ctx.lineTo(e.clientX,e.clientY);
            ctx.stroke();
        }
    });

}

// current mouse pos -> loop de los moveTo (comprobar con current mouse con evento client) Si es igual, hace splice.Guarda esa variable y punta 

// select color (en la instancia llamar a este metodo)