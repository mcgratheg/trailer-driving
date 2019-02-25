window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame
			|| window.mozRequestAnimationFrame || window.oRequestAnimationFrame
			|| window.msRequestAnimationFrame || function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
})();

window.cancelAnimFrame = (function() {
	return window.cancelAnimationFrame || window.webkitCancelAnimationFrame
			|| window.mozCancelAnimationFrame || window.oCancelAnimationFrame
			|| window.msCancelAnimationFrame
})();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function crash() {
	var option = confirm("You have crashed!\nReset?");
	if (option == true) {
		window.location.reload();
	}
	if (option == false) {
		keyW = false;
		keyA = false;
		keyS = false;
		keyD = false;
		keyZ = false;
		keyX = false;
		keyC = false;
		cancelAnimFrame(myReq);
	}
	
}

function keyDownHandler(event) {
	var keyCode = event.keyCode;
	switch (keyCode) {
	case 68:
		keyD = true;
		break;
	case 83:
		keyS = true;
		break;
	case 65:
		keyA = true;
		break;
	case 87:
		keyW = true;
		break;
	case 90:
		keyZ = true;
		break;
	case 88:
		keyX = true;
		break;
	case 67:
		keyC = true;
		break;
	}
}

function keyUpHandler(event) {
	var keyCode = event.keyCode;
	switch (keyCode) {
	case 68:
		keyD = false;
		break;
	case 83:
		keyS = false;
		break;
	case 65:
		keyA = false;
		break;
	case 87:
		keyW = false;
		break;
	case 90:
		keyZ = false;
		break;
	case 88:
		keyX = false;
		break;
	case 67: 
		keyC = false;
		break;
	}
}

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;
var keyZ = false;
var keyX = false;
var keyC = false;

let car = new Transport(50, 65, 4, 1500, 2000, 0, 0);
let carTyre1 = new Tyre (10, 15, 0, 0, 0, 0, 0, true, false);
let carTyre2 = new Tyre (10, 15, 0, 0, 0, 0, 0, true, false);
let carTyre3 = new Tyre (10, 15, 0, 0, 0, 0, 0, false, false);
let carTyre4 = new Tyre (10, 15, 0, 0, 0, 0, 0, false, false);
let tow = new Tow(0, 10, 20, 5, 0, 0, 0, 0, 0, 0);
let trailer = new Trailer(50, 70, 2, 100, 1500, 0, 0, 0, 0.5);
let trailerTyre1 = new Tyre (10, 15, 0, 0, 0, 0, 0, false, true);
let trailerTyre2 = new Tyre (10, 15, 0, 0, 0, 0, 0, false, true);

function defaultCar() {
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	
	car.x = canvasX + canvas.width / 2;
	car.y = canvasY + canvas.height / 2;
	
	challenge = "default";
	
	setup();
}

function restoreDefault() {
	cancelAnimFrame(myReq);
	
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	
	car.x = canvasX + canvas.width / 2;
	car.y = canvasY + canvas.height / 2;
	tyreAngle = 0;
	angle = 0;
	tow.theta = 0;
	
	challenge = "default";
	
	setup();
}

function challengeOne() {
	cancelAnimFrame(myReq);
	
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	
	car.x = canvasX + 700;
	car.y = canvasY + 100;
	tyreAngle = 0;
	angle = 0;
	tow.theta = 0;
	
	challenge = "challengeOne";
	
	setup();
}

function challengeTwo() {
	cancelAnimFrame(myReq);
	
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	
	car.x = canvasX + 150;
	car.y = canvasY + 390;
	tyreAngle = 0;
	angle = -Math.PI / 2;
	tow.theta = 0;
	
	challenge = "challengeTwo";
	
	setup();
}

function setup() {
	
	x = canvas.width;
	y= canvas.height;
	
	carTyre1.x = car.x - car.width/2;
	carTyre1.y = car.y - 5*car.length/12 + carTyre1.length/2;
	carTyre2.x = car.x + car.width/2;
	carTyre2.y = car.y - 5*car.length/12 + carTyre2.length/2;
	carTyre3.x = car.x - car.width/2;
	carTyre3.y = car.y + 5*car.length/12 - carTyre3.length/2;
	carTyre4.x = car.x + car.width/2;
	carTyre4.y = car.y + 5*car.length/12 - carTyre4.length/2;
	tow.x = car.x;
	tow.y = car.y;
	trailer.x = tow.x;
	trailer.y = tow.y + tow.length;
	trailerTyre1.x = - trailer.width/2;
	trailerTyre1.y = trailer.length/2;
	trailerTyre2.x = trailer.width/2;
	trailerTyre2.y = trailer.length/2;
	

	draw();
}

function draw() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	drawCarPark();
	if (challenge == "challengeOne") {
		drawChallengeOne();
	}
	if (challenge == "challengeTwo") {
		drawChallengeTwo();
	}

	car.drawTransport();
	/*carTyre1.drawTransportTyre();
	carTyre2.drawTransportTyre();
	carTyre3.drawTransportTyre();
	carTyre4.drawTransportTyre();
	tow.drawTow();
	trailer.drawTransport();
	trailerTyre1.drawTrailerTyre();
	trailerTyre2.drawTrailerTyre();*/

	update();

}

