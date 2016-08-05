var restaurantsApp = angular.module('restaurantsApp', ['ngResource']);

restaurantsApp.factory("Restaurant", function($resource) {
  return $resource("Restaurants/:id", { id: '@id' }, {
    index:   { method: 'GET', isArray: true, responseType: 'json' },
  });
})

restaurantsApp.controller("RestaurantsController", function($scope, Restaurant) {
  $scope.Restaurants = Restaurant.index()

})