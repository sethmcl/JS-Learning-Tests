TestCase('HashTest', {
  setUp: function () {
    this.hash = encodeURIComponent('Exercise & Diet');
    window.location.hash = this.hash;
  },

  tearDown: function() {

  },

  'test value in hash should not be decoded when accessed': function() {
    assertEquals( '#' + this.hash, window.location.hash );
  }
});
