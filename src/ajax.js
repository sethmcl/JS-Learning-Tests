function Ajax( config ) {
  config = config || {};

  // Make sure there is a URL
  if( !config.requestURL ) {
    throw new Error( 'Request URL required' );
  }

  function makeRequest(cb) {
    $.get( config.requestURL, function(data) {
      cb(data);
    }).error( function(a, b, http) {
      cb(http);
    });

  }

  this.makeRequest = makeRequest;
}
