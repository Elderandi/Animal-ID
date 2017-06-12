angular.module('animalid')
  .controller('invertebrateControl', function($scope) {

var ladyBug = $('.lady-bug')

  var w = window.innerWidth
  var h = window.innerHeight

  ladyBug.mouseenter(function(event) {
    var randX = ~~(Math.random()*w) -w/2;
    var randY = ~~(Math.random()*h) -h/2;
  
  var deg = ~~(Math.atan2(randX,-randY)*(180/Math.PI))

    console.log(deg)
    TweenMax.to(event.target, 0.1, {transform: `rotate(${deg}deg)`})
    TweenMax.to(event.target, 7, {x: randX, y: randY})
    })

var ladyBug = $('.lady-mug')

  var w = window.innerWidth
  var h = window.innerHeight

  ladyBug.mouseenter(function(event) {
    var randX = ~~(Math.random()*w) -w/2;
    var randY = ~~(Math.random()*h) -h/2;
  
  var deg = ~~(Math.atan2(randX,-randY)*(180/Math.PI))

    console.log(deg)
    TweenMax.to(event.target, 0.1, {transform: `rotate(${deg}deg)`})
    TweenMax.to(event.target, 10, {x: randX, y: randY})
    })

var yellowBug = $('.yellow-bug')

  var w = window.innerWidth
  var h = window.innerHeight

  yellowBug.mouseenter(function(event) {
  // var lastX = yellowBug.position().left
  // var lastY = yellowBug.position().top
    var randX = ~~(Math.random()*w) -w/2;
    var randY = ~~(Math.random()*h) -h/2;
  // var moveX = lastX - randX
  // var moveY = lastY - randY

  var deg = ~~(Math.atan2(randX,-randY)*(180/Math.PI))

    console.log(deg)
    TweenMax.to(event.target, 0.2, {transform: `rotate(${deg}deg)`})
    TweenMax.to(event.target, 10, {x: randX, y: randY})
    })
  
var ladyBug = $('.lady-shade')

  var w = 400;
  var h = 300;

  ladyBug.mouseenter(function(event) {
    var randX = ~~(Math.random()*w) -w/2;
    var randY = ~~(Math.random()*h) -h/2;
  
  var deg = ~~(Math.atan2(randX,-randY)*(180/Math.PI))

    console.log(deg)
    TweenMax.to(event.target, 0.1, {transform: `rotate(${deg}deg)`})
    TweenMax.to(event.target, 4, {x: randX, y: randY})

  })
  
var ladyBug = $('.lady-shades')

  var w = 400;
  var h = 400;

  ladyBug.mouseenter(function(event) {
    var randX = ~~(Math.random()*w) -w/2;
    var randY = ~~(Math.random()*h) -h/2;
  
  var deg = ~~(Math.atan2(randX,-randY)*(180/Math.PI))

    console.log(deg)
    TweenMax.to(event.target, 0.1, {transform: `rotate(${deg}deg)`})
    TweenMax.to(event.target, 5, {x: randX, y: randY})
  })



});