////// TRACKER DEFINE & KEY IN THIS MODULE TO DECOUPLE
var _LTracker = _LTracker || [];

absConfig.pushAfterBootstrap('abs.service.loggly');

angular.module('abs.service.loggly').constant('LOGGLY_KEY', (typeof process !== 'undefined' && process.hasOwnProperty('env.LOGGLY_KEY')) ? process.env.LOGGLY_KEY : '');