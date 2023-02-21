/**
*
*  Document     : plot.js
*  Created on   : 22 Jun, 2016, 4:45:25 PM
*  Authors      : Pabitra K Jana, Debasish Das Adhikary
*  Organization : IIT Khatagpur
*  
*/

var can = null;
var context = null;
var cw, ch;
var count = 0, count1 = 0, count2 = 0;
var w0, w1, w2 = 0;
var x0 = -1;
var alpha = 0.5;
var samples = [];
var maxIterations;

window.onload = function () {
    can = document.getElementById("perceptron-canvas");
    context = can.getContext("2d");
    cw = can.width;
    ch = can.height;
    can.addEventListener('mousedown', draw, true);
    can.oncontextmenu = function (e) {
        e.preventDefault();
    };
    clearCanvas();

    document.getElementById("clear-btn").onclick = function () {
        clearCanvas();
        count = 0;
        count1 = 0;
        count2 = 0;
        samples = [];
    };

    document.getElementById("trackLearningRate").oninput = function () {
        var trl = document.getElementById("trackLearningRate").value;
        document.getElementById("tlrval").value = trl;
    };


    document.getElementById("learn-btn").onclick = function () {
        learn();
    };


};


function clearCanvas() {
    context.clearRect(0, 0, can.width, can.height);
}
/*
 function getPosition(event)
 {
 var x = new Number();
 var y = new Number();
 var canvas = document.getElementById("canvas");
 
 if (event.x !== undefined && event.y !== undefined)
 {
 x = event.x;
 y = event.y;
 }
 else // Firefox method to get the position
 {
 x = event.clientX + document.body.scrollLeft +
 document.documentElement.scrollLeft;
 y = event.clientY + document.body.scrollTop +
 document.documentElement.scrollTop;
 }
 
 x -= canvas.offsetLeft;
 y -= canvas.offsetTop;
 
 alert("x: " + x + "  y: " + y);
 
 }
 //var a= ("x: " + x + "  y: " + y);
 function createImageOnCanvas(imageId) {
 canvas.style.display = "block";
 document.getElementById("images").style.overflowY = "hidden";
 var img = new Image(300, 300);
 img.src = document.getElementById(imageId).src;
 context.drawImage(img, (0), (0)); //onload....
 }
 */
function draw(e) {
    var pos = getMousePos(can, e);
    var color = null;
    var cls;

    if (count < 20) {
        if (e.button === 0 && count1 < 10) {
            cls = 1;
            color = "#0000ff";
            count1++;
        }

        else if (e.button === 2 && count2 < 10) {
            cls = -1;
            color = "#ff0000";
            count2++;
        }
        else {
            alert("max 10 points");
            return;
        }
        count++;

    }
    else {
        alert("max 20 points");
        return;
    }
    posx = pos.x;
    posy = pos.y;
    var point = [];
    point.push(pos); //for point
    point.push(cls); //for cls 
    point.push(color); //for point color
    samples.push(point);
    
    drawPoints();

}
function drawPoints() {
    for (var i = 0; i < samples.length; i++)
    {
        var point = samples[i];
        context.beginPath();
        context.arc(point[0].x, point[0].y, 5, 0, 2 * Math.PI);
        context.closePath();
        context.fillStyle = point[2];
        context.fill();
        context.strokeStyle = point[2];
        context.stroke();
    }
}

function getMousePos(can, evt) {
    var rect = can.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function drawSeparationLine() {
    //point one for drawing seperation line
    var x1 = -20;

//    grph = this.board.getGraphics();
    var y1 = -(x1 * w1 / w2) - ((x0 * w0) / w2);
    
    var shift = ch / 2; //ch is canvas height

    var px1 = 0;
    var py1 = parseInt(shift - y1 * 20);

    // point two for drawing seperation line
    x1 = 20;
    var y2 = -(x1 * w1 / w2) + (w0 / w2);

    px2 = cw; //cw canvas width
    py2 = parseInt(shift - y2 * 20);
    if (w2 !== 0) {
        context.strokeStyle = "gray";
        context.beginPath();
        context.moveTo(px1, py1);
        context.lineTo(px2, py2);
        context.stroke();
        drawSamples();
    }

}

function learn() {
    context.clearRect(0, 0, can.width, can.height);
    drawPoints();
    var iterations = 0;
    var error = true;

    maxIterations = parseInt(document.getElementById("txtIterations").value);

    w0 = Math.random();
    w1 = Math.random();
    w2 = Math.random();

    alpha = parseFloat(document.getElementById("tlrval").value) / 1000;

    while (error && iterations < maxIterations) {
        error = false;

        for (var i = 0; i <= count - 1; i++) {
            var point = samples[i];
            var x1 = point[0].x;
            var x2 = point[0].y;

            var y;

            if (((w1 * x1) + (w2 * x2) - w0) < 0) {
                y = -1;
            } else {
                y = 1;
            }

            if (y !== point[1]) {
                error = true;

                w0 = w0 + alpha * (point[1] - y) * x0 / 2; //ak by x0 bolo +1, tak nedelime 2
                w1 = w1 + alpha * (point[1] - y) * x1 / 2;
                w2 = w2 + alpha * (point[1] - y) * x2 / 2;
            }

        }
        drawSeparationLine();
        iterations++;
    }


}





