define([
  'angular'
], function(angular){

  // define our app as an angular module
  return angular.module("app", ['ui.router', 'mm.foundation', 'ngSanitize']);
});