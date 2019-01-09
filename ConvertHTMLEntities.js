function convertHTML(str) {
  let code = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': "&apos;"
  }
  // let item = '<'
  // console.log(code[item]);

  return str.split('').map(item => (item in code) ?  code[item] : item).join('')

}

let a = convertHTML("Dolce & Gabbana");
console.log(a);