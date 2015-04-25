'use strict';

angular.module('WizSupportCSPanel.StaticForm', ['WizSupportCSPanel.DataAPI'])


.directive('staticForm', ['Posts', function(Posts){

    return {
        restrict: 'AE',
        templateUrl: 'components/CSForm/StaticForm.html',
        scope: {
            formData: '=',
            brandData: '='
        },

        link: function(scope,element,attrs,ctrl) {

           scope._formData = scope.formData;
           scope._brandData = scope.brandData;

           //console.log(scope._brandData);
           scope.navigateTo = function(dest) {
               document.location.href = '#/'+dest;
           };

            scope.addPost = function() {
                Posts.addPost();
                console.log('scope.addPost');
            };
        }

    }
}]);