function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// console.log(p.theta);
	
	if (keyW == true && keyS == false) {
		angle += 0.025*tyreAngle;
		canvasX += Math.sin(angle);
		canvasY += Math.cos(angle);
		if (Math.abs(tow.theta) >= Math.abs(tyreAngle)) {
			if (tow.theta >= 0 && tyreAngle <= 0) {
				tow.theta -= Math.PI / 180 * 0.25;
				if (tow.theta < Math.PI / 180 * 0.25) {
					tow.theta = 0;
				}
			}
			if (tow.theta < 0 && tyreAngle < 0) {
				tow.theta += Math.PI / 180 * 0.5;
			}
			if (tow.theta <= 0 && tyreAngle >= 0) {
				tow.theta += Math.PI / 180 * 0.25;
				if (tow.theta > -Math.PI / 180 * 0.25) {
					tow.theta = 0;
				}
			}
			if (tow.theta > 0 && tyreAngle > 0) {
				tow.theta -= Math.PI / 180 * 0.5;
			}
		}
		if (Math.abs(tow.theta) < Math.abs(tyreAngle)) {
			if (tow.theta >= 0 && tow.theta <= 0.5) {
				tow.theta -= 0.025*tyreAngle;
			}
			if (tow.theta <= 0 && tow.theta >= -0.5) { 
				tow.theta -= 0.025*tyreAngle;
			}
			if (tow.theta > 0.5 && tyreAngle > 0) {
				tow.theta -= 0.025*tyreAngle;
			}
			if (tow.theta < -0.5 && tyreAngle < 0) {
				tow.theta -= 0.025*tyreAngle;
			}
		}
	}
	if (keyS == true && keyW == false) {
		if (Math.abs(tow.theta) <= 0.8) {
			angle -= 0.025*tyreAngle;
			canvasX -= Math.sin(angle);
			canvasY -= Math.cos(angle);
		}	
		if (tow.theta == 0) {
			tow.theta += 0.045*tyreAngle;
		}
		if (tow.theta > 0 && tow.theta <= 0.8) {
			if (tyreAngle >= 0 && Math.abs(tyreAngle) <= Math.PI / 180 * 5) {
				tow.theta += 0.01;
			}
			if (Math.abs(tyreAngle) > Math.PI / 180 * 5) {
				tow.theta += 0.045*tyreAngle;
			}
			if (tow.theta > 0.8) {
				crash();
			}
		}
		if (tow.theta < 0 && tow.theta >= -0.8) { 
			if (tyreAngle >= 0 && Math.abs(tyreAngle) <= Math.PI / 180 * 5) {
				tow.theta -= 0.01;
			}
			if (Math.abs(tyreAngle) > Math.PI / 180 * 5) {
				tow.theta += 0.045*tyreAngle;
			}
			if (tow.theta < -0.8) {
				crash();
			}
		}
	}
	if (keyA == true) {
		if (tyreAngle <= Math.PI / 180 * 30) {
			tyreAngle += Math.PI / 180 * 0.5;
		}
	}
	if (keyD == true) {
		if (tyreAngle >= -Math.PI / 180 * 30) {
			tyreAngle -= Math.PI / 180 * 0.5;
		}
	}
	if (keyZ == true) {
		if (tyreAngle <= Math.PI / 180 * 30) {
			tyreAngle += Math.PI / 180 * 1.5;
		}
	}
	if (keyX == true) {
		if (tyreAngle >= -Math.PI / 180 * 30) {
			tyreAngle -= Math.PI / 180 * 1.5;
		}
	}
	if (keyC == true) {
		if(tyreAngle <= 0) {
			tyreAngle += Math.PI / 180 * 3;
			if (tyreAngle >= -Math.PI / 180 * 1.5) {
				tyreAngle = 0;
			}
		}
		if (tyreAngle >= 0) {
			tyreAngle -= Math.PI / 180 * 3;
			if (tyreAngle <= Math.PI / 180 * 1.5) {
				tyreAngle = 0;
			}
		}
	}

	drawCarPark();
	if (challenge == "challengeOne") {
		drawChallengeOne();
	}
	if (challenge == "challengeTwo") {
		drawChallengeTwo();
	}
	
	if (Math.abs(tow.theta) >= 0.3) {
		ctx.beginPath();
		ctx.rect(x - canvas.width, y - canvas.height, 85, 30);
		ctx.fillStyle = "red";
		ctx.fill();
		ctx.font = "20px Arial";
		ctx.fillStyle = "white";
		ctx.fillText("Arcade", 10, 20);
		ctx.closePath();
	}
	
	car.drawTransport();
	carTyre1.drawTransportTyre();
	carTyre2.drawTransportTyre();
	carTyre3.drawTransportTyre();
	carTyre4.drawTransportTyre();
	tow.drawTow();
	trailer.drawTransport();
	trailerTyre1.drawTrailerTyre();
	trailerTyre2.drawTrailerTyre();

	lastTime = new Date();
	myReq = requestAnimFrame(update);
}

defaultCar();