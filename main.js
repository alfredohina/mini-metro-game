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

            if (lineaA.length > 1) {
                ctx.beginPath();
                ctx.strokeStyle = "#ff0000";
                for (i = 0; i < lineaA.length-1; i++) {
                    ctx.lineWidth = 10;
                    var e = lineaA
                    ctx.moveTo(e[i].x, e[i].y);
                    ctx.lineTo(e[i+1].x, e[i+1].y);
                    ctx.stroke();
                }
            }

            if (lineaB.length > 1) {
                ctx.beginPath();
                ctx.strokeStyle = "#33cc33";
                for (i = 0; i < lineaB.length-1; i++) {
                    ctx.lineWidth = 10;
                    var e = lineaB
                    ctx.moveTo(e[i].x, e[i].y);
                    ctx.lineTo(e[i+1].x, e[i+1].y);
                    ctx.stroke();
                }
            }

            if (lineaC.length > 1) {
                ctx.beginPath();
                ctx.strokeStyle = "#0066ff";
                for (i = 0; i < lineaC.length-1; i++) {
                    ctx.lineWidth = 10;
                    var e = lineaC
                    ctx.moveTo(e[i].x, e[i].y);
                    ctx.lineTo(e[i+1].x, e[i+1].y);
                    ctx.stroke();
                }
            }


            allLine.forEach(train => {
                train.drawTrain();
            })
            if (allLine.length >= 1) {
                if(stop && ticksStopped == 10){
                    moveTrain();
                    stop = false;
                    ticksStopped = 0;
                }
                else if(!stop){
                    moveTrain();
                }
                
            }
            allStations.forEach(station => {
                station.drawImage();
            })
            allPassengers.forEach(passenger => {
                passenger.drawPassenger();
            })

           if(stop)
            ticksStopped++;
        requestAnimationFrame(loop);
    };
    
    requestAnimationFrame(loop);
    


};

