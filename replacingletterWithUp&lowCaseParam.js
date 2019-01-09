function myReplace(str, before, after) {
  let beforeCharLow = before.toLowerCase()
  let beforeCharUp = before.replace(before.charAt(0), before.charAt(0).toUpperCase())
  let afterCharLow = after.toLowerCase()
  let afterCharUp = after.replace(after.charAt(0), after.charAt(0).toUpperCase())
  if (str.includes(beforeCharLow)) {
    return str.replace(beforeCharLow, afterCharLow)
  } else if (str.includes(beforeCharUp)) {
    return str.replace(beforeCharUp, afterCharUp)
  }

}

let res = myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "Leaped");
console.log(res);