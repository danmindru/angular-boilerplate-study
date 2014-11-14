var LogglyModule = AppConfig.pushAfterBootstrap('abs.service.loggly');

//////////////////////////////
LogglyModule.config(function(){
  var _LTracker = _LTracker || [];
  _LTracker.push({'logglyKey': '15cca7a2-5a2b-4d36-80c1-b41fd96ce41c' });
});