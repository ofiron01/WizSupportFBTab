'use strict';

angular.module('WizSupportCSPanel.view1',
    ['ngRoute',
     'WizSupportCSPanel.StaticForm',
     'WizSupportCSPanel.CSMessage',
     'WizSupportCSPanel.DataAPI'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'MockData', 'User', function($scope, MockData, User) {

     $scope.brandData = MockData.brandData();
     $scope.formData = $scope.brandData.BrandData.data.form;
     $scope.userData = User;
     $scope.userMessages = MockData.postsData().posts;
    console.log($scope.userData.fbName())


}]);