var reversePrefix = function(word, ch) {
    let idx = word.indexOf(ch);
    if(idx == -1){
        return word;
    }
    let firststr = word.substring(0, idx + 1).split('').reverse().join('');
    let secondstr = word.substring(idx + 1);
    let result = firststr + secondstr;
    return result;
};
