function spinalCase(str) {
 
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}

let a = spinalCase('This Is Spinal Tap');
console.log(a);