function mutation(arr) {
    console.log(arr[0])
    console.log(arr[1])
    return arr[1].toLowerCase().split('').every((item)=>{return arr[0].toLowerCase().indexOf(item)!==-1;})
}

let a = mutation(["Marxy", "Arxmy"])
console.log(a)