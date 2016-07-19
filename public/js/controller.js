angular.module('twitterApp', []);

angular.module('twitterApp').controller('MainController', function($scope, $http){


  function handleSuccess(response){
    console.log('Amazing, it actually worked!!!', response);
  }

  function handleFailure(response){
    conosole.log('You broke it!!! Failure!!!!', response);
  }

});
