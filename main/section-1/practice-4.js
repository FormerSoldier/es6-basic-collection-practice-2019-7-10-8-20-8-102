'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result = [];
  result = collectionA.map(item => item['key']);
  return result.filter(item => {
      return objectB['value'].includes(item);
  });
}
