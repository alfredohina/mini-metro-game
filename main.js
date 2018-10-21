window.onload = function () {

    var newStation;

    // var game = new GameArea();

    var sSquare = new station('square', 450, 340);
    sSquare.drawImage();

    var sCircle = new station('circle', 500, 200)
    sCircle.drawImage();

    var sTriangle = new station('triangle', 300, 250)
    sTriangle.drawImage();



    addStation(sSquare)
    addStation(sCircle)
    addStation(sTriangle)



    window.setInterval(function () {
        if (allStations.length < 10) {
            newStation = generateRandomStation()
            addStation(newStation);
        }
    }, 1000);

    window.setInterval(function () {
            newPassenger = generateRandomPassenger()
    }, 1000);
    
    
    function loop(){
            clear();
            clock();
            if (allLine.length > 0) {
                checks();
            }
            if (lineaA.length > 1) {
                for (i = 0; i < lineaA.length-1; i++) {
                    ctx.lineWidth = 10;
                    var e = lineaA
                    ctx.moveTo(e[i].x, e[i].y);
                    ctx.lineTo(e[i+1].x, e[i+1].y);
                    ctx.stroke();
                }
            }
            allLine.forEach(train => {
                train.drawTrain();
            })
            if (allLine.length >= 1) {
                moveTrain(lineaA);
            }
            allStations.forEach(station => {
                station.drawImage();
            })
            allPassengers.forEach(passenger => {
                passenger.drawPassenger();
            })

        requestAnimationFrame(loop);
    };
    
    requestAnimationFrame(loop);
    


};

