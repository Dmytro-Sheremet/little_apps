let arr = '%$#^%$#TGRTGHFDG#$%W$%^wsy46j5^H*-+;96/dima@#$';

function confirmEnding(data, target) {
    if (target.length === 0) {
        console.log('empty target !');
    } else if (typeof(target) !== 'string') {
        console.log('target not a string !');
    } else if (typeof(data) !== 'string') {
        console.log('data not a string!');
    } else {
        let lastChar = data.slice(-target.length);
        if (lastChar === target) {
            console.log('yep ! it has');
            return true;
        } else {
            console.log("no..... it doesn't have");
        }
    }
}

confirmEnding(arr, '96/dima@#$');