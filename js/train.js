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
    var snd = new Audio("sounds/newTrain.mov"); // buffers automatically when created
  snd.play();
    var newTrain = new train(color, line[0].x-25, line[0].y-25);
    return newTrain;
}



function addTrain(train){
    allLine.push(train);
}

var estacionOrigen = 0;
var estacionDestino = 1;

var stop = false;

var incremento = 1;
var timeStopped = 0;

function moveTrain() {


        var slope = (lineaA[estacionOrigen].y - lineaA[estacionDestino].y) / (lineaA[estacionOrigen].x - lineaA[estacionDestino].x);
            if (lineaA[estacionOrigen].x < lineaA[estacionDestino].x) {
                allLine[0].x += 0.5
                allLine[0].y += slope / 2
            } else {
                allLine[0].x -= 0.5
                allLine[0].y += -slope / 2
            }
    



        if(allLine[0].x === allStations[0].x){
                //llegada a destino
            // if (allLine.currentCapacity <= allLine.maxCapacity) {
                // splice a estacion
                    allStations[0].passenger.forEach(elem => {
                        console.log('a')
                        allStations[0].passenger.shift()                    
                        travelers++
                });
                // -- allStations[0].passenger.splice(0,3)
                // push a tren
                // -- travelers++
                // this.currentCapacity++
            // }
        }




        if(allLine[0].x === lineaA[estacionDestino].x - 25){

            //llegada a destino


            estacionOrigen += incremento;
            estacionDestino += incremento;
            if (estacionDestino === lineaA.length) {
                estacionOrigen = lineaA.length -1;
                estacionDestino = lineaA.length -2;
                incremento = -1;
            }
            if (estacionDestino === -1) {
                estacionOrigen = 0;
                estacionDestino = 1;
                incremento = +1;
            }

            //partimos hacia otro lugar

            // if (allStations[X].passengers = allLine[0].passengers) {
                
            //     splice del array
            //     this.currentCapacity--
            //     travelers--
            //     score++
            // }



            stop = true;
           
        }
       
}




// function checks (){
//     if (allLine[0].x === allStations[0].x-10) {
//         if (allStations[0].type === allStations[0].passenger[0].type) {
//             score + 1;
//         }
//     }


    // if (passengers.type === station.type) {
    //     arrayPassengers.splice(x, 1);
    //     score++;
    // }
// };


