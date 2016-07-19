angular.module('twitterApp', []);

angular.module('twitterApp').controller('MainController', function($scope, $http){

  $scope.twitter_handle = [];
  $scope.nouns = [];
  $scope.adjectives = [];

  $scope.twitterHandle = function(){
    $http.get('/nouns').then(handleSuccessNouns, handleFailure);
    // $http.get('/adjectives').then(handleSuccess, handleFailure);
    // if(callBack){
    //   callBack();
    // }
  };

  function handleSuccessNouns(response){
    console.log('Amazing, it actually worked!!!', response);
    $scope.nouns = response.data;
    // $scope.twitter_handle = response.data;
    getAdjs();
  }

  function handleSuccessAdjs(response){
    console.log('Amazing, it actually worked!!!', response);
    $scope.adjectives = response.data;
    createTwitterHandles();
    // $scope.twitter_handle = response.data;
  }

  function handleFailure(response){
    console.log('You broke it!!! Failure!!!!', response);
  }

  var getAdjs = function(){
    $http.get('/adjectives').then(handleSuccessAdjs, handleFailure);
  }

  function createTwitterHandles(){
    $scope.nouns = shuffle($scope.nouns);
    $scope.adjectives = shuffle($scope.adjectives);
    for(var i = 0; i < 10; i++){
      $scope.twitter_handle[i] = '@' + $scope.adjectives[i].adjective + $scope.nouns[i].noun;
    }
    console.log($scope.twitter_handle);


  }


  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
    return array;
}


});
