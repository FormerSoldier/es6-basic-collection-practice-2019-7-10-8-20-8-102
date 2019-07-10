'use strict';

module.exports = function countSameElements(collection) {
   var array = collection.reduce((result, currentVal) => {
     if(currentVal in result)
        result[currentVal]++;
      else
        result[currentVal] = 1;
      return result;
   },{});

   return Object.entries(array).map((item) => {
     return {key:item[0], count:item[1]}
    });
}
