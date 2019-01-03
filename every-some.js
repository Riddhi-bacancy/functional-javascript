function countWords(inputWords) {
return inputWords.reduce(function(countMap, word) {
//console.log(countMap+" "+word)
countMap[word] = ++countMap[word] || 1;
return countMap
}, {})
//console.log(r)
}

module.exports = countWords


