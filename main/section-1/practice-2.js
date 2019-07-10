'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = [];
  collectionB.forEach(element => {
      result = collectionA.filter(itemA => {
          return element.includes(itemA);
      });
  });
  return result;
}
