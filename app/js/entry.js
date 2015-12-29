require('angular/angular');
var angular = window.angular;

var portApp = angular.module('PortApp', ['ngRoute']);

require('./controllers/controllers')(portApp);
require('./directives/directives')(portApp);
