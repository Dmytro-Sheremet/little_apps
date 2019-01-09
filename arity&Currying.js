function add(x) {
  console.log(x)
   return (y) =>{console.log(y); return((z) => {console.log(z);return x + y + z})}
}
let a = add('20')('1')('9');
console.log(a);


/*

*/


