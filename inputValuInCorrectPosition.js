function getIndexToIns(arr, num) {
    let temp = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i-1] < num && num < arr[i]) {
            temp.splice(i,0,num + '-pushed')
            // console.log(temp[i] + '  - caught!')
        } else {
        }
    }
    return temp;
}
let a = getIndexToIns([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5.5);
console.log(a);