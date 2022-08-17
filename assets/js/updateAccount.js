app.controller('updateaccountCtrl', function($rootScope, $scope) {
    var user = JSON.parse(sessionStorage.getItem("user"));
    $rootScope.student=user;
    console.log($rootScope.student)
    $scope.updateAcc = function() {
        console.log($scope.fullname)
        $rootScope.students[$rootScope.indexStudent] = angular.copy($rootScope.student);
        sessionStorage.setItem('user', JSON.stringify($scope.student));
        Swal.fire({
            icon: 'success',
            title: 'Cập nhật thông tin cá nhân thành công!',
        });
        window.location.href = "#!khoahoc";
    }
});