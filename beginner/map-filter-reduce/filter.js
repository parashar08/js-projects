// const arr = [1, 2, 3, 4];

// const updatedArr = arr.filter((ele, index, arr)=> {})

Array.prototype.myFilter = function (cb) {
  const tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) tempArr.push(this[i]);
  }

  return tempArr;
};

const arr = [1, 2, 3, 4];

const updatedArr = arr.myFilter((ele, index, arr) => {
  return ele % 2 == 0;
});

console.log(updatedArr);
