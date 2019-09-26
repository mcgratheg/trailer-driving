/**
 * 
 */

function drawRoad() {
	ctx.beginPath();
	ctx.rect(0, 0, 60, canvas.height);
	ctx.fillStyle = "#33cc33";
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.rect(canvas.width-60, 0, 60, canvas.height);
	ctx.fillStyle = "#33cc33";
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.rect(60, 0, canvas.width-120, canvas.height);
	ctx.fillStyle = "#999999";
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.rect(x, y, 10, 75);
	ctx.rect(x, y - 100, 10, 75);
	ctx.rect(x, y - 200, 10, 75);
	ctx.rect(x, y - 300, 10, 75);
	ctx.rect(x, y - 400, 10, 75);
	ctx.rect(x, y - 500, 10, 75);
	ctx.rect(x, y - 600, 10, 75);
	ctx.rect(x, y - 700, 10, 75);
	ctx.rect(x, y - 800, 10, 75);
	ctx.fillStyle = "#ffffff";
	ctx.fill();
	ctx.closePath();
	
}

function drawCarPark() {
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#999999";
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.rect(0, y-50, 200, 10);
	ctx.rect(0, y-175, 200, 10);
	ctx.rect(0, y-300, 200, 10);
	ctx.rect(0, y-425, 200, 10);
	ctx.rect(0, y-550, 200, 10);
	ctx.rect(0, y-675, 200, 10);
	ctx.rect(x-200, y-50, 200, 10);
	ctx.rect(x-200, y-175, 200, 10);
	ctx.rect(x-200, y-300, 200, 10);
	ctx.rect(x-200, y-425, 200, 10);
	ctx.rect(x-200, y-550, 200, 10);
	ctx.rect(x-200, y-675, 200, 10);
	ctx.fillStyle = "#f2f2f2";
	ctx.fill();
	ctx.closePath();
}

function drawChallengeOne() {
	ctx.beginPath();
	ctx.arc(canvas.width/2, 300, 30, 0, 2*Math.PI);
	ctx.arc(canvas.width/2, 500, 30, 0, 2*Math.PI);
	ctx.fillStyle = "#ff0080";
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.rect(0, y-165, 200, 115);
	ctx.fillStyle = "#33cc33";
	ctx.fill();
	ctx.closePath();
}

function drawChallengeTwo() {
	ctx.beginPath();
	ctx.arc(x-400, y-200, 30, 0, 2*Math.PI);
	ctx.moveTo(x-625, y-350);
	ctx.arc(x-625, y-350, 30, 0, 2*Math.PI);
	ctx.moveTo(x-500, y-550);
	ctx.arc(x-500, y-550, 30, 0, 2*Math.PI);	
	ctx.fillStyle = "#ff0080";
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.rect(x-200, y-415, 200, 115);
	ctx.fillStyle = "#33cc33";
	ctx.fill();
	ctx.closePath();
}