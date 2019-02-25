/**
 * 
 */
var canvas = ctx = false;
var worldX = 0;
var worldY = 0;
var canvasX = worldX;
var canvasY = worldY;
var angle = 0;
var tyreAngle = 0;
const SCALE = 10;
var speed = 0;
var friction = 0;
var forceApp = 0;
var startTime = new Date();
var currTime = 0;
var time = 0;
var frameNumber = 0;
var carSwing = false;
var challenge = "";

function multiplyMatrix(coordinates, angle) {
    var current = [];
    
    current[0] = coordinates[0]*Math.cos(angle) + coordinates[1]*Math.sin(angle);
    current[1] = -coordinates[0]*Math.sin(angle) + coordinates[1]*Math.cos(angle);
    current[2] = coordinates[2]*Math.cos(angle) + coordinates[3]*Math.sin(angle);
    current[3] = -coordinates[2]*Math.sin(angle) + coordinates[3]*Math.cos(angle);
    current[4] = coordinates[4]*Math.cos(angle) + coordinates[5]*Math.sin(angle);
    current[5] = -coordinates[4]*Math.sin(angle) + coordinates[5]*Math.cos(angle);
    current[6] = coordinates[6]*Math.cos(angle) + coordinates[7]*Math.sin(angle);
    current[7] = -coordinates[6]*Math.sin(angle) + coordinates[7]*Math.cos(angle);

    return current;
}

function translateCoords(coordinates, x, y) {
    var current = [];
    
    for (i=0; i<=7; i++) {
        if (i%2 === 0) {
            current[i] = coordinates[i] + x;
        } else {
            current[i] = coordinates[i] + y;
        }
    }
    
    return current;
}

function drawCoords(coordinates, fillStyle) {
    ctx.beginPath();
    ctx.moveTo(coordinates[0], coordinates[1]);
    ctx.lineTo(coordinates[2], coordinates[3]);
    ctx.lineTo(coordinates[4], coordinates[5]);
    ctx.lineTo(coordinates[6], coordinates[7]);
    ctx.lineTo(coordinates[0], coordinates[1]);
    ctx.fillStyle = fillStyle;
    ctx.fill();
    ctx.closePath();
}