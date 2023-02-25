"use strict";

/**  Takes two arrays of keys and values of possibly-different lengths.
     Returns an object created from the keys and values.
     If there are not enough values, the rest of keys should have a value of null.
     If there not enough keys, just ignore the rest of values.
*/
function twoArrayObject(keys, vals) {
  const obj = {};

  for (let i = 0; i < keys.length; i++) {
    let val = vals[i];
    if (!val) {
      val = null;
    }
    obj[keys[i]] = val;
  }

  return obj;
}

// twoArrayObject(['x', 'y', 'z'], [1, 2]);
//   // {'x': 1, 'y': 2, 'z': null}

// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]);
//   // {'a': 1, 'b': 2, 'c': 3}