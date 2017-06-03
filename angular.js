angular.module('animalid', ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

$stateProvider

.state("home",{
    url: "/",
    templateUrl: "./home.html",
    controller: "homeControl"
    })

.state("identify",{
    url: "/identify",
    templateUrl: "./views/identify/identify.html",
    controller: "identifyControl"
    })
    .state("identify.orders",{
    url: "/orders",
    templateUrl: "./views/identify/id-orders.html",
    controller: "identifyControl"
    })

.state("shop",{
    url: "/shop",
    templateUrl: "./views/shop/shop.html",
    controller: "shopControl"
    })

.state("camouflage",{
    url: "/camouflage",
    templateUrl: "./views/camouflage/camouflage.html",
    controller: "camoControl"
    })
    .state("camouflage.difficulties",{
    url: "/difficulties",
    templateUrl: "./views/camouflage/camo-difficulties.html",
    controller: "camoControl"
    })
    .state("camouflage.easy",{
    url: "/easy",
    templateUrl: "./views/camouflage/camo-easy.html",
    controller: "camoControl"
    })
    .state("camouflage.medium",{
    url: "/medium",
    templateUrl: "./views/camouflage/camo-medium.html",
    controller: "camoControl"
    })
    .state("camouflage.hard",{
    url: "/hard",
    templateUrl: "./views/camouflage/camo-hard.html",
    controller: "camoControl"
    })
    .state("camouflage.extreme",{
    url: "/extreme",
    templateUrl: "./views/camouflage/camo-extreme.html",
    controller: "camoControl"
    })
            .state("extremest",{
            url: "/extreme",
            templateUrl: "./views/camouflage/camo-extreme/extremest.html",
            controller: "camoControl"
            })
            // .state("extremest.hardone",{
            // url: "/xxxxone",
            // templateUrl: "./views/camouflage/camo-extreme/extremest-one.html",
            // controller: "camoControl"
            // })
            // .state("extremest.hardtwo",{
            // url: "/xxxxone",
            // templateUrl: "./views/camouflage/camo-extreme/extremest-one.html",
            // controller: "camoControl"
            // })
            // .state("extremest.hardthree",{
            // url: "/xxxxone",
            // templateUrl: "./views/camouflage/camo-extreme/extremest-one.html",
            // controller: "camoControl"
            // })
            // .state("extremest.hardfour",{
            // url: "/xxxxone",
            // templateUrl: "./views/camouflage/camo-extreme/extremest-one.html",
            // controller: "camoControl"
            // })
            // .state("extremest.hardfive",{
            // url: "/xxxxone",
            // templateUrl: "./views/camouflage/camo-extreme/extremest-one.html",
            // controller: "camoControl"
            // })
            .state("extremest.one",{
            url: "/xxxxone",
            templateUrl: "./views/camouflage/camo-extreme/extremest-one.html",
            controller: "camoControl"
            })
            .state("extremest.two",{
            url: "/xxxxtwo",
            templateUrl: "./views/camouflage/camo-extreme/extremest-two.html",
            controller: "camoControl"
            })

.state("guiness",{
    url: "/guiness",
    templateUrl: "./views/guiness/guiness.html",
    controller: "guinessControl"
    })

.state("pages",{
    url: "/pages",
    templateUrl: "./views/pages/pages.html",
    controller: "pagesControl"
    })

.state("frogexplore",{
    url: "/amphibians",
    templateUrl: "./views/explore-frog.html",
    controller: "frogControl"
    })

.state("bugexplore",{
    url: "/arthropods",
    templateUrl: "./views/explore-bugs.html",
    controller: "bugsControl"
    })

.state("birdexplore",{
    url: "/birds",
    templateUrl: "./views/explore-bird.html",
    controller: "birdControl"
    })

.state("fishexplore",{
    url: "/fish",
    templateUrl: "./views/explore-fish.html",
    controller: "fishControl"
    })

.state("mammalexplore",{
    url: "/mammal",
    templateUrl: "./views/explore-mammal.html",
    controller: "mammalControl"
    })

.state("reptileexplore",{
    url: "/reptile",
    templateUrl: "./views/explore-reptile.html",
    controller: "reptileControl"
    })

$urlRouterProvider.otherwise("/")

});