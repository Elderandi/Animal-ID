angular.module('animalid', ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

$stateProvider

.state("home",{
    url: "/",
    templateUrl: "./home.html",
    controller: "homeControl"
    })
.state("invertebrates",{
    url: "/invertebrates",
    templateUrl: "./views/invertebrates.html",
    controller: "invertebrateControl"
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
                .state("extremest.easyone",{
                url: "/easy-one",
                templateUrl: "./views/camouflage/camo-easy/easiest-one.html",
                controller: "camoControl"
                })
                .state("extremest.easytwo",{
                url: "/easy-two",
                templateUrl: "./views/camouflage/camo-easy/easiest-two.html",
                controller: "camoControl"
                })
                .state("extremest.easythree",{
                url: "/easy-three",
                templateUrl: "./views/camouflage/camo-easy/easiest-three.html",
                controller: "camoControl"
                })
                .state("extremest.easyfour",{
                url: "/easy-four",
                templateUrl: "./views/camouflage/camo-easy/easiest-four.html",
                controller: "camoControl"
                })
                .state("extremest.easyfive",{
                url: "/easy-five",
                templateUrl: "./views/camouflage/camo-easy/easiest-five.html",
                controller: "camoControl"
                })
                .state("extremest.easysix",{
                url: "/easy-six",
                templateUrl: "./views/camouflage/camo-easy/easiest-six.html",
                controller: "camoControl"
                })
                .state("extremest.easyseven",{
                url: "/easy-seven",
                templateUrl: "./views/camouflage/camo-easy/easiest-seven.html",
                controller: "camoControl"
                })
                .state("extremest.easyeight",{
                url: "/easy-eight",
                templateUrl: "./views/camouflage/camo-easy/easiest-eight.html",
                controller: "camoControl"
                })
                .state("extremest.easynine",{
                url: "/easy-nine",
                templateUrl: "./views/camouflage/camo-easy/easiest-nine.html",
                controller: "camoControl"
                })
                .state("extremest.easyten",{
                url: "/easy-ten",
                templateUrl: "./views/camouflage/camo-easy/easiest-ten.html",
                controller: "camoControl"
                })
                    .state("extremest.medone",{
                    url: "/medium-one",
                    templateUrl: "./views/camouflage/camo-medium/medest-one.html",
                    controller: "camoControl"
                    })
                    .state("extremest.medtwo",{
                    url: "/medium-two",
                    templateUrl: "./views/camouflage/camo-medium/medest-two.html",
                    controller: "camoControl"
                    })
                    .state("extremest.medthree",{
                    url: "/medium-three",
                    templateUrl: "./views/camouflage/camo-medium/medest-three.html",
                    controller: "camoControl"
                    })
                    .state("extremest.medfour",{
                    url: "/medium-four",
                    templateUrl: "./views/camouflage/camo-medium/medest-four.html",
                    controller: "camoControl"
                    })
                    .state("extremest.medfive",{
                    url: "/medium-five",
                    templateUrl: "./views/camouflage/camo-medium/medest-five.html",
                    controller: "camoControl"
                    })
                    .state("extremest.medsix",{
                    url: "/medium-six",
                    templateUrl: "./views/camouflage/camo-medium/medest-six.html",
                    controller: "camoControl"
                    })
                        .state("extremest.hardone",{
                        url: "/hard-one",
                        templateUrl: "./views/camouflage/camo-hard/hardest-one.html",
                        controller: "camoControl"
                        })
                        .state("extremest.hardtwo",{
                        url: "/hard-two",
                        templateUrl: "./views/camouflage/camo-hard/hardest-two.html",
                        controller: "camoControl"
                        })
                        .state("extremest.hardthree",{
                        url: "/hard-three",
                        templateUrl: "./views/camouflage/camo-hard/hardest-three.html",
                        controller: "camoControl"
                        })
                        .state("extremest.hardfour",{
                        url: "/hard-four",
                        templateUrl: "./views/camouflage/camo-hard/hardest-four.html",
                        controller: "camoControl"
                        })
                        .state("extremest.hardfive",{
                        url: "/hard-five",
                        templateUrl: "./views/camouflage/camo-hard/hardest-five.html",
                        controller: "camoControl"
                        })
                        .state("extremest.hardsix",{
                        url: "/hard-six",
                        templateUrl: "./views/camouflage/camo-hard/hardest-six.html",
                        controller: "camoControl"
                        })
                        .state("extremest.hardseven",{
                        url: "/hard-seven",
                        templateUrl: "./views/camouflage/camo-hard/hardest-seven.html",
                        controller: "camoControl"
                        })
                            .state("extremest.one",{
                            url: "/xxxx-one",
                            templateUrl: "./views/camouflage/camo-extreme/extremest-one.html",
                            controller: "camoControl"
                            })
                            .state("extremest.two",{
                            url: "/xxxx-two",
                            templateUrl: "./views/camouflage/camo-extreme/extremest-two.html",
                            controller: "camoControl"
                            })
                            .state("extremest.three",{
                            url: "/xxxx-three",
                            templateUrl: "./views/camouflage/camo-extreme/extremest-three.html",
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