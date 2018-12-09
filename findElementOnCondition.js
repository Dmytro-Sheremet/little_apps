function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

let a = findElement([1, 3, 3, 1], num => num % 2 === 0);
console.log(a);

