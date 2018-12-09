function truncateString(str, num) {
    if (str.length > num.length) {
        let prefix = str.substr(0, num);
        return prefix + '...';
    } else {
        return str
    }
}

let a = truncateString("A-tisket a-tasket A green and yellow bask", 4);
console.log(a)