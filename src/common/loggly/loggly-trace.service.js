/**
  * Service that gives us a nice Angular-esque wrapper around the
  * stackTrace.js pintStackTrace() method.
  */
LogglyModule.factory("traceService", traceService);

function traceService(){
  return({
    print: printStackTrace
  });
}