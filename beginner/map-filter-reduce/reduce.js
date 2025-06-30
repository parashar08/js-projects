// arr.reduce((acc, curr, index, arr) => {}, initalValue)

Array.prototype.myReduce = function (cb, initalValue) {
  var accumulator = initalValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const arr = [1, 2, 3, 4];

const sumOfArr = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sumOfArr);
