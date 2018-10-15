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
  var randomX = Math.floor(Math.random() * 900) - 50;
  //(300 - 600)) + 600;
  var randomY = Math.floor(Math.random() * 600) - 50;
  //(200 - 400)) + 400;
  var types = ['square', 'circle', 'triangle'];
  var randomType = types[Math.floor(Math.random() * types.length)];

  var newStation = new station(randomType, randomX, randomY);
  
  return newStation;
}





// station.prototype.






// if o switch case type = square

// pintar estación





  // check y dejar pasajero
