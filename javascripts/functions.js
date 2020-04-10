// jshint esversion: 7

//3b
let arrAvg = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
return sum / arr.length;
  };

//3c no for loop
  let arrMax = (arr) => {
    let max = -Infinity;
    arr.forEach(function(item, index, array){
      if (item > max){
        max = item;
      }
    });
      return max;
    };

//3d
let sumEvens = (numbers) => {
  let sum = 0;
  for (var number of numbers) {
    if (number % 2 == 0) {
      sum = sum + number;
    }
  }
  return sum;
};

//3e extra credit
function alphaPosition (ch){
    return ch.charCodeAt();
}

//convert to lower case
//convert lower case asci to 1-26 in stead of 97-122

  break;
