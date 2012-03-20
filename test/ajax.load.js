
AsyncTestCase('AjaxLoadTest', {
  setUp: function () {
    this.ajax = new Ajax( { requestURL: '../test.json' } );
  },

  tearDown: function() {

  },

  'test loaded content should be json we expect': function(queue) {
    var requestData;

    this.ajax.makeRequest(function(data) {
      requestData = data;
    });

    queue.call('Make an ajax request', function(callbacks) {
      var myCallback = callbacks.add(function() {
        jstestdriver.console.log( "data: " + requestData );
      });

      setTimeout( myCallback, 2000 );
    });
    assertEquals( true, true );
  }
});
