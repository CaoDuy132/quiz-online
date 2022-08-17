app.controller('register', function($rootScope, $scope) {
    $scope.register = function() {
        $rootScope.students.push(angular.copy($scope.studentR));
        sessionStorage.setItem('user', JSON.stringify($scope.studentR));

        
        $scope.studentR = {};
       
        $scope.repassword = '';
      
            
        Swal.fire({
            icon: 'success',
            title: 'Đăng kí  thành công!',
            text: 'Quay lại trang chủ!',
            showConfirmButton: false,
            closeOnClickOutside: false,
            allowOutsideClick: false,
            timer: 1600
        });
        window.location.href = "#!khoahoc";
    }
});