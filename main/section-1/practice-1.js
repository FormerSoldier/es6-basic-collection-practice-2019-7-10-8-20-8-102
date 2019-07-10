'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((itemA)=>{
      return collectionB.includes(itemA);
  });
}
