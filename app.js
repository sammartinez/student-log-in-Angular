var studentLogin = angular.module('studentLogin', ['ui.router']);

studentLogin.config(function($stateProvider, $urlRouterProvider) {
    //Path for homepage
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html"
    });
    
    //Path for signing in as a student
    $stateProvider.state('sign-in', {
        url:"/sign-in",
        templateUrl: "partials/sign-in.html"
    });

    //Path for teacher to see who is here.
    $stateProvider.state('whos-here', {
        url:"/whos-here",
        templateUrl: "partials/whos-here.html"
    });
});
