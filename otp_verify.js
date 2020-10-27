var temp = angular.module('myApp', []);

temp.controller('otpCtrl', function($scope, $http, $window){
     $scope.otp = "";
     $scope.verify_otp = function(){
          console.log("$scope.otp");
          console.log($scope.otp);
          if($scope.otp == "123456"){
               $window.location.href = 'success.html';
          }
          else{
               $window.location.href = 'success_no.html';
          }
     }
});