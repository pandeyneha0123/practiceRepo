// greatest common divisior of Sstring


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1.length>str2.length)
        return gcdOfStrings(str2,str1);
    for(let i=str1.length;i>0;i--){
        let reg=new RegExp(`^(${str1.substring(0,i)})*$`);
        if(reg.test(str1)&&reg.test(str2))
            return str1.substring(0,i);
    }
    return '';
    
};