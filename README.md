#Instructions
##About
Have you ever noticed a group of friends Playing mobile phone. When you click on the button on the mobile phone or ipad, button rock will bring you a new experience, could not help but like click with your fingers.
#Installation
 - Clone this repo (or fork then clone, if you prefer)
  - Run `bower install https://github.com/Shangri-GitHub/waggle-and-verification.git --save-dev`.
##Example
```javascript
 angular.module('myApp.directive', [])
// 1) .directive('helloWorld', function () {
        return {
            restrict: 'E',
            template: '<h2><span class="label label-info">hello World</span></h2>',
            replace: true
        }
    })

// 2) .directive('timeLabel', function ($interval) {
        return {
            restrict: 'E',
            template: '<h2><span class="label label-info">{{date|date:"yyyy-MM-dd hh-mm-ss"}}</span></h2>',
            replace: true,
            link: function (scope, element, attr) {
                scope.date = new Date()

                $interval(function () {
                    scope.date = new Date()
                }, 1000);
                // console.log(arguments);
            }
        }
    })

// 3) .directive('waggleShow', function ($interval) {
        return {
            restrict: 'A',
            replace: false,
            link: function (scope, element, attr) {
                element[0].onclick = function () {
                    var a = 10;
                    var isleft = true;
                    var b = $interval(function () {
                        element[0].style.marginLeft = (isleft ? '-' : '') + a + 'px';
                        a--;
                        isleft = !isleft;
                        if (a <= 0) {
                            $interval.cancel(b);
                            a = 20;
                        }
                    }, 50)
                };
                //console.log(arguments);
            }
        }
    })
// 4).directive('jumBotron', function () {
        return {
            restrict: 'E',
            template: '<div class="jumbotron"><h1>{{jumtitle}}</h1><p>{{jumcontant}}</p><p><a ng-click="ButtonClick()" class="btn btn-primary btn-lg" href="#" role="button">按钮</a></p></div>',
            replace: true,
            link: function (scope, element, attr) {
                scope.jumtitle = attr.jumTitle;
                scope.jumcontant = attr.jumContant;
                //console.log(arguments);
                scope.ButtonClick = function () {
                    scope.$eval(attr.jumbotronButtonClick)
                }
            }
        }
    })

// 5).directive('navBar', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/navbar.html',
            replace: true,
            link: function (scope, element, attr) {
                scope.activeIndex = attr.activeIndex;
                console.log(scope.activeIndex);
                console.log(arguments);
                scope.navs = [
                    {
                        id: 0,
                        name: 'calc',
                        url: '#/calc'
                    },
                    {
                        id: 1,
                        name: 'test',
                        url: '#/addform'
                    },
                    {
                        id: 2,
                        name: 'colorSelect',
                        url: '#/colorSelect'
                    },
                    {
                        id: 3,
                        name: 'submitform',
                        url: '#/submitform'
                    }
                ]
            }
        }
    });
 
