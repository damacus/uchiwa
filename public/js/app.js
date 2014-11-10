'use strict';

angular.module('uchiwa', [
  'uchiwa.controllers',
  'uchiwa.constants',
  'uchiwa.directives',
  'uchiwa.factories',
  'uchiwa.filters',
  'uchiwa.providers',
  'uchiwa.services',
  // Angular dependencies
  'ngCookies',
  'ngRoute',
  'ngSanitize',
  // 3rd party dependencies
  'toastr',
  'ui.bootstrap'
]);

angular.module('uchiwa').config(['$routeProvider', 'notificationProvider', '$tooltipProvider',
  function ($routeProvider, notificationProvider, $tooltipProvider) {
    $routeProvider
      .when('/', {redirectTo: function () { return '/events'; }})
      .when('/events', {templateUrl: 'partials/events/index.html', reloadOnSearch: false, controller: 'events'})
      .when('/client/:dcId/:clientId', {templateUrl: 'partials/client/index.html', reloadOnSearch: false, controller: 'client'})
      .when('/clients', {templateUrl: 'partials/clients/index.html', reloadOnSearch: false, controller: 'clients'})
      .when('/checks', {templateUrl: 'partials/checks/index.html', reloadOnSearch: false, controller: 'checks'})
      .when('/info', {templateUrl: 'partials/info/index.html', controller: 'info'})
      .when('/stashes', {templateUrl: 'partials/stashes/index.html', reloadOnSearch: false, controller: 'stashes'})
      .when('/settings', {templateUrl: 'partials/settings/edit.html', controller: 'settings'})
      .otherwise('/');
    $tooltipProvider.options({'placement': 'bottom'});
  }]);
