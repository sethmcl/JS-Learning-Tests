TestCase('DeepEquals', {
  setUp: function () {
  },

  tearDown: function() {

  },

  'test simple values': function() {
    assertTrue( '1 equals 1', deepEquals( 1, 1 ) );
    assertFalse( '"Name" is not equal to "Foo"', deepEquals( 'Name', 'Foo' ) );
  },

  'test arrays': function() {
    var array1 = [1, 4, "best", { location: { city: 'sanfran', zip: 94003 } } ];
    var array2 = [1, 4, "best", { location: { city: 'sanfran', zip: 94003 } } ];
    var array3 = [1, 4, "best", { location: { city: 'sanfran1', zip: 94003 } } ];

    assertTrue( 'Arrays are equal', deepEquals( array1, array2 ) );
    assertFalse( 'Arrays are not equal', deepEquals( array1, array3 ) );
  },

  'test functions': function() {
    var fn1 = function( name ) { console.log(name); };
    var fn2 = function( name ) { console.log(name); };

    assertTrue( 'Functions are equal', deepEquals( fn1, fn2 ) );
  },

  'test undefined and null': function() {
    assertFalse( 'null is not equal to undefined', deepEquals( undefined, null ) );
  },

  'test subset objects': function() {
    var obj1 = { name: 'seth', age: 99 };
    var obj2 = { name: 'seth', age: 99, location: 'California' };

    assertFalse( 'Objects are not equal', deepEquals( obj1, obj2 ) );
  },

  'test limit levels of recursion': function() {
    var obj1 = { name: 'seth', location: { area: { zip: { nation: 'usa' } } } };
    var obj2 = { name: 'seth', location: { area: { zip: { nation: 'usa', zone: 1 } } } };
    var obj3 = { name: 'seth', location: { area: 'a' } };
    var obj4 = { name: 'seth', location: { area: 'b' } };

    assertTrue( 'objects are equal down to 3 levels of recursion', deepEquals( obj1, obj2, 2 ) );
    assertTrue( 'objects are equal down to 0 level of recursion', deepEquals( obj3, obj4, 0 ) );
  },

  'test regexp': function() {
    var reg1 = /test/;
    var reg2 = /test/;

    assertTrue( 'regexp are equal', deepEquals( reg1, reg2 ) );
  }
});
