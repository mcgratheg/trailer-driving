/**
 * 
 */
class Tyre {
	
	constructor(width, length, inflation, wear, tread, x, y, frontTyre, trailerTyre) {
		this._width = width;
		this._length = length;
		this._inflation = inflation;
		this._wear = wear;
		this._tread = tread;
		this._x = x;
		this._y = y;
		this._frontTyre = frontTyre;
		this._trailerTyre = trailerTyre;
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
	
	get inflation() {
		return this._inflation;
	}
	
	set inflation(value) {
		this._inflation = value;
	}
	
	get wear() {
		return this._wear;
	}
	
	set wear(value) {
		this._wear = value;
	}
	
	get tread() {
		return this._tread;
	}
	
	set tread(value) {
		this._tread = value;
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
	
	get frontTyre() {
		return this._frontTyre;
	}
	
	set frontTyre(value) {
		this._frontTyre = value;
	}
	
	get trailerTyre() {
		return this._trailerTyre;
	}
	
	set trailerTyre(value) {
		this._trailerTyre = value;
	}
	
	drawTransportTyre() {
		var cpx, cpy;
                var tyre = [];
                var fillStyle = "#000000";
		
		// translate centre to world origin
		cpx = 0;
		cpy = 0;
                tyre[0] = cpx - this.width/2;
                tyre[1] = cpy - this.length/2;
                tyre[2] = cpx - this.width/2;
                tyre[3] = cpy + this.length/2;
                tyre[4] = cpx + this.width/2;
                tyre[5] = cpy + this.length/2;
                tyre[6] = cpx + this.width/2;
                tyre[7] = cpy - this.length/2;
                
		// rotate each corner point about centre of tyre if front tyre
		if (this.frontTyre === true) {
                    tyre = multiplyMatrix(tyre, tyreAngle);
		}

		// translate to new xy points about centre of car
		cpx = this.x - car.x;
		cpy = this.y - car.y;
                tyre = translateCoords(tyre, cpx, cpy);
	
		// rotate each corner point about centre of car                
                tyre = multiplyMatrix(tyre, angle);

		// translate to new xy points
		cpx = car.x - canvasX;
		cpy = car.y - canvasY;
                tyre = translateCoords(tyre, cpx, cpy);
		
		// draw tyre                
                drawCoords(tyre, fillStyle);
	}
	
	drawTrailerTyre() {
		var cpx, cpy;
		var tyre = [];
                var fillStyle = "#000000";
                
		// translate centre to world origin
		cpx = this.x;
		cpy = this.y;
		tyre[0] = cpx - this.width/2;
		tyre[1] = cpy - this.length/2 + tow.length;
		tyre[2] = cpx - this.width/2;
		tyre[3] = cpy + this.length/2 + tow.length;
		tyre[4] = cpx + this.width/2;
		tyre[5] = cpy + this.length/2 + tow.length;
		tyre[6] = cpx + this.width/2;
		tyre[7] = cpy - this.length/2 + tow.length;

		// rotate each corner point about front of tow
                tyre = multiplyMatrix(tyre, tow.theta);
		
		// translate to new xy points about centre of car
		cpx = 0;
		cpy = car.length/2;
                tyre = translateCoords(tyre, cpx, cpy);
	
		// rotate each corner point about centre of car
                tyre = multiplyMatrix(tyre, angle);

		// translate to new xy points
		cpx = car.x - canvasX;
		cpy = car.y - canvasY;
                tyre = translateCoords(tyre, cpx, cpy);
		
		// draw tyre
                drawCoords(tyre, fillStyle);
	}
}