/*
# todos:
- flush old positions from bee state
- flocking of bees when nothing else matters
- Pop flowers with mouse
- rounder butt and head for bees
- Increese/Decrease health with flower power
- Split bee when health is high enough

# More optimizations to do :
- Reuse vars
- Remove one color from the fish
*/

(function () {
	var mode;
	var bee
	var bees = [];

	// Green RGBA is to obtain a trail after bees
	var colors = ["aquamarine", "black", "black", "black"];

	// Aliases
	var M = Math;
	var pow = M.pow;
	var random = M.random;
	// Configuration
	var turnRateChangeOccurence = 0.5;
	var tempMaxTurnRate;
	var maxTurnRate = 0.10;
	var maxTurnRateChange = 0.9;
	var stageSize = f.width = f.height = window.innerWidth;
	var beeWidth = 7;
	var speed = 3; // Distance run on each step
	var beeLength = 7;
	var beeTarget;
	var beeCount = 7;
	var i = beeCount; // First iteration will be on BeeCount
	var isTargetRepulsing = 0;
	var repulseCycles = 1200;
	var repulseStrengh = 2;

	// bee  = [positions, direction, speed, turn rate, health]
	// position is an array of [posX, posY]
	// Speed is units per cycle
	// Turn rate is how much the direction shifts at every cycle
	/*
	Bee
		.c = coordinates
		.d = direction
		.t = turn rate
		.h = health
	*/


	onmousemove = onclick = polyFunc;
	function polyFunc(mode, a, b, c, value) {

		// mode = event
		if (mode.x) {
 		   	beeTarget = polyFunc(4, mode.x, mode.y);
			// onclick event
	    	if (mode.which) {
	    		isTargetRepulsing = repulseCycles;
	    	}
		}

		// function distanceToTarget (x1, y1) {
		if (mode == 1) {
			value = M.sqrt( pow(beeTarget.x - a, 2) + pow(beeTarget.y - b, 2) );
		}
		//function forwardPos(angle, length, pos) {
		if (mode == 2) {
			// polyFunc = Coord
			value = polyFunc(4,
				c.x + M.cos(a) * b,
				c.y + M.sin(a) * b
			);
		}
		//function Bee() {
		if (mode == 3) {
			value = {
					// polyFunc = Coord
					c:[polyFunc(4, stageSize * random(), stageSize * random())],
					d:0.5,
					t:0,
					h:0.5 + random()
				}
		}
		//function Coord (x, y);
		if (mode == 4) {
			value = {x:a, y:b} 
		}
		return value;
	};



	// Spawn X ammount of bees
	// polyFunc = Bee
	for (;i--;) bees[i] = polyFunc(3);


	(function loop() {
		// Shorthands for Bee attributes
		var health;
		var turnRate;
		var direction;
		var positions;

		var posIndex;
		var positions;

		// Fill the canvas with green
		a.fillStyle = colors[3];
		a.fillRect(0, 0, stageSize, stageSize);

		for (i = beeCount; i--;) {
			bee = bees[i];

			turnRate = bee.t;
			direction = bee.d;
			health = bee.h;
			positions = bee.c;

			for (posIndex = 0; posIndex < (beeLength * health) && posIndex < positions.length-1; posIndex++) {
				a.beginPath();
				a.lineWidth = beeWidth * health * (1-(posIndex/beeLength)); // According to health
				a.lineCap = (posIndex == 0) ? "round" : "butt";
				a.quadraticCurveTo(
					positions[posIndex].x,
					positions[posIndex].y,
					positions[posIndex+1].x,
					positions[posIndex+1].y);
				a.strokeStyle = colors[posIndex%3];
				a.stroke();

			}


			/* MOVE ROUTINE */
			var pos2;
			var distA;
			var distB;
			var change
			// Speed is according to health
			// polyFunc = forwardPos
			var pos = polyFunc(2, direction, (isTargetRepulsing ? speed * repulseStrengh : speed) * health, positions[0] );
			positions.unshift(pos);
			direction += turnRate;

			// One in a while, the turn rate changes
			// Force turn change if a target is in sight
			if (random() < turnRateChangeOccurence || isTargetRepulsing || !beeTarget%80) {

				change = (random() - 0.5) * 2 * maxTurnRateChange * (isTargetRepulsing ? repulseStrengh : 1);
				turnRate += change;

				// Test future position with both angles
				if (beeTarget) {
					// polyFunc = forwardPos
					pos2 = polyFunc(2, direction + change, speed * health, pos );
					// polyFunc = distanceToTarget
					distA = polyFunc(1, pos2.x, pos2.y);
					// polyFunc = forwardPos
					pos2 = polyFunc(2, direction - change, speed * health, pos );
					// polyFunc = distanceToTarget
					distB = polyFunc(1, pos2.x, pos2.y);
				}


				// If the directon change takes the bee's angle of attack away from the tarket
				// inverse the adjustment
				if (distA > distB && beeTarget) {
					turnRate += (isTargetRepulsing ? change : -change) * 2;
				}

				tempMaxTurnRate = maxTurnRate * (isTargetRepulsing ? repulseStrengh : 1);
				// Enforce maxTurnRate
				if (turnRate > tempMaxTurnRate) turnRate = tempMaxTurnRate;
				if (turnRate < - tempMaxTurnRate) turnRate = -tempMaxTurnRate;
				// Decrement repulse if not already at 0
				isTargetRepulsing && isTargetRepulsing--;

				// Reeasing shortcut vars to bee object
				bee.t = turnRate;
				bee.d = direction;


			}


		}

		requestAnimationFrame(loop);
	})();






})();

