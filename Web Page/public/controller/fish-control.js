angular.module('animalid')
  .controller('fishControl', function($scope, mainService) {

$scope.showClasses = false
$scope.showAnimalList = false
$scope.showAnimal = false

$scope.classes = function(subclass){
mainService.getSubclass(subclass)
.then(function(response, err){
console.log(response);
if(err){
    console.log('API FAIL')
} else {
    $scope.subclasses = response;
    $scope.showClasses = true
    $scope.showAnimalList = false
    $scope.showAnimal = false
}
    })
};

$scope.animals = function(animals){
mainService.getAllAnimals(animals)
.then(function(response, err){
console.log(response);
if(err){
    console.log('API FAIL')
} else {
    $scope.animalList = response;
    console.log($scope.animallist)
    $scope.showClasses = false
    $scope.showAnimalList = true
    $scope.showAnimal = false
}
    })
};

$scope.animalData = function(data){
mainService.getAnimalData(data)
.then(function(response, err){
console.log(response);
if(err){
    console.log('API FAIL')
} else {
    $scope.animalData = response;
    console.log($scope.animalData)
    $scope.showClasses = false
    $scope.showAnimalList = false
    $scope.showAnimal = true
}
    })
};


/* ALL THE LITTLE FISH */
			var FOLLOW_DISTANCE = 500;

			var Fish = function(id) {
				this.id = id;
				this.entourage = [];
				// dx/yx is current speed, ox/oy is the previous one
				this.ox = this.dx = Math.random() - 0.5;
				this.oy = this.dy = Math.random() - 0.5;

				this.x = canvas.width * Math.random();
				this.y = canvas.height * Math.random();

				// A couple of helper functions, the names should describe their purpose
				Fish.prototype.angleToClosestFish = function(otherFish) {
					otherFish = otherFish == null ? this.following : otherFish;
					if (otherFish) {
						return Math.atan2(otherFish.y - this.y, otherFish.x - this.x);
					} else {
						return Number.MAX_VALUE;
					}
				}

				Fish.prototype.angleFromFishDirectionToClosestFish = function(otherFish) {
					otherFish = otherFish == null ? this.following : otherFish;
					if (otherFish) {
						return Math.abs(deltaAngle(this.angle, this.angleToClosestFish(otherFish)));
					} else {
						return Number.MAX_VALUE;
					}
				}

				Fish.prototype.angleDirectionDifference = function(otherFish) {
					otherFish = otherFish == null ? this.following : otherFish;

					if (otherFish) {
						Math.abs(deltaAngle(this.angle, otherFish.angle));
					} else {
						return Number.MAX_VALUE;
					}
				}



				// Update the fish "physics"
				Fish.prototype.calc = function() {
					this.ox = this.dx;
					this.oy = this.dy;
					var MAX_SPEED = 1.1;
					var maxSpeed = MAX_SPEED;

					//Do I need to find another fish buddy?
					if (this.following == null || py(this.x - this.following.x, this.y - this.following.y) > FOLLOW_DISTANCE) {
						if (this.following != null) {
							if (keyDown) affinityLine(this.following, this, "white");
							this.following.entourage.splice(this.following.entourage.indexOf(this));
						}

						this.following = null;

						//attract closer to other fish - find closest
						var closestDistance = Number.MAX_VALUE;
						var closestFish = null;

						for (var i = 0; i < fishes.length; i++) {
							var fish = fishes[i];
							if (fish != this) {
								var distance = py(this.x - fish.x, this.y - fish.y);
								// Is it closer, within the max distance and within the sector that the fish can see?
								if (distance < closestDistance && fish.following != this && distance < FOLLOW_DISTANCE && this.angleFromFishDirectionToClosestFish(fish) < Math.PI * 0.25) {
									closestDistance = distance;
									closestFish = fish;
								}
							}
						}
						if (closestFish != null) {
							this.following = closestFish;
							closestFish.entourage.push(this);
						}
					}

					// Fish is following another
					if (this.following != null) {
						// Go closer to other fish
						this.followingDistance = py(this.x - this.following.x, this.y - this.following.y);
						this.distanceFactor = 1 - this.followingDistance / FOLLOW_DISTANCE;

						// If going head on, just break a little before following
						if (this.angleDirectionDifference() > (Math.PI * 0.9) && // On colliding angle?
							this.angleFromFishDirectionToClosestFish() < (Math.PI * 0.2)) { // In colliding sector?
							this.dx += this.following.x * 0.1;
							this.dy += this.following.y * 0.1;
							if (keyDown) affinityLine(this.following, this, "yellow");
						} else if (this.followingDistance > FOLLOW_DISTANCE * 0.3) { // Dont go closer if close
							this.dx += Math.cos(this.angleToClosestFish()) * (0.05 * this.distanceFactor);
							this.dy += Math.sin(this.angleToClosestFish()) * (0.05 * this.distanceFactor);
						}
						if (keyDown) affinityLine(this.following, this, "red");
					}

					// Go closer to center, crashing into the canvas walls is just silly!
					if (this.x < canvas.width * .1 || this.x > canvas.width * .9 || this.y < canvas.height * .2 || this.y > canvas.height * .8) {
						this.dx += (canvas.width / 2 - this.x) / 5000;
						this.dy += (canvas.height / 2 - this.y) / 5000;
					}

					// Poor little fishies are scared of your cursor
					if (py(this.x - cursor.x, this.y - cursor.y) < FOLLOW_DISTANCE * 0.5) {
						this.dx -= (cursor.x - this.x) / 400;
						this.dy -= (cursor.y - this.y) / 400;
						maxSpeed = 4;
						if (keyDown) affinityLine(cursor, this, "green");
					}

					// If following fish, try avoid going close to your siblings
					if (this.following != null) {
						for (var i = 0; i < this.following.entourage.length; i++) {
							var siblingFish = this.following.entourage[i];
							if (siblingFish !== this) {
								if (py(this.x - siblingFish.x, this.y - siblingFish.y) < FOLLOW_DISTANCE * 0.2) {
									if (keyDown) affinityLine(siblingFish, this, "yellow");
									this.dx -= (siblingFish.x - this.x) / 1000;
									this.dy -= (siblingFish.y - this.y) / 1000;
								}
							}
						}
					}

					// Calculate heading from new speed
					this.angle = Math.atan2(this.dy, this.dx);

					// Grab the speed from the vectors, and normalize it
					var speed = Math.max(0.1, Math.min(maxSpeed, py(this.dx, this.dy)));

					// Recreate speed vector from recombining angle of direction with normalized speed
					this.dx = Math.cos(this.angle) * (speed + speedBoost);
					this.dy = Math.sin(this.angle) * (speed + speedBoost);

					// Fish like to move it, move it!
					this.x += this.dx;
					this.y += this.dy;
				}
			}

			/* ---------------------- FISH "CLASS" END -------------- */

			/* ---------------------- MAIN START -------------------- */
			var canvas = document.getElementById('fishtank');
			var context = canvas.getContext('2d');

			var fishes = [];


			var speedBoostCountdown = 200,
				speedBoost = 0,
				SPEED_BOOST = 2;
			var fishBitmap = new Image()
			fishBitmap.onload = function() {
				update();
			};
			fishBitmap.src = "https://dl.dropboxusercontent.com/u/4534978/2014/fishes/fish.png";

			//Draw Circle
			function draw(f) {
				var r = f.angle + Math.PI;

				context.translate(f.x, f.y);
				context.rotate(r);

				var w = 15;
				var acc = py(f.dx - f.ox, f.dy - f.oy) / 0.05;

				// If a fish does a "flip", make it less wide
				if (acc > 1) {
					w = 10 + 10 / acc;
				}

				context.drawImage(fishBitmap, 0, 0, w, 4);
				context.rotate(-r);
				context.translate(-f.x, -f.y);
			}

			// Pythagoras shortcut
			function py(a, b) {
				return Math.sqrt(a * a + b * b);
			}

			//------------ USER INPUT START -------------
			var cursor = {
				x: 0,
				y: 0
			};
			var cursorDown = false,
				keyDown = false;

			document.onmousemove = function(e) {
				cursor.x = e.pageX - (window.innerWidth / 2 - canvas.width / 2);
				cursor.y = e.pageY - (window.innerHeight / 2 - canvas.height / 2);
			}

			document.onmouseout = function(e) { //Out of screen is not a valid pos
				cursor.y = cursor.x = Number.MAX_VALUE;
			}

				//------------ USER INPUT STOP -------------

			function deltaAngle(f, o) { //Find the shortest angle between two
				var r = f - o;
				return Math.atan2(Math.sin(r), Math.cos(r));
			}

			function activateSpeedBoost() {
				speedBoostCountdown = 400 + Math.round(400 * Math.random());
				speedBoost = SPEED_BOOST;
			}

			//Update and draw all of them
			function update() {
				// ----------------------------------- NUMBER OF FISH
					if (fishes.length < 100) {
						fishes.push(new Fish(fishes.length));
					}

					if (!cursorDown) {
						//clear the canvas
						canvas.width = canvas.width; //Try commenting this line :-)

						//Update and draw fish
						for (var i = 0; i < fishes.length; i++) {
							var fish = fishes[i];
							fish.calc();
							draw(fish);
						}
					}

					speedBoostCountdown--;
					if (speedBoostCountdown < 0) {
						activateSpeedBoost();
					}

					if (speedBoost > 0) {
						speedBoost -= SPEED_BOOST / 80; //Reduce speed bost fast!
					} else {
						speedBoost = 0;
					}

					requestAnimationFrame(update);
				}
				/* ---------------------- MAIN END ----------------------- */
});

		