window.onload = function () {
    var game = new GameArea();

    var sSquare = new station('square', 450, 340);
    sSquare.drawImage();

    var sCircle = new station('circle', 500, 200)
    sCircle.drawImage();

    var sTriangle = new station('triangle', 300, 250)
    sTriangle.drawImage();

    var allStations = [
        sSquare, sCircle, sTriangle
    ]


    window.setInterval(function () {

        function generateRandomStation() {
            var randomX = Math.floor(Math.random() * 900) - 50;
            //(300 - 600)) + 600;
            var randomY = Math.floor(Math.random() * 600) - 50;
            //(200 - 400)) + 400;
            var types = ['square', 'circle', 'triangle'];
            var randomType = types[Math.floor(Math.random() * types.length)];
    
            var newStation = new station(randomType, randomX, randomY);
            
            newStation.drawImage();
            allStations.push(newStation);
        }

        generateRandomStation()

        var lineaA = [];

        var allStX = allStations.map(function(obj) {       
            return obj.x + 15;
        });
    
        var allStY = allStations.map(function(obj) {       
            return obj.y + 15;
        });



               
        canvas.addEventListener("click", function (e) {
            
            for (i = 0; i < allStX.length; i++) {
                if ((e.clientX < (allStX[i]) + 50) && (e.clientX >= allStX[i]) && (e.clientY < (allStY[i]) + 50) && (e.clientY >= allStY[i])) {
                    ctx.lineWidth = 10;
                    // ctx.strokeStyle = this.color;
                    ctx.lineTo(allStX[i], allStY[i]);
                    ctx.stroke();
                    lineaA.push({x: allStX[i], y: allStY[i]});
                    console.log(lineaA);
                }
            }
        });

    }, 5000);

};


clock();









// setTimeout 10000 call generateStation(name4)

