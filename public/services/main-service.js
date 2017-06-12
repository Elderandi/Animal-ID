angular.module('animalid')
  .service('mainService', function($http){

this.getSubclass = function(subclass) {
  return $http({
    method: 'GET',
    url: 'api/subclass/' + subclass
  })
  .then(function(response){
    return response.data;
  })
};

this.getAllAnimals = function(animals) {
  return $http({
    method: 'GET',
    url: 'api/animals/' + animals
  })
  .then(function(response){
    return response.data;
  })
};

this.getAnimalData = function(id) {
  return $http({
    method: 'GET',
    url: 'api/animal/' + id
  })
  .then(function(response){
    return response.data;
  })
};



  });