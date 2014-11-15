/**
  * Service that gives us a nice Angular-esque wrapper around the
  * stackTrace.js pintStackTrace() method.
  */
angular.module('abs.service.loggly').factory("traceService", traceService);

function traceService(){
  return({
    print: printStackTrace
  });
}