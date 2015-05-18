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

    $scope.uploadJson = function  (insertedJson) {
      $scope.data = JSON.parse(insertedJson);
    }

    $scope.newSubItem = function(scope) {
      var nodeData = scope.$modelValue;
      console.log(nodeData);

      var newNode = {};

      newNode["nodes"] = [];

      if (nodeData["type"] == "question") {
        newNode["type"] = "answer";
        newNode["text"] = "New Answer";
        newNode["img"] = "Image URL";
        nodeData.nodes.push( newNode );
      }
      // check to see if node.nodes are questions
      else if (nodeData["type"] == "answer") {
        if((nodeData.nodes.length > 0 && nodeData.nodes[0].type=="question") || nodeData.nodes.length == 0) {
          newNode["type"] = "question";
          newNode["text"] = "New Question";
          nodeData.nodes.push( newNode );
        }
      }
    };


    $scope.saveImage = function(node, imgURL) {
      node["img"] = imgURL;
    };

    $scope.addProduct = function(node) {
      var newNode = {};
      newNode["type"] = 'product';
      newNode["sku"] = 'sku';
      node.nodes.push(newNode);
    };

    $scope.removeProduct = function(node) {
      node.nodes.pop();
    };

    $scope.removeThisProduct = function(node, index) {
      console.log('remove this product');
      console.log(node);
      console.log(index);
      node.nodes.splice(index, 1);
      console.log(node);
    };

    $scope.saveProduct = function(n, productSku ) {      
      if (productSku == '' || productSku == undefined)     {
        productSku = 'sku';
      }
      n["sku"] = productSku;
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