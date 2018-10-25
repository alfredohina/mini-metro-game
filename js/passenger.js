function passenger(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.drawPassenger = function () {
        var passengerConstructor = this;
        var image = new Image();
        image.src = 'images/pas/' + passengerConstructor.type + '.png';
        ctx.drawImage(image, passengerConstructor.x, passengerConstructor.y);
    }
};


function generateRandomPassenger() {
    var randStation = Math.floor(Math.random()*allStations.length)
    var randomStations = allStations[randStation];
    // Math.floor(Math.random() * (860 - 100) + 100);
    var types = ['square', 'circle', 'triangle'];
    var randomType = types[Math.floor(Math.random() * types.length)];

    if ((allStations[randStation].passenger.length > 0) && (allStations[randStation].passenger.length < 2)) {
        var newPassenger = new passenger(randomType, randomStations.x + 50, randomStations.y);
        allStations[randStation].passenger.push(newPassenger);
    } else if (allStations[randStation].passenger.length < 1){
        var newPassenger = new passenger(randomType, randomStations.x + 35, randomStations.y);
        allStations[randStation].passenger.push(newPassenger);
    } else if ((allStations[randStation].passenger.length > 1) && (allStations[randStation].passenger.length < 3)) {
        var newPassenger = new passenger(randomType, randomStations.x + 65, randomStations.y);
        allStations[randStation].passenger.push(newPassenger); 
    }
}
