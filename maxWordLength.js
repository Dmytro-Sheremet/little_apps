function findLongestWordLength(str) {
    let maxChar = 0;
    let words = str.split(' ');
    console.log(` quantity of words is ${words.length}`);
    for (let i = 0; i < words.length; i++) {
        // console.log(i + 1);
        let currentWord = words[i].length;
        if (maxChar < currentWord) {
            maxChar = currentWord;
        }
    }
    return maxChar;

}

let a = findLongestWordLength("Thes quick brown fox jumped over the lazy dog");

console.log(a);