(function () {
  'use strict';

  angular.module('makerApp', ['ui.tree', 'ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'aoeuCtrl',
          templateUrl: 'views/main.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    }])
.controller('aoeuCtrl', function($scope) {
    $scope.data = [{
      "type": "question",
      "text": "Main Question",
      "nodes": []
    }];

    $scope.selectedItem = {};

    $scope.options = {
    };

    $scope.name = {
      "editing":false
    };

    $scope.remove = function(scope) {
      scope.remove();
    };

    $scope.toggle = function(scope) {
      console.log('hello');
      scope.toggle();
    };

    $scope.newSubItem = function(scope) {
      var nodeData = scope.$modelValue;
      console.log(nodeData);

      var newNode = {};

      newNode["nodes"] = [];

      if (nodeData["type"] == "question") {
        newNode["type"] = "answer";
        newNode["text"] = "New Answer";
      }
      else if (nodeData["type"] == "answer") {
        newNode["type"] = "question";
        newNode["text"] = "New Question";
      }

      
      nodeData.nodes.push( newNode );
    };

    $scope.minus = function(n) {
      if (n > 0) {
        --n;
      }

      return n;

    };



    $scope.editName = function(editing) {
      $scope.name.editing = true;
    };

    $scope.cancelEditingName = function() {
      $scope.name.editing = false;
    };

    $scope.saveName = function(node, newname) {
      node.text = newname;
    };


  });






})();