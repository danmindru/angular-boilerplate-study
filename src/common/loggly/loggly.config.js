////// TRACKER DEFINE & KEY IN THIS MODULE TO DECOUPLE
// ADD VARS TO CONFIG
absConfig._LTracker = absConfig._LTracker || [];
absConfig.pushAfterBootstrap('abs.service.loggly');

angular.module('abs.service.loggly').constant('LOGGLY_KEY', '15cca7a2-5a2b-4d36-80c1-b41fd96ce41c');