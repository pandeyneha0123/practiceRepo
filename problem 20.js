// Verifying an Alien Dictionary
function isAlienSorted(words, alphabet) {
    const map = {};

    for (let i = 0; i < alphabet.length; i++) {
        map[alphabet[i]] = i + 1;
    }

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if(j >= words[i + 1].length) {
                return false;
            }

            if(words[i][j] === words[i + 1][j]) {
                continue;
            }

            if(map[words[i][j]] > map[words[i + 1][j]]) {
                return false;
            }

            break;
        }
    }

    return true;
}