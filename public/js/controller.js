angular.module('twitterApp', []);

angular.module('twitterApp').controller('MainController', function($scope, $http){

  $scope.twitter_handle = [];

  $scope.twitterHandle = function(){
    $http.get('/nouns').then(handleSuccessNouns, handleFailure);
    // $http.get('/adjectives').then(handleSuccess, handleFailure);
    // if(callBack){
    //   callBack();
    // }
  };

  function handleSuccessNouns(response){
    console.log('Amazing, it actually worked!!!', response);
    // $scope.twitter_handle = response.data;
    getAdjs();
  }

  function handleSuccessAdjs(response){
    console.log('Amazing, it actually worked!!!', response);
    // $scope.twitter_handle = response.data;
  }

  function handleFailure(response){
    console.log('You broke it!!! Failure!!!!', response);
  }

  var getAdjs = function(){
    $http.get('/adjectives').then(handleSuccessAdjs, handleFailure);
  }

});
