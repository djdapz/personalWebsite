/**
 * Created by djdapz on 8/8/16.
 */

var appServices = angular.module('app.services', ['ngResource']);

appServices.factory('EmailService', ['$resource', function($resource){
    var sendMail = function(params, success, failure){
        var params = {

        }
    }

    return $resource('/contact', {},	{
        submit: {
            method: "POST",
            params: {
                name: undefined,
                email: undefined,
                message: undefined
            }
        }
    });
}]);
