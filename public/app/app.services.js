/**
 * Created by djdapz on 8/8/16.
 */

var appServices = angular.module('app.services', ['ngResource']);

//appServices.factory('EmailService', ['$resource', function($resource){
//    return $resource('/contact', {}, {
//        submit: {
//            method: "POST",
//            params:{
//                name: undefined,
//                email: undefined,
//                message: undefined
//            }
//        }
//    })
//}]);

appServices.factory('EmailService', ['$resource', function($resource){
    return $resource('/contact', {},	{
        get: {
            method: "POST",
            params: {
                name: undefined,
                email: undefined,
                message: undefined
            }
        }
    });
}]);
