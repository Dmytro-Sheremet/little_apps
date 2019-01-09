
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];

  this.forEach(item => newArray.push(callback(item)))

/* 
we acces to global array by <this>, 
doing method <forEach> on every item within this array
callback into forEach with arrow function
result is a pushing into newArray a result of executing a function 'callback' executed on every item.... )
*/


  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s);