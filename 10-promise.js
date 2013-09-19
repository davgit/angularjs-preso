function asyncGreet(name) {
  var deferred = $q.defer();

  setTimeout(function() {
    // since this fn executes async in a future turn of the event loop, we need to wrap
    // our code into an $apply call so that the model changes are properly observed.
    scope.$apply(function() {
      deferred.notify('About to greet ' + name + '.');

      if (okToGreet(name)) {
        deferred.resolve('Hello, ' + name + '!');
      } else {
        deferred.reject('Greeting ' + name + ' is not allowed.');
      }
    });
  }, 1000);

  return deferred.promise;
}