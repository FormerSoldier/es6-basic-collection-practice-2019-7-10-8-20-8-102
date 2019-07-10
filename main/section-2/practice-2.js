'use strict';

module.exports = function countSameElements(collection) {
  let obj = collection.reduce((initValue, currentVal) =>{
    if(currentVal in initValue)
      initValue[currentVal]++;
    else{
      if(currentVal.length == 1)
        initValue[currentVal]=1;
      else{
        let name = /\w/.exec(currentVal)[0];
        if(name in initValue)
          initValue[name] += parseInt(/\d+/.exec(currentVal)[0]);
        else
          initValue[name] = parseInt(/\d+/.exec(currentVal)[0]);
      }    
    } 
    return initValue;
  },{});

  return Object.entries(obj).map((item)=>{
      return {key:item[0], count:item[1]};
  });
}
