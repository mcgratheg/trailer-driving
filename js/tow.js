
class Tow {
	
	
	constructor(deltaT, mass, length, width, theta, omega, alpha, inertia, force, x, y) {
		this._deltaT = deltaT;
		this._mass = mass;
		this._length = length;
		this._width = width;
		this._theta = theta;
		this._omega = omega;
		this._alpha = alpha;
		this._inertia = inertia;
		this._force = force;
		this._x = x;
		this._y = y;
	}
	
	get deltaT() {
		return this._deltaT
	}
	
	set deltaT(value) {
		this._deltaT = value;
	}
	
	get mass() {
		return this._mass;
	}
	
	set mass(value) {
		this._mass = value;
	}
	
	get length() {
		return this._length;
	}
	
	set length(value) {
		this._length = value;
	}
	
	get width() {
		return this._width;
	}
	
	set width(value) {
		this._width = value;
	}
	
	get theta() {
		return this._theta;
	}
	
	set theta(value) {
		this._theta = value;
	}
	
	get omega() {
		return this._omega;
	}
	
	set omega(value) {
		this._omega = value;
	}
	
	get alpha() {
		return this._alpha;
	}
	
	set alpha(value) {
		this._alpha = value;
	}
	
	get inertia() {
		return this._inertia;
	}
	
	set inertia(value) {
		this._inertia = value;
	}
	
	get force() {
		return this._force;
	}
	
	set force(value) {
		this._force = value;
	}
	
	get x() {
		return this._x;
	}
	
	set x(value) {
		this._x = value;
	}
	
	get y() {
		return this._y;
	}
	
	set y(value) {
		this._y = value;
	}
	
	pendulumMotion() {
		this.theta += this.omega * this.deltaT + (0.5 * this.alpha * this.deltaT * this.deltaT);
		var T = -(this.mass + trailer.mass + trailer.loadMass) * Math.sin(this.theta) * (this.length/SCALE + ((trailer.length/SCALE)/trailer.loadDistribution));
		var F = friction*this.omega;
		this.force = T - F;
		var alpha = this.force / this.inertia;
		this.omega += 0.5 * (alpha + this.alpha) * this.deltaT;
		this.alpha = alpha;	
	}
	
	
	drawTow() {
		// variables of centre and corner points
		var cpx, cpy;
                var tow = [];
                var fillStyle = "#000066";
		
		//translate centre to world origin
		cpx = 0;
		cpy = 0;
		tow[0] = cpx - this.width/2;
		tow[1] = cpy;
		tow[2] = cpx - this.width/2;
		tow[3] = cpy + this.length;
		tow[4] = cpx + this.width/2;
		tow[5] = cpy + this.length;
		tow[6] = cpx + this.width/2;
		tow[7] = cpy;	
		
		// rotate each corner point about front of tow
                tow = multiplyMatrix(tow, this.theta);
		
		// translate to new xy points about centre of car
		cpx = 0;
		cpy = car.length/2;
                tow = translateCoords(tow, cpx, cpy);
		
		// rotate each corner point about centre of car
                tow = multiplyMatrix(tow, angle);
	
		// translate to new xy points
		cpx = this.x - canvasX;
		cpy = this.y - canvasY;
                tow = translateCoords(tow, cpx, cpy);
		
		// draw tow
                drawCoords(tow, fillStyle);
	}
	
}