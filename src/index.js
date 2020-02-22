
function min (array) {
  if (!array || typeof array[0] == 'undefined')
    return 0;

  return array.sort((a,b) => a-b)[0];
}

function max (array) {
  if (!array || typeof array[0] == 'undefined')
    return 0;

  return array.sort((a,b) => b-a)[0];
}

function avg (array) {
  if (!array || typeof array[0] == 'undefined')
    return 0;
    
  return array.reduce((acc,cur) => acc+cur)/array.length;
}

exports.min = min;
exports.max = max;
exports.avg = avg;