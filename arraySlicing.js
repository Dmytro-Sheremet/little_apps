function chunkArrayInGroups(arr, size) {
    let tempArr = [];
    do {
        tempArr.push(arr.splice(0, size))
        console.log(tempArr)
    }
    while (arr.length > 0);
}

chunkArrayInGroups(["a", "b", "b", "b", "b", "b", "c"], 3);