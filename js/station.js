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


// function startStations() {

//   circle.onload = function() {
//     ctx.drawImage(circle, 500, 200);
//   };

//   triangle.onload = function() {
//       ctx.drawImage(triangle, 300, 250);
//     };

//   square.onload = function() {
//       ctx.drawImage(square, 450, 340);
//     };
// }




// if o switch case type = square

// pintar estación




station.prototype.push = function () {
  allStations.push({ type: randomType, x: randomX, y: randomY });
};





  // check y dejar pasajero
