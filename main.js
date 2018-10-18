window.onload = function () {
    var game = new GameArea();

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
            var newStation = generateRandomStation()
            newStation.drawImage();
            addStation(newStation);
        }

    }, 300);


    loop();

};














// setTimeout 10000 call generateStation(name4)

