//  To Lower Case

var toLowerCase = function(s) {
    let output = '';
    for (let i = 0; i < s.length; i++) {
        const character = s.charCodeAt(i);
        if (character >= 65 && character <= 90) {
            output += String.fromCharCode(character + 32);
        } else {
            output += s[i];
        }
    }
    
    return output;
};