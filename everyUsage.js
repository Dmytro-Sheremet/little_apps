function whatIsInAName(collection, source) {

  var srcKeys = Object.keys(source);
  return collection.filter((obj) => 
     srcKeys.every((key) => 
         obj[key]===source[key]
    )
  )
}


let a = whatIsInAName([{
  "apple": 1,
  "bat": 2
}, {
  "bat": 2
}, {
  "apple": 1,
  "bat": 2,
  "cookie": 2
}], {
  "apple": 1,
  "bat": 2
});
console.log(a);