function translatePigLatin(str) {
  let splitedStr = str.split('')
  let consonantUpperCase = ['B', 'C', 'D', 'F', 'G',
    'H', 'J', 'K', 'L', 'M', 'N', 'P',
    'Q', 'R', 'S', 'T', 'V', 'X', 'Z', 'W', 'Y'
  ];
  let consonantLowerCase = consonantUpperCase.map(letter => letter.toLowerCase());
  /* ____________________________________________________________________________________*/
  let FIRST = 0;
  let SECOND = 0;
  let THIRD = 0;

  for (let i = 0;; i++) {
    if (consonantLowerCase.indexOf(splitedStr[i]) === -1 && SECOND === 0) {
      splitedStr.push('way')
      FIRST++
      i--
      console.log('FIRST', FIRST);
      return splitedStr.join('')
    } else if (consonantLowerCase.indexOf(splitedStr[i]) !== -1) {
      splitedStr.push(splitedStr.shift().toUpperCase())
      SECOND++
      i--
      console.log('SECOND', SECOND);
      // return splitedStr.join('')
    } else {
      console.log('THIRD ' + i)
      THIRD++
      i--
      console.log('THIRD', THIRD);
      break
    }

  }

  splitedStr.push('ay')
  return splitedStr.join('').toLowerCase()
}


let a = translatePigLatin("f");
console.log(a);