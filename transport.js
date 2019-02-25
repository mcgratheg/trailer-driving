/**
 * 
 */
class Transport {
	
	constructor(width, length, numberOfTyres, mass, maxCapacity, x, y) {
		this._width = width;
		this._length = length;
		this._numberOfTyres = numberOfTyres;
		this._mass = mass;
		this._maxCapacity = maxCapacity;
		this._x = x;
		this._y = y;
	}
	
	get width() {
		return this._width;
	}
	
	set width(value) {
		this._width = value;
	}
	
	get length() {
		return this._length;
	}
	
	set length(value) {
		this._length = value;
	}
	
	get numberOfTyres() {
		return this._numberOfTyres
	}
	
	set numberOfTyres(value) {
		this._numberOfTyres = value;
	}
	
	get mass() {
		return this._mass;
	}
	
	set mass(value) {
		this._mass = value;
	}
	
	get maxCapacity() {
		return this._maxCapacity;
	}
	
	set maxCapacity(value) {
		this._maxCapacity = value;
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
	
	
	drawTransport() {
		// corner points of transport
		var cpx, cpy;
                var transport = [];
                var fillStyle = "#ff0000";
		
		// translate centre to world origin
		cpx = 0;
		cpy = 0;
                transport[0] = cpx - this.width/2;
		transport[1] = cpy - this.length/2;
		transport[2] = cpx - this.width/2;
		transport[3] = cpy + this.length/2;
		transport[4] = cpx + this.width/2;
		transport[5] = cpy + this.length/2;
		transport[6] = cpx + this.width/2;
		transport[7] = cpy - this.length/2;
		
		// rotate each corner point about origin
                transport = multiplyMatrix(transport, angle);
		
		// translate to new xy points
		cpx = this.x - canvasX;
		cpy = this.y - canvasY;
                transport = translateCoords(transport, cpx, cpy);
		
		// draw transport
                drawCoords(transport, fillStyle);
	}
}