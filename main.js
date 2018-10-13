window.onload = function() {
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
};


//addMoreStation() creanueva instacia, push al array allStation, drawStation

function generateRandomStation(name){
    var randomX = Math.floor(Math.random() * 900) - 50;
    //(300 - 600)) + 600;
    var randomY = Math.floor(Math.random() * 600) - 50;
    //(200 - 400)) + 400;
    var types = ['square', 'circle', 'triangle'];
    var randomType = types[Math.floor(Math.random() * types.length)];

 
    newStation = new station(randomType, randomX, randomY);
    newStation.drawImage();

    
    // push(name);
}

generateRandomStation(name);
generateRandomStation(name);

console.log(window);

// function loop(){
    
// }

// setTimeout 10000 call generateStation(name4)
