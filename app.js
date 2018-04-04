var App = angular.module('App', []);

App.controller('TodoCtrl', function($scope, $http) {
  return $http.get('todos.json')
       .then(function(res){
          $scope.todos = res.data;                
        });
});