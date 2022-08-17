app.controller("tnctrl", function ($scope, $http, $routeParams,$interval,$rootScope) {
  $scope.caccachoi = [];
  $scope.idMonHoc = $routeParams.idMonHoc;

  if (!$scope.idMonHoc) {
    $scope.idMonHoc = "ADAV";
  }

  $scope.tenMonHoc = $routeParams.tenMonHoc;

  $http.get("db/Quizs/" + $scope.idMonHoc + ".js").then(
    function (d) {
      $scope.caccauhoi = d.data;
      $scope.start = 1;
      $scope.list = d.data;
      $scope.next = function () {
        $scope.start++;
        
        if ($scope.start > 10) {
          $scope.start = 1;
        }
      };
      $scope.pre = function () {
        $scope.start--;
        console.log($scope.start);
        if ($scope.start < 1) {
          $scope.start = 10;
        }
      };
      $scope.first = function () {
        $scope.start=1
      }
      $scope.last = function () {
        $scope.start=10
      }
     ;
     $scope.timer = 900;
     $scope.elem = [];
     $scope.testMark = 0;

      $scope.mark = function() {
       console.log($scope.caccauhoi[$scope.start].AnswerId)
       console.log($scope.elem[$scope.start].answer)
        if($scope.caccauhoi[$scope.start].AnswerId==$scope.elem[$scope.start].answer){
          swal.fire({
            icon: 'success',
            title: 'Chúc mừng bạn đã chọn đúng!',
            text: 'Bạn được cộng ' + $scope.caccauhoi[$scope.start].Marks + ' điểm',
            showConfirmButton: false,
            timer: 1200
        });
          $scope.testMark+=$scope.caccauhoi[$scope.start].Marks;
          console.log($scope.testMark)
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Chúc bạn may mắn lần sau!.',
            showConfirmButton: false,
            timer: 1200
        });
        }
      }
      $scope.finish = function() {
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn thật sự muốn kết thúc bài thi!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.value) {
                $scope.timer = 1;
                Swal.fire({
                    title: 'Kết thúc bài thi',
                
                    icon: 'success',
                    showConfirmButton: false,
                    closeOnClickOutside: false,
                    allowOutsideClick: false,
                    timer: 4000
                });
            }
        })
    };
      var stop = $interval(function() {
        if ($scope.timer > 0) {
            $scope.timer -= 1;
        } else if ($scope.timer == 0) {
            window.location.href = "#!khoahoc/"
            $interval.cancel(stop);
           
        }
    }, 1000);
    },
    function (d) {
      console.log("Lỗi");
    }
  );
});