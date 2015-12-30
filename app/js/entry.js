require('angular/angular');
var angular = window.angular;

var portApp = angular.module('PortApp', []);

require('./controllers')(portApp);
require('./directives')(portApp);
