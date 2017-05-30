angular.module('animalid', ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

$stateProvider
.state("home",{
    url: "/",
    templateUrl: "./home.html",
    controller: "homeControl"
})

.state("frogexplore",{
    url: "/amphibians",
    templateUrl: "./views/frog-explore.html",
    controller: "frogControl"
})

.state("bugexplore",{
    url: "/arthropods",
    templateUrl: "./views/bugs-explore.html",
    controller: "bugsControl"
})



$urlRouterProvider.otherwise("/")

});