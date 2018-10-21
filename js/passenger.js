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
    var prueba = Math.floor(Math.random()*allStations.length)
    var randomStations = allStations[prueba];
    // Math.floor(Math.random() * (860 - 100) + 100);
    var types = ['square', 'circle', 'triangle'];
    var randomType = types[Math.floor(Math.random() * types.length)];

    if ((allStations[prueba].passenger.length > 0) && (allStations[prueba].passenger.length < 2)) {
        var newPassenger = new passenger(randomType, randomStations.x + 50, randomStations.y);
        allPassengers.push(newPassenger);
        allStations[prueba].passenger.push(newPassenger);
    } else if (allStations[prueba].passenger.length < 1){
        var newPassenger = new passenger(randomType, randomStations.x + 35, randomStations.y);
        allPassengers.push(newPassenger);
        allStations[prueba].passenger.push(newPassenger);
    } else if ((allStations[prueba].passenger.length > 1) && (allStations[prueba].passenger.length < 3)) {
        var newPassenger = new passenger(randomType, randomStations.x + 65, randomStations.y);
        allPassengers.push(newPassenger);
        allStations[prueba].passenger.push(newPassenger);
    } else if ((allStations[prueba].passenger.length > 2) && (allStations[prueba].passenger.length < 4)) {
        var newPassenger = new passenger(randomType, randomStations.x + 80, randomStations.y);
        allPassengers.push(newPassenger);
        allStations[prueba].passenger.push(newPassenger);
    }
}


var allPassengers = [];