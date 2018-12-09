function bouncer(arr) {
    return arr.filter(Boolean);
}

let a = bouncer([7, "ate", "", false, 9]);
console.log(a);
// console.log(Boolean);