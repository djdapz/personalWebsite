/**
 * Created by djdapz on 3/31/16.
 */
var appController = function ($scope, $http, EmailService) {

    $scope.schools = [];
    $scope.jobs = [];
    $scope.clubs = [];
    $scope.awards = [];
    $scope.languages = [];
    $scope.skills = [];
    $scope.cs = [];
    $scope.technical = [];
    $scope.econ = [];
    $scope.projects = [];

    $http.get('app/data/data.json')
        .success(function (data) {
            $scope.schools = data.schools;
            $scope.jobs = data.jobs;
            $scope.clubs = data.clubs;
            $scope.awards = data.awards;
            $scope.languages = data.languages;
            $scope.skills = data.skills;
            $scope.cs = data.cs;
            $scope.technical = data.technical;
            $scope.econ = data.econ;
            $scope.projects = data.projects;
            init();
        })
        .error(function (data) {

        });

    $scope.contact = {
        email: undefined,
        name: undefined,
        message: undefined
    };
    $scope.state = {
        email_status: "RESTING",
        error: false
    };

    var init = function () {
        for (var i = 0; i < $scope.languages.length; i++) {
            setUpStars($scope.languages[i]);
            if ($scope.languages[i].frameworks != undefined) {
                for (var j = 0; j < $scope.languages[i].frameworks.length; j++) {
                    setUpStars($scope.languages[i].frameworks[j]);
                }
            }

        }
    };

    var setUpStars = function (object) {
        var s = object.proficiency;
        var n = 5 - s;
        var arr = []
        for (var i = 1; i <= s; i++) {
            arr.push(i)
        }
        for (var i = 1; i <= n; i++) {
            arr.push(i * -1)
        }
        object.stars = arr;
        return object;
    };


    $scope.lookIn = function () {
        1 + 1;
    };

    $scope.sendEmail = function () {
        //todo figure out ngResrouce, won't work till then
        var data = {
            name: $scope.contact.name,
            email: $scope.contact.email,
            message: $scope.contact.message
        };
        $scope.state.email_status = "SENDING";
        $scope.state.error = undefined;
        EmailService.sendMail(data,
            function () {
                $scope.state.email_status = "SENT";
                $scope.contact.name = undefined;
                $scope.contact.email = undefined;
                $scope.contact.message = undefined;
            },
            function (error) {
                $scope.state.email_status = "RESTING";
                $scope.state.error = error;
            }
        )
    }

    $scope.sendAnotherEmail = function () {
        $scope.state.email_status = "RESTING";
    }


};

/* recommended */
angular
    .module('app')
    .controller("appController", appController);

appController.$inject = ['$scope', "$http", 'EmailService'];
