function MainCtrl($scope) {
  $scope.user = {"firstName" : "Marc"}
  $scope.save = function() {
    console.log($scope.user);
  }
}