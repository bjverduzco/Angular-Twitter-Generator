angular.module('twitterApp', []);

angular.module('twitterApp').controller('MainController', function($scope, $http){

  $scope.twitter_handle = [];

  $scope.twitterHandle = function(){
    $http.get('/nouns').then(handleSuccess, handleFailure);
    $http.get('/adjectives').then(handleSuccess, handleFailure);
  };

  function handleSuccess(response){
    console.log('Amazing, it actually worked!!!', response);
    $scope.twitter_handle = response.data;
  }

  function handleFailure(response){
    console.log('You broke it!!! Failure!!!!', response);
  }

});
