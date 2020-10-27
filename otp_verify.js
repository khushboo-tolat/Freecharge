var temp = angular.module('myApp', []);

temp.controller('otpCtrl', function($scope, $window){
     $scope.otp = "";
     $scope.verify_otp = function(){
          if($scope.otp == "123456"){
               $window.location.href = 'success.html';
          }
          else{
               $window.location.href = 'success_no.html';
          }
     }
});