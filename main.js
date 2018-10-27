var imageStart2 = new Image();
imageStart2.src = 'images/start.jpg';
        

window.onload = function () {
    
    var gameSituation = false;
    if(!gameSituation) {
        
        ctx.drawImage(imageStart2, 0, 0);
        ctx.font = "16px Arial";
        ctx.fillText('Use the mouse to create subway lines by clicking', 250, 230);
        ctx.fillText('on the station you choose as origin and', 250, 250);
        ctx.fillText('on the station you choose as destination.', 250, 270);
        ctx.fillText('Place trains to pick up passengers', 250, 310);
        ctx.fillText('and leave them at the station they want to arrive', 250, 330);
        ctx.font = "45px Arial";
        ctx.fillText('400', 305, 550);
        ctx.fillText('40', 515, 550);
    }

    
    document.body.addEventListener("keydown", function(e) {
        if (e.keyCode == 32 && !gameSituation) {
            startGame();
        }
      });

      function startGame() {
        gameSituation = true;
        var intervalId = setInterval(function () {
            time++;
        }, 1000);
        startStations()
        requestAnimationFrame(loop);
      };



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


function startStations(){
    window.setInterval(function () {
        if (allStations.length < 10) {
            newStation = generateRandomStation()
            addStation(newStation);
        }
    }, 10000);

    window.setInterval(function () {
            newPassenger = generateRandomPassenger()
    }, 5000);
}

    
    
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
                    ctx.moveTo(e[i].x+7, e[i].y+7);
                    ctx.lineTo(e[i+1].x+7, e[i+1].y+7);
                    ctx.stroke();
                }
            }

            if (lineaC.length > 1) {
                ctx.beginPath();
                ctx.strokeStyle = "#0066ff";
                for (i = 0; i < lineaC.length-1; i++) {
                    ctx.lineWidth = 10;
                    var e = lineaC
                    ctx.moveTo(e[i].x-7, e[i].y-7);
                    ctx.lineTo(e[i+1].x-7, e[i+1].y-7);
                    ctx.stroke();
                }
            }


            allLine.forEach(train => {
                train.drawTrain();
            })

            allLineB.forEach(train => {
                train.drawTrain();
            })

            allLineC.forEach(train => {
                train.drawTrain();
            })

        if (allLine.length > 0) {
            ctx.font = "15px Arial";
            ctx.fillText(travelersA, allLine[0].x + 28, allLine[0].y + 37)
        }

        if (allLineB.length > 0) {
            ctx.font = "15px Arial";
            ctx.fillText(travelersB, allLineB[0].x + 28, allLineB[0].y + 37)
        }

        if (allLineC.length > 0) {
            ctx.font = "15px Arial";
            ctx.fillText(travelersC, allLineC[0].x + 28, allLineC[0].y + 37)
        }

            if (allLine.length > 0) {
                if(stop && timeStopped == 200){
                    moveTrain();
                    stop = false;
                    timeStopped = 0;
                }
                else if(!stop){
                    moveTrain();
                }
            }

            if (allLineB.length > 0) {
                if(stopB && timeStoppedB == 200){
                    moveTrainB();
                    stopB = false;
                    timeStoppedB = 0;
                }
                else if(!stopB){
                    moveTrainB();
                }
            }

            if (allLineC.length > 0) {
                if(stopC && timeStoppedC == 200){
                    moveTrainC();
                    stopC = false;
                    timeStoppedC = 0;
                }
                else if(!stopC){
                    moveTrainC();
                }
            }
            
            allStations.forEach(station => {
                station.drawImage();
                station.passenger.forEach(pas => {
                pas.drawPassenger();
                })
            })

            if (stop) {
                timeStopped++;
            }

            if (stopB) {
                timeStoppedB++;
            }

            if (stopC) {
                timeStoppedC++;
            }


            if (score > 39) {
                var imageWn = new Image();
                imageWn.src = 'images/win2.jpg';
                ctx.drawImage(imageWn, 0, 0);
                document.addEventListener("keydown", function(event) {
                    location.reload();
                  })
            }

            if (time > 399) {
                var imageLose = new Image();
                imageLose.src = 'images/lose.jpg';
                ctx.drawImage(imageLose, 0, 0);
                document.addEventListener("keydown", function(event) {
                    location.reload();
                  })
            }
            

        requestAnimationFrame(loop);
    };
};

