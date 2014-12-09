////// TRACKER DEFINE & KEY IN THIS MODULE TO DECOUPLE
var _LTracker = _LTracker || [];

absConfig.pushAfterBootstrap('abs.commonLoggly');

angular.module('abs.commonLoggly').constant('LOGGLY_KEY', (typeof process !== 'undefined' && process.hasOwnProperty('env.LOGGLY_KEY')) ? process.env.LOGGLY_KEY : '');