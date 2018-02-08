let assert = require('chai').assert;
let mergeSort = require('../lib/mergeSort');

function createRandomArray (min, max) {
  let array = [];
  for (let i = 0; i < max; i++) {
  array.push(Math.floor(Math.random() * (max - min) + min));
  }
return array;
}

describe ('mergeSort', function () {

  it('should sort an array of numbers', function () {
    let numberArray = [5, 56, 23, 2, 8, 12, 100, 11, 67, 39];
    numberArray = mergeSort(numberArray);
    assert.deepEqual(numberArray, [ 2, 5, 8, 11, 12, 23, 39, 56, 67, 100 ]);
  });

  it('should sort an array of letters', function () {
    let alphaArray = ['z', 'f', 't', 'e', 'x', 'h', 'b', 'k', 's', 'l'];
    alphaArray = mergeSort(alphaArray);
    assert.deepEqual(alphaArray, [ 'b', 'e', 'f', 'h', 'k', 'l', 's', 't', 'x', 'z' ]);
  });
  
  it('should sort a large array of numbers', function () {
    let randomArray = createRandomArray(-1000, 1000);
    randomArray = mergeSort(randomArray);
    for (let i = 1; i < randomArray.length; i++) {
    assert.equal(randomArray[i - 1] <= randomArray[i], true);
    }
  })
})