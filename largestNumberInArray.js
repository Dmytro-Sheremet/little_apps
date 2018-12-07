let array = [
    [1990, 10, 07, 'sunday' ],
    [11, 12, 13, 14],
    [21, 22, 23, 24],
    [063, 185, 35, 44],
    [-273.15, 88, 13, 666]
];

function check(arr) {
    let maxArr = [];
    for (i = 0; i < arr.length; i++) {
        for (k = 0; k < arr[i].length; k++) {
            if (typeof (arr[i][k]) === 'number') {
                if (arr[i][0] < arr[i][k]) {
                    maxArr[i] = arr[i][k]
                }
            }else{maxArr[i] = 'Not just a Number inside !';}
        }
    }
    return maxArr;
}

// function largestOfFour(arr) {
//     return arr.map(Function.apply.bind(Math.max, null));
//   }

let max = check(array);
console.log(max);