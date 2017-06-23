angular.module("cardApp", [])

.controller("cardControl", ["$scope", "$http", "$timeout", function($scope, $http, $timeout){

$http.get("https://deckofcardsapi.com/api/deck/0v6urxy4dxu3/shuffle/")


.then(function(response){


$scope.message = true;


  
})

$scope.deal = function(){


$http.get("https://deckofcardsapi.com/api/deck/0v6urxy4dxu3/draw/?count=1")

.then(function(data){

    console.log(data);
    $scope.message = false;
    $scope.image = data.data.cards[0].image
})

}


}])