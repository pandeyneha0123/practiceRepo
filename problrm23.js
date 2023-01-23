//14. Longest Common Prefix

var longestCommonPrefix = function(strs) {
    let cur = strs[0]
    let temp = ""
    for(let i = 1; i < strs.length; i++){
        for(let j = 0; j < cur.length; j++){
            if(cur[j] == strs[i][j]){
                temp += cur[j]
            } else {
                break
            }
        }
        cur = temp
        temp = ""
    }
    return cur
};