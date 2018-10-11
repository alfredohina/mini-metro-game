var canvas = document.getElementById("mini-metro");
var ctx = canvas.getContext("2d");



function startStations() {
    var randomX
    var randomY
    function random() {
        randomX = Math.floor(Math.random() * (300 - 600)) + 600;
        randomY = Math.floor(Math.random() * (200 - 400)) + 400;
    }
    var img = new Image();
    img.src = 'images/square.png';
    img.onload = function () {
        random();
        ctx.drawImage(img, randomX, randomY);
    };
    var img2 = new Image();
    img2.src = 'images/circle.png';
    img2.onload = function () {
        random();
        ctx.drawImage(img2, randomX, randomY);
    };
    var img3 = new Image();
    img3.src = 'images/triangle.png';
    img3.onload = function () {
        random();
        ctx.drawImage(img3, randomX, randomY);
    };
}

startStations();


// canvas.addEventListener("mousedown", function (evt) {
//     ctx.moveTo(10,10);
// });

// canvas.addEventListener("mousemove", function (e) {
//         Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
// });

// canvas.addEventListener("mouseup", function (evt) {
// ctx.lineTo(560,5680);
// ctx.strokeStyle = "#f00";
// ctx.stroke();
// });


/*



function station(type, x, y, width, height, capacity) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.capacity = 10;
    this.image = new Image();
  };

  station.prototype.drawStation = function (){

    ctx.moveTo(10,10);
ctx.lineTo(180,180);
ctx.strokeStyle = "#f00";
ctx.stroke();

    // this.image.src = "images/square.png";
    // this.image.src = "images/circle.png";
    // this.image.src = "images/triangle.png";
    // ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    // ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };



  
}

startStations();











// function startStations() {
    //     var randomX;
    //     var randomY;
    //     var oldRandomY;
    //     var oldRandomX;
        
    //     var a_valor_random = "";
    //     var v_valor = "";
        
    
    //     var img = new Image();
    //     img.src = 'images/square.png';
    //     a_valor_random = random();
    //     v_valor = a_valor_random.split(";");
    //     img.onload = function (v_valor) {
    //         ctx.drawImage(img, v_valor[0], v_valor[1]);
    //     };
    //     oldRandomX = v_valor[0];
    //     oldRandomY = v_valor[1];
    //     var img2 = new Image();
    //     img2.src = 'images/circle.png';
    //     img2.onload = function () {
    //         console.log(v_valor[0] +' = ' + (parseInt(v_valor[0])+ parseInt(10)) + ' = ' + oldRandomX);
    //         while (parseInt(v_valor[0]) <= (parseInt(oldRandomX) + parseInt(10))) {
    //             a_valor_random = random();
    //             v_valor = a_valor_random.split(";");
    //             console.log(v_valor[0]);
    //         }
    //         console.log(v_valor[0]+' = ' + parseInt(v_valor[0])+parseInt(10) + ' = ' + oldRandomX);
    //         ctx.drawImage(img2, v_valor[0], v_valor[1]);
    //         oldRandomX = v_valor[0];
    //         oldRandomY = v_valor[1];
    //     };
    //     var img3 = new Image();
    //     img3.src = 'images/triangle.png';
    //     img3.onload = function () {
    //         random();
    //         while (parseInt(v_valor[0]) <= (parseInt(oldRandomX) + parseInt(10))) {
    //             a_valor_random = random();
    //             v_valor = a_valor_random.split(";");
    //             console.log(v_valor[0]);
    //         }
    //         ctx.drawImage(img3, randomX, randomY);
    //     };
    // }
    
    // startStations();


    */