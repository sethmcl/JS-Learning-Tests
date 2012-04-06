function deepEquals( obj1, obj2, limit ) {
  var obj1Type,
      obj2Type,
      obj1Prop,
      obj2Prop,
      obj1PropCount = 0,
      obj2PropCount = 0;

  limit = (typeof limit !== 'number') ? 10 : limit;

  if( limit < 0 ) {
    return true;
  }

  obj1Type = typeof obj1;
  obj2Type = typeof obj2;

  if( obj1Type !== obj2Type ) {
    return false;
  }

  if( obj1Type === 'function' ) {
    return deepEquals( obj1.toString(), obj2.toString() );
  }

  if( obj1Type !== 'object' ) {
    return (obj1 === obj2);
  }

  for( obj1Prop in obj1 ) {
    obj1PropCount++;
    if( !deepEquals( obj1[obj1Prop], obj2[obj1Prop], limit - 1 ) ) {
      return false;
    }
  }

  if( typeof Object.keys === 'function' ) {
    obj2PropCount = Object.keys( obj2 ).length;
  } else {
    for( obj2Prop in obj2 ) {
      obj2PropCount++;
    }
  }

  return (obj1PropCount === obj2PropCount);
}
