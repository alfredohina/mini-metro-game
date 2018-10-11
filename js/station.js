function station(type, x, y, width, height, capacity) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.capacity = 10;
  };

  station.prototype.drawStation = function (){
    this.image.src = "images/square.png";
    // this.image.src = "images/circle.png";
    // this.image.src = "images/triangle.png";
    // ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, 100, 100, 20, 20);
  };