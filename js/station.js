function station(type, x, y) {
  this.type = type;
  this.x = x;
  this.y = y;
  this.passenger = []
  this.currentCapacity = 0;
  this.maxCapacity = 4;
  this.drawImage = function() {
    var constructor = this;
    var image = new Image();
    image.src = 'images/' + constructor.type + '.png';
      ctx.drawImage(image, constructor.x, constructor.y);
  }
};

var spaces = [
  {x1: 100, x2: 250, y1:70, y2: 200},
  {x1: 300, x2: 500, y1:70, y2: 150},
  {x1: 550, x2: 800, y1:70, y2: 180},

  {x1: 100, x2: 250, y1:200, y2: 340},
  {x1: 550, x2: 800, y1:220, y2: 340},

  {x1: 100, x2: 250, y1:400, y2: 550},
  {x1: 300, x2: 500, y1:400, y2: 550},
  {x1: 550, x2: 750, y1:400, y2: 550}
];


function getPositions() {
spaces.forEach(element => {
  var xfin = Math.round(Math.random() * (element.x1 - element.x2) + element.x2)
  var yfin = Math.round(Math.random() * (element.y1 - element.y2) + element.y2)
  spaces.push({x: xfin, y: yfin})
});
}

getPositions();

function getObjPositions() {
  spaces.splice(0, 8)
}

getObjPositions();





function generateRandomStation() {
  var randObj = Math.floor(Math.random()*spaces.length);
  var item = spaces[randObj];
  spaces.splice(randObj, 1);



  var snd = new Audio("sounds/newStation.mov");
  snd.play();
  var randomX = Math.floor(Math.random() * (860 - 100) + 100);
  //(300 - 600)) + 600;
  var randomY = Math.floor(Math.random() * (560 - 40) + 40);
  //(200 - 400)) + 400;
  var types = ['square', 'circle', 'triangle'];
  var randomType = types[Math.floor(Math.random() * types.length)];

  
    var newStation = new station(randomType, item.x, item.y);
    return newStation;
}
