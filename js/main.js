//
todo = angular.module('Todo', [])

todo.controller('Tasks', function($scope){
  $scope.tasks=[{}];

  $scope.add = function(){
    $scope.tasks.push({})
  }

  $scope.remove = function(index){
    $scope.tasks.splice(index, 1)
  }

  $scope.tasks_template = 'tasks.html';
})


