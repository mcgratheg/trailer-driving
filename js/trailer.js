/**
 * 
 */
class Trailer extends Transport {
	
	constructor(width, length, numberOfTyres, mass, maxCapacity, x, y, loadMass, loadDistribution) {
		super(width, length, numberOfTyres, mass, maxCapacity, x, y);
		this._loadMass = loadMass;
		this._loadDistribution = loadDistribution;
	}
	
	get loadMass() {
		return this._loadMass;
	}
	
	set loadMass(value) {
		this._loadMass = value;
	}
	
	get loadDistribution() {
		return this._loadDistribution;
	}
	
	set loadDistribution(value) {
		this._loadDistribution = value;
	}	
	
	drawTransport() {
		// variables of centre and corner points
		var cpx, cpy;
                var trailer = [];
                var fillStyle = "#0000e6";
		
		//translate centre to world origin
		cpx = 0;
		cpy = 0;
		trailer[0] = cpx - this.width/2;
		trailer[1] = cpy + tow.length;
		trailer[2] = cpx - this.width/2;
		trailer[3] = cpy + tow.length + this.length;
		trailer[4] = cpx + this.width/2;
		trailer[5] = cpy + tow.length + this.length;
		trailer[6] = cpx + this.width/2;
		trailer[7] = cpy + tow.length;

		
		// rotate each corner point about front of tow
                trailer = multiplyMatrix(trailer, tow.theta);
		
		// translate to new xy points about centre of car
		cpx = 0;
		cpy = car.length/2;
                trailer = translateCoords(trailer, cpx, cpy);
		
		// rotate each corner point about centre of car
                trailer = multiplyMatrix(trailer, angle);
		
		// translate to new xy points
		cpx = tow.x - canvasX;
		cpy = tow.y - canvasY;
                trailer = translateCoords(trailer, cpx, cpy);
		
		// draw transport
                drawCoords(trailer, fillStyle);
	}
}