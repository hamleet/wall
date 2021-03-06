/**
 * Created by Ermin Islamagic on 13.1.2015.
 */

var wallApp = angular.module('wallApp', ['ngRoute','ngSanitize','infinite-scroll','ui.bootstrap']);
var controllers = {};

wallApp.factory('bricksFactory', function(){

    var bricks = [
        { id: 1, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 2, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 3, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 4, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 5, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 6, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 7, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 8, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 9, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 10, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 11, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 12, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 13, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 14, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 15, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 16, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 17, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 18, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 19, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 20, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 21, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 22, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 23, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 24, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 25, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 26, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 27, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 28, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 29, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 30, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 31, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 32, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 33, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 34, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 35, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 36, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 37, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 38, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 39, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 40, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 41, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 42, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 43, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 44, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 45, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 46, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 47, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 48, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 49, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 50, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },


        { id: 41, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 42, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 43, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 44, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 45, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 46, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 47, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 48, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 49, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 50, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 41, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 42, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 43, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 44, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 45, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 46, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 47, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 48, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 49, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 50, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 41, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 42, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 43, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 44, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 45, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 46, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 47, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 48, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 49, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 50, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 41, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 42, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 43, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 44, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 45, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 46, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 47, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 48, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 49, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 50, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 41, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 42, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 43, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 44, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 45, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 46, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 47, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 48, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 49, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 50, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 41, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 42, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 43, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 44, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 45, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },

        { id: 46, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 47, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
        { id: 48, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
        { id: 49, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
        { id: 50, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
    ];

    var factory = {};
    factory.getBricks = function(){
        return bricks;
    }

    return factory;
})

controllers.homeController = function($scope, bricksFactory, $log){
    $scope.bricks = [];

    function init(){
        $scope.bricks = bricksFactory.getBricks();
    }

    $scope.addMoreItems = function(){

        $scope.count = $scope.length || 0;

        var genItems = [
            { id: $scope.count+1, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
            { id: $scope.count+2, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
            { id: $scope.count+3, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
            { id: $scope.count+4, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
            { id: $scope.count+5, name: 'Test Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
            { id: $scope.count+6, name: 'John Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" },
            { id: $scope.count+7, name: 'Smith Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#ffa600" },
            { id: $scope.count+8, name: 'Jane Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#eb0000" },
            { id: $scope.count+9, name: 'Troll Doe', image: 'http://placehold.it/120x120', width: 120, height: 120, city: 'New York', hits: 30, color: "#00d7d7" }];


        for(var i = 0; i < genItems.length; i++) {
            $scope.bricks.push(genItems[i]);
        }
    }

    init();
}

wallApp.directive('resize', function ($window) {
    return function (scope, element) {

        scope.elementsOnFirstRow = 0;

        var w = angular.element($window);

        scope.getWindowDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };

        scope.$watch(scope.getWindowDimensions, function () {

            scope.elementsOnFirstRow = Math.round( (angular.element(element[0]).width() - (scope.bricks[0].width / 2)) / scope.bricks[0].width);

            scope.breakLeftRowAt = ((scope.elementsOnFirstRow * 2) - 1 ) + "n-" + (scope.elementsOnFirstRow - 2);
            scope.breakRightRowAt = ((scope.elementsOnFirstRow * 2) - 1 ) + "n-" + ((scope.elementsOnFirstRow  * 2) - 1);

            // first init
            scope.hexagonCellOrder = '.cell-wrap:nth-child(' + scope.breakLeftRowAt + '){ margin-left: ' + (scope.bricks[0].width / 2) + 'px; } ' +
            '.cell-wrap:nth-child(' + scope.breakRightRowAt + '){ margin-right: ' + (scope.bricks[0].width / 2) + 'px; }';

        }, true);

        w.bind('resize', function () {
            // on resize
            scope.hexagonCellOrder = '.cell-wrap:nth-child(' + scope.breakLeftRowAt + '){ margin-left: ' + (scope.bricks[0].width / 2) + 'px; } ' +
            '.cell-wrap:nth-child(' + scope.breakRightRowAt + '){ margin-right: ' + (scope.bricks[0].width / 2) + 'px; }';
            scope.$apply();
        });

    }
})

//wallApp.directive('hexagon', function() {
//    return function(scope, element, attrs) {
//
//    };
//}).directive('hive', function($compile) {
//    return function(scope, element, attrs) {
//
//    };
//});

wallApp.controller(controllers);

wallApp.config(function ($routeProvider) {
    $routeProvider.when('/bricks',{
        controller: 'homeController',
        templateUrl: 'assets/js/app/views/partials/home.html'
    }).otherwise({ redirectTo: '/bricks'});
});


angular.forEach([
    { ngAttrName: 'ngXlinkHref', attrName: 'xlink:href' },
    { ngAttrName: 'ngWidth', attrName: 'width' },
    { ngAttrName: 'ngHeight', attrName: 'height' }
], function (pair) {

    var ngAttrName = pair.ngAttrName;
    var attrName = pair.attrName;

    wallApp.directive(ngAttrName, function () {

        return {

            priority: 99,

            link: function (scope, element, attrs) {

                attrs.$observe(ngAttrName, function (value) {

                    if (!value)
                        return;

                    attrs.$set(attrName, value);
                    if (navigator.userAgent.indexOf('MSIE') != -1)
                        element.prop(attrName, value);
                });
            }
        };
    });
});