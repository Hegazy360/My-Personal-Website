'use strict';

var app = angular.module('weatherApp', ['ngMaterial']);

app.controller('ListController', function($scope, $http) {
  $scope.isSearching = false;
  $scope.$watch("searchTerm", function() {
    var resultsTop = angular.element(document.querySelector('#resultsTop')); //search for top result block
    var resultsBottom = angular.element(document.querySelector('#resultsBottom')); //search for bottom result block
    //enable progress bar if there is a delay

    if ($scope.searchTerm != null && $scope.searchTerm != '') {
      $scope.isSearching = true;
      $http({
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.searchTerm + "&mode=json&units=metric&appid=3d6f22f902d1b2ef7bd82ae2f0672360"
      }).then(function mySuccess(current) {
        $scope.currentWeatherData = current.data;
        $scope.isSearching = false;

        $http({
          method: "GET",
          url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.searchTerm + "&mode=json&units=metric&cnt=7&appid=3d6f22f902d1b2ef7bd82ae2f0672360"
        }).then(function mySuccess(response) {
          $scope.weatherData = response.data;
          $scope.isSearching = false;
        }, function myError(response) {

          $http({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.searchTerm + "&mode=json&units=metric&cnt=7&appid=3d6f22f902d1b2ef7bd82ae2f0672360"
          }).then(function mySuccess(response) {
            $scope.weatherData = response.data;
            $scope.isSearching = false;
          }, function myError(response) {
            $scope.weatherData = "Something went wrong";
            $scope.isSearching = false;
          });
        });


      }, function myError(current) {
        $http({
          method: "GET",
          url: "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.searchTerm + "&mode=json&units=metric&appid=3d6f22f902d1b2ef7bd82ae2f0672360"
        }).then(function mySuccess(current) {
          $scope.currentWeatherData = current.data;
          $scope.isSearching = false;

          $http({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.searchTerm + "&mode=json&units=metric&cnt=7&appid=3d6f22f902d1b2ef7bd82ae2f0672360"
          }).then(function mySuccess(response) {
            $scope.weatherData = response.data;
            $scope.isSearching = false;
          }, function myError(response) {

            $http({
              method: "GET",
              url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.searchTerm + "&mode=json&units=metric&cnt=7&appid=3d6f22f902d1b2ef7bd82ae2f0672360"
            }).then(function mySuccess(response) {
              $scope.weatherData = response.data;
              $scope.isSearching = false;
            }, function myError(response) {
              $scope.weatherData = "Something went wrong";
              $scope.isSearching = false;
            });
          });


        }, function myError(current) {
          $scope.currentWeatherData = "Something went wrong";
          $scope.isSearching = false;
        });
      });
    }
  });
});

//theme settings
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-green', {
      'default': '300'
    })
    .accentPalette('green')
    .backgroundPalette('teal', {
      'default': '50'
    });
});
