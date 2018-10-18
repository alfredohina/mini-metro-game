function train (color, x, y) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = 45;
    this.height = 26;
    this.speed = 1;
    this.currentCapacity = 0;
    this.maxCapacity = 6;
    this.passengers = [];
    this.drawTrain = function() {
        var trainConstructor = this;
        var image = new Image();
        image.src = 'images/' + trainConstructor.color + '.png';
    
        image.onload = function() {
          ctx.drawImage(image, trainConstructor.x, trainConstructor.y);
        };
    }
}


function generateTrain(color, line) {
    var newTrain = new train(color, line[0].x-25, line[0].y-25);
    return newTrain;
}



function addTrain(train){
    allLine.push(train);
}


function moveTrain(train){
    allLine[0].x++;
    console.log(allLine)
}



// train.prototype.followThePath = function (){
// stop 
// this.checks();
// 3 sec pause
// start - move
// };






train.prototype.checks = function (){
    if (passengers.type === station.type) {
        arrayPassengers.splice(x, 1);
        this.currentCapacity--;
        score++;
    }
    followThePath();
};







// train.prototype.checks = function (){

// check allStations.type = passengers
// passengers--
// score++

//   };

