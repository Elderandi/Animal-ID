angular.module('animalid')
  .controller('camoControl', function($scope) {

 var timer;

  var paused = false;

$(document).ready(function() {

  $("#notification section").click(function() {
    clockTime.totalSeconds = clockTime.totalSeconds - 120;
  });

  $(".camo-win").click(function() {
    clockTime.totalSeconds = clockTime.totalSeconds + 121;
    $("#notification span").text("Well Done");
    paused = true;
  });

   $(".camoflay-back").click(function() {
    clearInterval(timer);
  });

   $(".camoflay-next").click(function() {
    clearInterval(timer);
  });

  $("#minute").text(clockTime.minutes);
  $("#second").text(clockTime.seconds);

  var countdown = function(timeLeft) {
    clockTime.reset();
    timer = setInterval(function() {

      $("#minute").text(clockTime.minutes);
      $("#second").text(clockTime.seconds);
      if(!paused){
      clockTime.totalSeconds-- || clearInterval(timer); }

      if(clockTime.totalSeconds <= 0) {
        $("#notification span").text("Nature Wins"); 
      }

      $scope.$on('$destroy', function() {
        clearInterval(timer);
      })

    }, 1000);
  }
  countdown();

});

var clockTime = {
  reset: $scope.$on('$destroy', function(){
    clearInterval(timer);
  }),

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