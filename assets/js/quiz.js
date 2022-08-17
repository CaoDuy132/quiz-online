app.controller('quizCtrl',function($scope,$http,$routeParams){
    
    $http.get('./db/Quizs/'+$routeParams.Id+'.js')
    .then(function(res){
      $scope.list_subject = res.data;
    })

  })