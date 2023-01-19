// string to Integer

function myAtoi(s) {
    const maxRange = 2147483647;
    const minRange = -2147483648;
    const result = parseInt(s,10);
    
    switch(true) {
        case isNaN(result):
            return 0;
        case result > maxRange:
            return maxRange;
        case result < minRange:
            return minRange;
        default:
            return result;
    };
};