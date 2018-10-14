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



// station.prototype.






// if o switch case type = square

// pintar estación





  // check y dejar pasajero
