/**
 * Created by shangri-la on 16-8-22.
 */
angular.module('myApp.services', [])
    .factory('Chats', function ($http, $q) {
        return {
            gettest: function (words) {
                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    headers: {
                        apikey: '5128e82c05245d499eb5045fec21bccc'
                    },
                    // responseType: 'json',
                    url: 'http://apis.baidu.com/xiaogg/changetopinyin/topinyin?str=' + words + '&type ="json"'
                }).then(function (data) {
                    console.log(data);
                    deferred.resolve(data.data);

                }, function (e) {
                    deferred.resolve(e);
                });
                return deferred.promise;
            }
        }
    });
