/**
 * Created by djdapz on 8/8/16.
 */

var appServices = angular.module('app.services', ['ngResource']);

appServices.factory('ConfigService', [function(){

    var url = "https://devon-dot-dapuzzo-dot-com.herokuapp.com"
    return {
        url: url
    }
}])

appServices.factory('EmailService', ['$http', "ConfigService", function($http, ConfigService){

    var sendMail = function(params){
        var req = {
            method: "POST",
            url: ConfigService.url + "/contact",
            parameters: {
                email: params.email,
                name: params.name,
                message: params.message
            }
        }

        $http(req).then(
            function(value){
                console.log(value)
            },
            function(error){
                console.log(error)
            }
        )
    }




    return {
        sendMail: sendMail
    }
}]);
