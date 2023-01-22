//  Decrypt String from Alphabet to Integer Mapping

var freqAlphabets = function(s) {
    s = s.split('#');
    let output = '';
    
    for (let i = 0; i < s.length - 1; i++) {
        const character = s[i];
        const double = character.substring(character.length - 2, character.length);
        
        for (let j = 0; j < character.length - 2; j++) {
            output +=  String.fromCharCode(+character[j] + 96);
        }
        output +=  String.fromCharCode(+double + 96)
    }
    
    const character = s[s.length - 1];
    if (character) {
        for (let i = 0; i < character.length; i++) {
            output +=  String.fromCharCode(+character[i] + 96);
        }
    }

    return output;
};