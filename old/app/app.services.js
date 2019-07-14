/**
 * Created by djdapz on 8/8/16.
 */

var appServices = angular.module('app.services', ['ngResource']);

appServices.factory('ConfigService', [function () {

    var url = "https://devon-dot-dapuzzo-dot-com.herokuapp.com";
    return {
        url: url
    }
}]);

appServices.factory('EmailService', ['$http', "ConfigService", function ($http, ConfigService) {

    var sendMail = function (parameters, success, failure) {
        var req = {
            method: "POST",
            url: ConfigService.url + "/contact",
            params: {
                email: parameters.email,
                name: parameters.name,
                message: parameters.message
            }
        };

        $http(req).then(
            function (value) {
                console.log(value);
                success();
            },
            function (error) {
                console.log(error);
                failure(error);
            }
        )
    };


    return {
        sendMail: sendMail
    }
}]);
