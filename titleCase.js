function titleCase(str) {
    return arr = str
    .toLowerCase()
    .split(' ')
    .map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
.join(' ');

}

let a = titleCase("let's write a long code strings");
console.log(a)