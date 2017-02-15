angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	// $scope.users = mainService.getUsers();
    mainService.getUsers().then(response => {
      $scope.users = response.data.data;
    });
  }


  $scope.getUsers();

});
