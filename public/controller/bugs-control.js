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
            app.ajax = 4;
            app.ui = {
                particle:false,
                particles:function(){
                    if($('body').hasClass('white')){
                        nb = 55;
                    }else {
                        nb = 30;
                    }
                    particlesJS('particles-js', {
                        particles: {
                            color: '#6EE7E0',
                            color_random: false,
                            shape: 'circle', // "circle", "edge" or "triangle"
                            opacity: {
                                opacity: 0.3,
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
                                distance: 350,
                                color: '#ffffff', // particles line color
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
                                distance: 500
                            },
                            detect_on: 'window', // "canvas" or "window"
                            mode: 'grab', // "grab" of false
                            line_linked: {
                                opacity: .5
                            },
                            events: {
                                onclick: {
                                    enable: true,
                                    mode: 'push', // "push" or "remove"
                                    nb: 2
                                },
                                onresize: {
                                    enable: true,
                                    mode: 'out', // "out" or "bounce"
                                    density_auto: false,
                                    density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                                }
                            }
                        },
                        /* Retina Display Support */
                        retina_detect: true
                    });
                },
            }

            $(function () {
                app.ui.particles();
                
                    if(localStorage.getItem("color") == "white") {
                        $('body').addClass('white');
                    }
                
            });

            var delay = (function(){
                var timer = 0;
                return function(callback, ms){
                    clearTimeout (timer);
                    timer = setTimeout(callback, ms);
                };
                

                 /* -------------------------------------------------------------------
            Author : Roshin Jose
            ------------------------------------------------------------------- */


            })();
           






});