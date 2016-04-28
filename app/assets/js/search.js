(function () {
var app = angular.module ('app', []);
app.controller('UsersController', ['$scope', '$http', function($scope, $http) {
$http.get('../dist/data/zabytki.json').success(function(data){
$scope.users = data;
});
}]);
})();
