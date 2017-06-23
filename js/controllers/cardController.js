angular.module("cardApp", [])

.controller("cardControl", ["$scope", "$http", "$timeout", function($scope, $http){
    
    $scope.score = 0

    var scores = {

        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        "QUEEN": 10,
        "JACK": 10,
        "KING": 10,
        "ACE": 11

    };


$http.get("https://deckofcardsapi.com/api/deck/0v6urxy4dxu3/shuffle/")


.then(function(response){

//when page loads display message
$scope.message = true;

})

$scope.deal = function(){


$http.get("https://deckofcardsapi.com/api/deck/0v6urxy4dxu3/draw/?count=1")

.then(function(data){
    
    
    //when card is dealt, hide message
    console.log(data);
    $scope.message = false;
    $scope.image = data.data.cards[0].image
    
    var cardValue = data.data.cards[0].value;

   $scope.score += scores[cardValue]



    //get card value

    //add value to current score

    //check if went over 21
})

}


}])