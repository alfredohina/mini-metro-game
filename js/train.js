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
          ctx.drawImage(image, trainConstructor.x, trainConstructor.y);
    }
}


function generateTrain(color, line) {
    var newTrain = new train(color, line[0].x-25, line[0].y-25);
    return newTrain;
}



function addTrain(train){
    allLine.push(train);
}



function moveTrain(lineaA) {
    for (i = 0; i < lineaA.length; i++) {
        var slope = (lineaA[0].y - lineaA[1].y) / (lineaA[0].x - lineaA[1].x);
        if (allLine[0].x !== lineaA[1].x - 25) {
            if (lineaA[0].x < lineaA[1].x) {
                allLine[0].x += 1
                allLine[0].y += slope
            } else {
                allLine[0].x -= 1
                allLine[0].y += -slope
            }
        }
    }
}



// train.prototype.followThePath = function (){
// stop 
// this.checks();
// 3 sec pause
// start - move
// };



function checks (){
    if (allLine[0].x === allStations[0].x-10) {
        if (allStations[0].type === allStations[0].passenger[0].type) {
            score + 1;
        }
    }


    // if (passengers.type === station.type) {
    //     arrayPassengers.splice(x, 1);
    //     score++;
    // }
};







// train.prototype.checks = function (){

// check allStations.type = passengers
// passengers--
// score++

//   };

