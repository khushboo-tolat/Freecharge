var temp = angular.module('myApp', []);
     
temp.controller('payCtrl', function($scope, $http, $window){
     var obj = $window.location.search.substring(1);
     var temp = obj.split('=');
     
     $scope.recpieapi = function(){
          $http({
               method: "GET",
               url: "http://starlord.hackerearth.com/recipe"
          }).then(function successCallback(resp){
               $scope.temp_data = resp.data;
               var keys = Object.keys($scope.temp_data);
               $scope.len = keys.length;
               
               for(var i = 0; i < $scope.len; i++){
                    if($scope.temp_data[i].id == temp[1]){
                         $scope.data = $scope.temp_data[i];
                    }
               }
          });
     }

     $scope.recpieapi();

     $scope.otp_func = function(){
          $window.location.href = 'otp_verify.html';
     };
});