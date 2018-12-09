function getIndexToIns(arr, num) {
    let temp = arr.slice().sort((a, b) => {
        return a - b
    })
    let counter = 0
    console.log(temp)
    temp.forEach((item) => {
        if (item < num) {
            counter++
        }
    })
    return counter
}

let a = getIndexToIns([10, 20, 30, 40, 50], 35)
console.log(a);