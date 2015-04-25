'use strict';

// Declare app level module which depends on views, and components
angular.module('WizSupportCSPanel', [
  'ngRoute',
  'WizSupportCSPanel.view1',
  'WizSupportCSPanel.view2',
  'WizSupportCSPanel.version',
  'WizSupportCSPanel.StaticForm'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
