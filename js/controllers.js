/**
 * Created by shangri-la on 16-8-16.
 */
angular.module('myApp.controllers', [])
  .controller('addformCtrl', function ($scope) {
    // create
    $scope.stuArr = [];
    $scope.createForms = function () {
      var master = {
        name: '',
        phone: '',
        isEdit: true
      };
      $scope.stuArr.push(master);
    };
    // delete
    $scope.deleteForm = function ($index) {
      $scope.stuArr.splice($index, 1);
    };
    // ng-repeat加载完成之后开始执行方法
    $scope.$on('ngRepeatFinished', function () {
      // function
    })

  })

  .controller('colorSelectCtrl', function ($scope) {
    $scope.colors = [
      {
        name: '红色',
        id: 0
      },
      {
        name: '绿色',
        id: 1
      },
      {
        name: '蓝色',
        id: 2
      }
    ]
  })
  .controller('testCtrl', function ($scope, baidu, hello, Chats) {
    // $scope.quantity = 1;
    // $scope.price = 9.99;
    // $scope.baidu = baidu;
    // $scope.hello = hello.age;
    // $scope.Chats = Chats;
    $scope.getpinyin = function () {
      Chats.gettest($scope.words).then(
        function (data) {
          // console.log(data);
          $scope.test = data;
        }, function (e) {
          console.log(e)
        }
      )
    }
  })
  .controller('calcCtrl', function ($scope,$state) {

    $scope.toPage1 = function () {
      $state.go("calc.page1")
    }
    $scope.sub = function () {
      $scope.moneyOutput = $scope.moneyInput;
      if ($scope.moneyInput > 83500) {
        $scope.taxMoney = ($scope.moneyInput - 3500) * 0.45 - 13505;
      } else if ($scope.moneyInput <= 83500 && $scope.moneyInput > 58500) {
        $scope.taxMoney = ($scope.moneyInput - 3500) * 0.35 - 5505;
      } else if ($scope.moneyInput <= 58500 && $scope.moneyInput > 38500) {
        $scope.taxMoney = ($scope.moneyInput - 3500) * 0.3 - 2755;
      } else if ($scope.moneyInput <= 38500 && $scope.moneyInput > 12500) {
        $scope.taxMoney = ($scope.moneyInput - 3500) * 0.25 - 1005;
      } else if ($scope.moneyInput <= 12500 && $scope.moneyInput > 8000) {
        $scope.taxMoney = ($scope.moneyInput - 3500) * 0.2 - 555;
      } else if ($scope.moneyInput <= 8000 && $scope.moneyInput > 5000) {
        $scope.taxMoney = ($scope.moneyInput - 3500) * 0.1 - 105;
      } else if ($scope.moneyInput <= 5000 && $scope.moneyInput > 3500) {
        $scope.taxMoney = ($scope.moneyInput - 3500) * 0.03 + 0;
      } else if ($scope.moneyInput <= 3500 && $scope.moneyInput >= 0) {
        alert("您的工资没过3500，不用缴税");
      } else if ($scope.moneyInput < 0) {
        alert("工资不能为负，请重新输入");
      }
      $scope.realMoney = $scope.moneyInput - $scope.taxMoney;


    }
  })
  .controller('page1Ctrl', function ($scope) {



  })
  .controller('submitformCtrl', function ($scope) {
    $scope.use = {
      Name: '',
      Password: '',
      Email: '',
      qq: '',
      Age: ''
    };
    $scope.submit = function (e) {
      console.log($scope.use);
      if (e) {
        alert('重新输入')
      }
    };
    $scope.show = function () {
      alert(22)
    }
  });

