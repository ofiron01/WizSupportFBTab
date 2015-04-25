'use strict';

angular.module('WizSupportCSPanel.CSMessage', [])


    .directive('msg', function(){

        return {
            restrict: 'AE',
            templateUrl: 'components/CSMessage/ParentMessage.html',
            scope: {
                userData: '=',
                messageData: '='
            },

            link: function(scope,element,attrs,ctrl) {


            }

        }
    });
