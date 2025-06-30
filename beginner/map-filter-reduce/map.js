Array.prototype.myMap = function (cb) {
  const tempArr = [];
  for (let i = 0; i < this.length; i++) {
    tempArr.push(cb(this[i], i, this));
  }

  return tempArr;
};

const arr = [1, 2, 3, 4, 5];

const updatedArr = arr.myMap((ele, index, arr) => {
  return ele * 5;
});

console.log(updatedArr);
