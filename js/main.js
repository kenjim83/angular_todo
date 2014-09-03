//
todo = angular.module('Todo', ['ngStorage', 'ui.router'])

todo.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/') // if no other routes found, use this.

  $stateProvider.state('index', {
    url: "/",
    templateUrl: "tasks.html",
    controller: "Tasks"
  })

  $stateProvider.state('view', {
    url: '/:id',
    template: '<h1>Hi</h1>'

  })

})


todo.controller('Tasks', function($scope, $localStorage){

  // Research "State Resolves" / "UI Router Resolves"

  // Study Services.  Creating your own services

  // Creating your own directives.  Stay away from learning directives for now. Use ONLY if needed.

  $scope.tasks=[{}];
  if($localStorage.tasks){
    $scope.tasks = $localStorage.tasks;
  } else {
    $scope.reset()
  }

  $scope.reset = function(){
    $scope.tasks = $localStorage.tasks = [{}]
  }

  $scope.add = function(){
    $scope.tasks.push({})
  }

  $scope.remove = function(index){
    $scope.tasks.splice(index, 1)
  }

  $scope.tasks_template = 'tasks.html';

})

