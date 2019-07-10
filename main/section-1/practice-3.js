'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter(itemA => {
      return objectB['value'].includes(itemA);
  });
}
