function pairElement(str) {
  let Arr = []
  const [A, T, C, G] = [
    ['A', 'T'],
    ['T', 'A'],
    ['C', 'G'],
    ['G', 'C']
  ]
  pusher = (char) => {
    if (char === 'A') {
      Arr.push(A)
    } else if (char === 'T') {
      Arr.push(T)
    } else if (char === 'C') {
      Arr.push(C)
    } else if (char === 'G') {
      Arr.push(G)
    } else {
      console.error('there are appropriate chars on input!')
    }
  }
  str.split('').forEach(pusher)
  return Arr
}

/* 
   function pairElement(str) {
    let pairs = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    }
    let arr = str.split("");
    return arr.map(x => [x,pairs[x]]);
  }
*/
/* AT CG*/

let a = pairElement("GCGGJG");
console.log(a);