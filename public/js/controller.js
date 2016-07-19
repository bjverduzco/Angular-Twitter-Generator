angular.module('twitterApp', []);

angular.module('twitterApp').controller('MainController', function($scope, $http){

  $scope.twitter_handle = [];

  var twitterHandle = function(){
    $http.get('/twitterHandle').then(handleSuccess, handleFailure);
  };

  function handleSuccess(response){
    console.log('Amazing, it actually worked!!!', response);
    $scope.twitter_handle = response.data;
  }

  function handleFailure(response){
    conosole.log('You broke it!!! Failure!!!!', response);
  }

});
