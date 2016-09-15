(function () {
  'use strick';

  angular.module('MsgApp', [])

  .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope', '$filter'];
    function MsgController($scope, $filter) {
      $scope.name="Sohaib";
      $scope.stateOfBeing="alone";
      $scope.cookieCost = .45;
      $scope.sayMessage = function () {
        var msg = "Sohaib likes to eat healthy snacks at night!";
        var output = $filter('uppercase')(msg);
        return output;
      };

      $scope.sohaibwithriyan = function() {
        $scope.stateOfBeing = "withriyan";
      }
}
})();
