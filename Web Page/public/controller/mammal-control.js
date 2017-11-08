angular.module('animalid')
  .controller('mammalControl', function($scope, mainService) {





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





});