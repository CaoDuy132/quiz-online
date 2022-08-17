app.controller('login', function($scope,$rootScope) {
    $scope.login = function() {
        var checklogin = false;
        // $rootScope.index=0
        $rootScope.students.forEach(st => {
            if($scope.username){
                if (st.username == $scope.username && st.password == $scope.password) {
                    checklogin = true; 
                    $rootScope.student = st;
                    
                    $scope.username=$scope.student.username;
                    sessionStorage.setItem('username', $scope.student.username);
                    sessionStorage.setItem('user', JSON.stringify($scope.student));
                    Swal.fire({
                        icon: 'success',
                        title: 'Đăng nhập thành công!',
                        showConfirmButton: false,
                
                        allowOutsideClick: false,
                        timer: 1600
                    });
                    $rootScope.indexStudent = st.index;
                    // $rootScope.index=1
                    
                    
                    window.location.href = "#!khoahoc";

            };
            }
        });
        if (checklogin == false) {
            sessionStorage.setItem("username",null)
            sessionStorage.setItem("user",null)
            Swal.fire({
                icon: 'error',
                title: 'Đăng nhập thất bại!',
                text: 'Nhập lại!'
            });
        }
    };
    var user = sessionStorage.getItem('user');
    $rootScope.index=0
    console.log($rootScope.index)
    if(user){
        $rootScope.index=1
    }else{
        $rootScope.index=0
    }

});
