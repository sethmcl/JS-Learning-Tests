TestCase('strftimeTest', {
  setUp: function () {
    this.date = new Date(2009, 9, 2, 22, 14, 45);
  },

  tearDown: function() {

  },

  'test %Y should return full year': function () {
    var year = Date.formats.Y(this.date);

    assertNumber( year );
    assertEquals(2009, year);
  }
});
