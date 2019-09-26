/**
 * 
 */
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


let car = new Transport(50, 65, 4, 1500, 2000, 0, 0);
let carTyre1 = new Tyre (10, 15, 0, 0, 0, 0, 0, true, false);
let carTyre2 = new Tyre (10, 15, 0, 0, 0, 0, 0, true, false);
let carTyre3 = new Tyre (10, 15, 0, 0, 0, 0, 0, false, false);
let carTyre4 = new Tyre (10, 15, 0, 0, 0, 0, 0, false, false);
let tow = new Tow(0, 30, 20, 5, 0, 0, 0, 0, 0, 0, 0);
let trailer = new Trailer(50, 70, 2, 150, 1500, 0, 0, 0, 0.5);
let trailerTyre1 = new Tyre (10, 15, 0, 0, 0, 0, 0, false, true);
let trailerTyre2 = new Tyre (10, 15, 0, 0, 0, 0, 0, false, true);


function valueSetup() {
	
	cancelAnimFrame(myReq);
	tow.theta = 0;
	tow.omega = 0;
	tow.alpha = 0;
	tow.force = 0;
	carSwing = false;
	
	speed = document.getElementById("speed").value;
	trailer.loadMass = document.getElementById("load").value;
	trailer.loadDistribution = document.getElementById("centreOfMass").value;
	friction = document.getElementById("friction").value;
	forceApp = document.getElementById("force").value;
	
	startTime = new Date();
	
	setup();
}

function heavyFrontSetup() {
	
	cancelAnimFrame(myReq);
	tow.theta = 0;
	tow.omega = 0;
	tow.alpha = 0;
	tow.force = 0;	
	carSwing = false;
	
	speed = document.getElementById("speed1").value;
	trailer.loadMass = document.getElementById("load1").value;
	trailer.loadDistribution = document.getElementById("centreOfMass1").value;
	friction = document.getElementById("friction1").value;
	forceApp = document.getElementById("force1").value;
	
	document.getElementById("speed").value = speed;
	document.getElementById("load").value = trailer.loadMass;
	document.getElementById("centreOfMass").value = trailer.loadDistribution;
	document.getElementById("friction").value = friction;
	document.getElementById("force").value = forceApp;

	startTime = new Date();
	
	setup();
}

function heavyBackSetup() {
	
	cancelAnimFrame(myReq);
	tow.theta = 0;
	tow.omega = 0;
	tow.alpha = 0;
	tow.force = 0;	
	carSwing = false;
	
	speed = document.getElementById("speed2").value;
	trailer.loadMass = document.getElementById("load2").value;
	trailer.loadDistribution = document.getElementById("centreOfMass2").value;
	friction = document.getElementById("friction2").value;
	forceApp = document.getElementById("force2").value;
	
	document.getElementById("speed").value = speed;
	document.getElementById("load").value = trailer.loadMass;
	document.getElementById("centreOfMass").value = trailer.loadDistribution;
	document.getElementById("friction").value = friction;
	document.getElementById("force").value = forceApp;

	startTime = new Date();
	
	setup();
}

function lightFrontSetup() {
	
	cancelAnimFrame(myReq);
	tow.theta = 0;
	tow.omega = 0;
	tow.alpha = 0;
	tow.force = 0;	
	carSwing = false;
	
	speed = document.getElementById("speed3").value;
	trailer.loadMass = document.getElementById("load3").value;
	trailer.loadDistribution = document.getElementById("centreOfMass3").value;
	friction = document.getElementById("friction3").value;
	forceApp = document.getElementById("force3").value;
	
	document.getElementById("speed").value = speed;
	document.getElementById("load").value = trailer.loadMass;
	document.getElementById("centreOfMass").value = trailer.loadDistribution;
	document.getElementById("friction").value = friction;
	document.getElementById("force").value = forceApp;

	startTime = new Date();
	
	setup();
}

function lightBackSetup() {
	
	cancelAnimFrame(myReq);
	tow.theta = 0;
	tow.omega = 0;
	tow.alpha = 0;
	tow.force = 0;	
	carSwing = false;
	
	speed = document.getElementById("speed4").value;
	trailer.loadMass = document.getElementById("load4").value;
	trailer.loadDistribution = document.getElementById("centreOfMass4").value;
	friction = document.getElementById("friction4").value;
	forceApp = document.getElementById("force4").value;
	
	document.getElementById("speed").value = speed;
	document.getElementById("load").value = trailer.loadMass;
	document.getElementById("centreOfMass").value = trailer.loadDistribution;
	document.getElementById("friction").value = friction;
	document.getElementById("force").value = forceApp;

	startTime = new Date();
	
	setup();
}

function setup() {
	
	canvas = document.getElementById("pendulumAnim");
	ctx = canvas.getContext("2d");
	
	x = canvas.width/2;
	y = canvas.height;
	
	carInertia = (1/12*car.mass*(4*Math.pow(car.length/SCALE*0.9,2)));
	
	tow.inertia = (1/12*tow.mass*(4*Math.pow(tow.length/SCALE,2)+Math.pow(tow.width/SCALE,2)))
			+ (1/12*(trailer.mass + trailer.loadMass)*(4*Math.pow(trailer.length/SCALE*trailer.loadDistribution,2)+Math.pow(trailer.width/SCALE,2)));
	
	tow.theta = Math.asin(-forceApp / ((tow.mass + trailer.mass + trailer.loadMass)*(tow.length/SCALE + (trailer.length/SCALE)/trailer.loadDistribution)));
	
	tow.deltaT = (speed/0.44704)/1000;

	car.x = canvasX + canvas.width / 2;
	car.y = canvasY + canvas.height / 2;
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

	drawRoad();
	y += speed/10;
	if (y >= canvas.height) {
		y = canvas.height - 100;
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
	
	if (tow.theta <= Math.PI/180 * 90) {
		tow.pendulumMotion();
	
		var forceValue = Math.abs(tow.force);
		currTime = new Date();
		time = currTime - startTime;
		var seconds = time/1000;
		var swing = Math.abs(Math.sin(tow.theta)*SCALE);
		var swingSpeed = Math.abs(tow.omega)*(2*Math.PI*(tow.length+(trailer.length*trailer.loadDistribution))/SCALE);
	
		if (forceValue >= carInertia/0.03) {
			carSwing = true;
		}
	
		document.getElementById("timeElapsed").innerHTML = seconds.toFixed(3);
	
		if(frameNumber%5 == 0) {
			document.getElementById("pendulumForce").innerHTML = forceValue.toFixed(0);
			document.getElementById("swingLength").innerHTML = swing.toFixed(3);
			document.getElementById("swingSpeed").innerHTML = swingSpeed.toFixed(3);
		}
	
		document.getElementById("carInertia").innerHTML = carSwing;
	
		frameNumber++;
	
		myReq = requestAnimFrame(draw);
	}
	else {
		alert('Force is too large!');
	}

}