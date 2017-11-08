angular.module('animalid')
  .controller('bugsControl', function($scope, mainService) {

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

// SPIDER-WEB CONTROL
            
            var app = {};
            nb = 35; // NUMBER OF PARTICLES TO START WITH
            app.ui = {
     
                particles:function(){
                    
                    particlesJS('particles-js', {
                        particles: {
                            color: '#6EE7E0',
                            color_random: false,
                            shape: 'circle', // CIRCLE | EDGE (SQUARE) | TRIANGLE - SHAPE OF INDIVIDUAL PARTICLES
                            opacity: {
                                opacity: 0.3, // OPACITY OF INDIVIDUAL PARTICLES
                                anim: {
                                    enable: true,
                                    speed: 1.5,
                                    opacity_min: 0,
                                    sync: false
                                }
                            },
                            size: 2,
                            size_random: true,
                            nb: nb,
                            line_linked: {
                                enable_auto: true,
                                distance: 500,
                                color: '#ffffff',
                                opacity: 0.6,
                                width: 1,
                                condensed_mode: {
                                    enable: true,
                                    rotateX: 600,
                                    rotateY: 600
                                }
                            },
                            anim: {
                                enable: true,
                                speed: .3
                            }
                        },
                        interactivity: {
                            enable: true,
                            mouse: {
                                distance: 400 // MIN DISTANCE REQUIRED TO LINK LINES BETWEEN MOUSE AND SUROUNDING PARTICLES
                            },
                            detect_on: 'window', // CANVAS | WINDOW
                            mode: 'grab',
                            line_linked: {
                                opacity: .5
                            },
                            events: {
                                onclick: {
                                    enable: true,
                                    mode: 'push', // PUSH | REMOVE (ADD OR REMOVE INDIVIDUAL PARTICLES)
                                    nb: 2 // AMOUNT OF PARTICLES ADDED WITH MOUSE CLICK
                                },
                                onresize: {
                                    enable: true,
                                    mode: 'out', // OUT | BOUNCE
                                    density_auto: false,
                                    density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                                }
                            }
                        },
                        retina_detect: true // RETINA DISPLAY SUPPORT
                    });
                },
            }

            $(function () {
                app.ui.particles();
                
            });

            var delay = (function(){
                var timer = 0;
                return function(callback, ms){
                    clearTimeout (timer);
                    timer = setTimeout(callback, ms);
                };
                

                 /* -------------------------------------------------------------------
                CREDIT: Noel Delgado, Nils Riedemann & Roshin Jose
                ------------------------------------------------------------------- */


            })();
           






});