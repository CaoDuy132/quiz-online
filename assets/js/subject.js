app.controller('subjectCtrl',function($scope,$http,$rootScope){
  var obj = JSON.parse(sessionStorage.getItem('user'));
  if(obj){
      $rootScope.fullname=obj.fullname
     
  }else{
      $rootScope.fullname='Tài khoản'
  }
    $scope.list_subject = [];
    $http.get('./db/Subjects.js')
    .then(function(res){
      $scope.list_subject = res.data;
      $scope.start=0;
      $scope.check=function($id,$name){
        Swal.fire({
          title: 'Bắt đầu thi?',
          text: "Bạn đã sẳn sàng!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Có! Bắt đầu thi.',
          cancelButtonText: 'Chưa'
      }).then((result) => {
          if (result.value) {
              window.location.href = "#!thitracnghiem/" +$id+"/" + $name 
          }
      })
      }
    
      $scope.next = function () {
        $scope.start+=4;
        console.log($scope.start)
        if ($scope.start > $scope.list_subject.length-1) {
          $scope.start = 0;
        }
      };
      $scope.pre = function () {
       
        
        if ($scope.start <4) {
          $scope.start = $scope.list_subject.length;
        }
        $scope.start = $scope.start -4;
        console.log($scope.start);
      };
   
    })

  })