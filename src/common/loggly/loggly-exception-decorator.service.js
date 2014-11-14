/**
  * Override Angular's built in exception handler, and tell it to
  * use our new exceptionLoggingService which is defined below
  */
LogglyModule.provider("$exceptionHandler", {
  $get: function(exceptionLoggingService){
          return(exceptionLoggingService);
        }
});