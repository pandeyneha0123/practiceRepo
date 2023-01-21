// . Merge Strings Alternately

let result = [];
let maxLength = Math.max(word1.length, word2.length);

for(let i = 0; i < maxLength; i++){
	if(word1[i]) result.push(word1[i])
	if(word2[i]) result.push(word2[i])
}

return result.join('')