function uniteUnique() {
  let arr = [...arguments]

  let arrCheck = (arr) => {
    return Array.isArray(arr)
  };

  let iron = (target) => {
    return target.reduce((flatArr, value) => {
      return flatArr.concat(value)
    }, []).forEach((item) => {
      arrCheck(item) ? iron(item) : reduceDummyArr.push(item)
    })
  }

  let unique = (item) => {
    item.reduce((uniqueItems, item) => {
      (uniqueDummyArr.indexOf(item) < 0) ? uniqueDummyArr.push(item): false
    }, [])
  }


  let reduceDummyArr = [];
  iron(arr);
  console.log(reduceDummyArr);
  let uniqueDummyArr = [];
  unique(reduceDummyArr);

  return uniqueDummyArr;

}



let a = uniteUnique([1, [[[[[[[3]]]]]]], 13, [10, [20], 30], 2], [5, 2, 1, 4], [2, 1]);
console.log(a);