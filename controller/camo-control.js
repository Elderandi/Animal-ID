angular.module('animalid')
  .controller('camoControl', function($scope) {

  var timer; // define variable outside function



$(document).ready(function() {

  var countdown = function(timeLeft) {

    timer = setInterval(function() {  // remove var here

      $('#timer').text(timeLeft);
      timeLeft-- || clearInterval(timer);

      $scope.$on('$destroy', function() { // when you leave this view, clearInterval fireS
        clearInterval(timer);
      })

    }, 1000);

  }
  countdown(600);
// timer = window.setInterval(function() {
//     clockTime.totalSeconds--;
//     $("#minute").text(clockTime.minutes);
//     $("#second").text(clockTime.seconds);
//     if(clockTime.totalSeconds <= 0) {
//       $("#notification span").text("Nature Wins");
//         window.clearInterval(timer);
//     } 
    
//   }, 1000);
// var timer = window.setInterval(function() {
//     clockTime.totalSeconds--;
//     $("#minute").text(clockTime.minutes);
//     $("#second").text(clockTime.seconds);
//     if(clockTime.totalSeconds <= 0) {
//       $("#notification span").text("Nature Wins");
//         window.clearInterval(timer);
//     }
    
//   }, 1000);



window.focus(clearInterval(timer))

// console.log(window.focus())

  $("#notification section").click(function() {
    clockTime.totalSeconds = clockTime.totalSeconds - 120;
  });

  $("#minute").text(clockTime.minutes);
  $("#second").text(clockTime.seconds);

//  window.focus(timer);
 timer = window.setInterval(function() {
    clockTime.totalSeconds--;
    $("#minute").text(clockTime.minutes);
    $("#second").text(clockTime.seconds);
    if(clockTime.totalSeconds <= 0) {
      $("#notification span").text("Nature Wins");
        window.clearInterval(timer);
    } 
  }, 1000);
//   $("#notification section").click(function() {
//     clockTime.totalSeconds = clockTime.totalSeconds - 120;
  // });

  
// function myFn() {console.log('idle');}

// var myTimer = setInterval(myFn, 4000);

// // Then, later at some future time, 
// // to restart a new 4 second interval starting at this exact moment in time
// clearInterval(myTimer);
// myTimer = setInterval(myFn, 4000);

});

var clockTime = {
  totalSeconds: 600, //in seconds
  get hours() {
    result = clockTime.totalSeconds % 3600;
    result = (clockTime.totalSeconds - result) / 60 / 60;
    result = Math.floor(result);
    if (result < 10) {
      result = result.toString();
      result = "0" + result;
    } else {
      result = result.toString();
    };
    return result;
  },
  get minutes() {
    result = clockTime.totalSeconds - clockTime.hours * 3600;
    result = result / 60;
    result = Math.floor(result);
    if (result < 10) {
      result = result.toString();
      result = "0" + result;
    } else {
      result = result.toString();
    };
    return result;
  },
  get seconds() {
    result = clockTime.totalSeconds - clockTime.hours * 3600 - clockTime.minutes * 60;
    if (result < 10) {
      result = result.toString();
      result = "0" + result;
    } else {
      result = result.toString();
    };
    return result;
  }
};

});