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
