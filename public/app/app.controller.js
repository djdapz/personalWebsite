/**
 * Created by djdapz on 3/31/16.
 */
var appController = function($scope, $http, EmailService){

    $scope.schools = [];
    $scope.jobs = [];
    $scope.clubs = [];
    $scope.awards = [];
    $scope.languages = [];
    $scope.skills = [];
    $scope.cs = [];
    $scope.technical = [];
    $scope.econ = [];

    $http.get('app/data/data.json')
        .success(function(data){
            $scope.schools = data.schools;
            $scope.jobs = data.jobs;
            $scope.clubs = data.clubs;
            $scope.awards = data.awards;
            $scope.languages = data.languages;
            $scope.skills = data.skills;
            $scope.cs = data.cs;
            $scope.technical = data.technical;
            $scope.econ = data.econ;
            init();
        })
        .error(function(data){

        })

    var init = function(){
        for(var i = 0; i<$scope.languages.length; i++){
            setUpStars($scope.languages[i]);
            if($scope.languages[i].frameworks != undefined) {
                for (var j = 0; j < $scope.languages[i].frameworks.length; j++) {
                    setUpStars($scope.languages[i].frameworks[j]);
                }
            }

        }
    };

    var setUpStars = function(object){
        var s = object.proficiency;
        var n = 5 -s;
        var arr = []
        for(var i = 1; i<=s; i++){
            arr.push(i)
        }
        for(var i = 1; i<=n; i++){
            arr.push(i*-1)
        }
        object.stars = arr;
        return object;
    };


    $scope.lookIn = function(){
        1+1;
    };

    $scope.sendEmail = function(name, email, message){
        //todo figure out ngResrouce, won't work till then
        var data ={
            name: name,
            email: email,
            message: message
        };

        EmailService.sendMail(data)
    }


};

/* recommended */
angular
    .module('app')
    .controller("appController", appController);

appController.$inject = ['$scope', "$http", 'EmailService'];
