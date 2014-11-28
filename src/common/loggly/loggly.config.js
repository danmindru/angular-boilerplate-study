////// TRACKER DEFINE & KEY IN THIS MODULE TO DECOUPLE
var _LTracker = _LTracker || [],
    process.env.LOGGLY_KEY = process.env.LOGGLY_KEY || '';
absConfig.pushAfterBootstrap('abs.service.loggly');

angular.module('abs.service.loggly').constant('LOGGLY_KEY', process.env.LOGGLY_KEY);