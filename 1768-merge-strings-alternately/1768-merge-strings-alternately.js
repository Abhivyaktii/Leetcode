/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let lenWord1 = word1.length;
    let lenWord2 = word2.length;
    let newStr = ''
    let shorterWord  = lenWord1<lenWord2?lenWord1:lenWord2;
    let longerWord = lenWord1>lenWord2?word1:word2
    for(i=0;i<shorterWord;i++){
        newStr += word1[i]+word2[i];
    }
    console.log(newStr)
    console.log(longerWord)
    return newStr+=longerWord.slice(shorterWord)
};