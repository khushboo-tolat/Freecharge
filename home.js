var temp = angular.module('myApp', []);
     
temp.controller('myCtrl', function($scope, $http, $window){
     $scope.recpieapi = function(){
          $http({
               method: "GET",
               url: "http://starlord.hackerearth.com/recipe"
          }).then(function successCallback(resp){
               $scope.data = resp.data;
          });
     } 

     $scope.recpieapi();

     $scope.payment=function(id){
          $window.location.href = 'payment_gateway.html?id='+id;
     };
});