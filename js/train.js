function train () {
    this.x = x;
    this.y = y;
    this.width = 45;
    this.height = 26;
    this.speed = 1;
    this.currentCapacity = 0;
    this.maxCapacity = 6;
    this.passengers = [];
}

train.prototype.draw = function (){
    ctx.fillRect(this.x, this.y, this.width, this.height);
};



train.prototype.followThePath = function (){
// stop 
this.checks();
// 3 sec pause
// start - move
};


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