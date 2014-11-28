////// TRACKER DEFINE & KEY IN THIS MODULE TO DECOUPLE
var _LTracker = _LTracker || [],
    LOGGLY_KEY = LOGGLY_KEY || '';
absConfig.pushAfterBootstrap('abs.service.loggly');

angular.module('abs.service.loggly').constant('LOGGLY_KEY', LOGGLY_KEY);