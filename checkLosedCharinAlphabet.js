/* 
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/

function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let charFirst = str.charAt(0)
  let charLast = str.charAt(str.length - 1)
  let alphabetIndexFirst = alphabet.indexOf(charFirst)
  let alphabetIndexLast = alphabet.indexOf(charLast)
  let char
  for (let i = alphabetIndexFirst; i <= alphabetIndexLast; i++) {
    if (!str.includes(alphabet.charAt(i))) {
      return char = alphabet.charAt(i)
    } else {
      char = undefined
    }
  }
  return char
}




let result = fearNotLetter("abce");
console.log(result);