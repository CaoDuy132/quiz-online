app.controller('changepassCtrl', function($rootScope, $scope) {
    $scope.updatePass = function() {
        
        var ck = true;
        $rootScope.students.forEach(st => {
            if (st.username == $scope.username && st.password == $scope.password) {
                st.password= $scope.repassword;
                console.log(st)
                Swal.fire({
                    icon: 'success',
                    title: 'Cập nhật tài khoản thành công!',
                    text: 'Mật khẩu mới: ' + $scope.repassword,
                });
                ck = false;
                window.location.href = "#!khoahoc";
            }
        });
        if (ck) {
            Swal.fire({
                icon: 'error',
                title: 'Cập nhật tài khoản thất bại!',
                text: 'Vui lòng nhập lại thông tin',
            });
        }
    }

});