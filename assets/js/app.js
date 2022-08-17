var app = angular.module('myApp',["ngRoute"])
app.run(function($rootScope, $http, $timeout) {

    $http.get("db/Students.js").then(function(response) {
        $rootScope.students = response.data;
        
    });

     
        $rootScope.student = null;

    $rootScope.logout = function() {
        $rootScope.student = null;
        // sessionStorage.setItem('username',null)
        // sessionStorage.setItem('user',null)
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('user')
        $rootScope.indexStudent = -1;
        $rootScope.index = 0;

        Swal.fire({
            icon: 'warning',
            title: 'Đã đăng xuất!',
            text: 'Quay lại trang chủ!',
            showConfirmButton: false,
            closeOnClickOutside: false,
            allowOutsideClick: false,
            timer: 1600,
            
       
        });
        window.location.href = "#!index";
    }
});


         app.config(function ($routeProvider) {
        $routeProvider
    .when('/',{
          templateUrl: "khoahoc.html",
          controller:'subjectCtrl'
    }) 
    .when('/gioithieu',{
            templateUrl: "khoahoc.html",
            controller:'subjectCtrl'
    }) 
    .when('/gioithieu',{
        templateUrl: "gioithieu.html"
    })
    .when('/lienhe',{
        templateUrl: "lienhe.html"
    })
    .when('/gopy',{
        templateUrl: "gopy.html"
    })
    .when('/capnhattaikhoan',{
        templateUrl: "capnhattaikhoan.html",
        controller:'updateaccountCtrl'
    })
    .when('/dangky',{
        templateUrl: "dangky.html",
        controller:'register'
    })
    .when('/dangnhap',{
        templateUrl: "dangnhap.html",
        controller:'login'
    })
    .when('/doimatkhau',{
        templateUrl: "doimatkhau.html",
        controller:'changepassCtrl'
        
    })
    .when('/hoidap',{
        templateUrl: "hoidap.html"
    })
    .when('/khoahoc',{
        templateUrl: "khoahoc.html",
        controller:'subjectCtrl'
    })
    .when('/quenmatkhau',{
        templateUrl: "quenmatkhau.html",
        controller:'forgotpassCtrl'
    })
    .when('/suataikhoan',{
        templateUrl: "suataikhoan.html"
    })
    .when("/thitracnghiem/:idMonHoc/:tenMonHoc", {
        templateUrl: "thitracnghiem.html",
        controller: "tnctrl",
      })

      .otherwise({ template: "<h3>Home page</h3>"});
      });
      app.directive('rePass', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attr, mCtrl) {
                function rePas(value) {
                    var pass = scope.studentR.password;
                    if (pass == value) {
                        mCtrl.$setValidity('charE', true);
                    } else {
                        mCtrl.$setValidity('charE', false);
                    }
                    return value;
                }
                mCtrl.$parsers.push(rePas);
            }
        }
    });
   