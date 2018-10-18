function station(type, x, y) {
  this.type = type;
  this.x = x;
  this.y = y;
  this.width = 20;
  this.height = 20;
  this.currentCapacity = 0;
  this.maxCapacity = 10;
  this.drawImage = function() {
    var constructor = this;
    var image = new Image();
    image.src = 'images/' + constructor.type + '.png';

    image.onload = function() {
      ctx.drawImage(image, constructor.x, constructor.y);
    };
  }
};


function generateRandomStation() {
  var randomX = Math.floor(Math.random() * (860 - 100) + 100);
  //(300 - 600)) + 600;
  var randomY = Math.floor(Math.random() * (560 - 40) + 40);
  //(200 - 400)) + 400;
  var types = ['square', 'circle', 'triangle'];
  var randomType = types[Math.floor(Math.random() * types.length)];


  
  for (i = 0; i < allStations.length; i++) {

    // if (!((randomX < (allStations[(allStations.length - 1)].x + 50)) && (randomX >= (allStations[(allStations.length - 1)].x - 50)) && (randomY < (allStations[(allStations.length - 1)].y + 50)) && (randomY >= (allStations[(allStations.length - 1)].y - 50)))) {
    //   var newStation = new station(randomType, randomX, randomY);
    //   return newStation;
    // }
    
    // if (!((randomX < (allStations[i].x + 100)) && (randomX >= (allStations[i].x - 50)) && (randomY < (allStations[i].x + 50)) && (randomY >= (allStations[i].y - 50)))) {
    //   var newStation = new station(randomType, randomX, randomY);
    //   return newStation;
    // }
    var newStation = new station(randomType, randomX, randomY);
    return newStation;
  }
}




// if o switch case type = square



  // check y dejar pasajero
