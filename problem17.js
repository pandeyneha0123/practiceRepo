// Restore IP Addresses
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(s.length>12 || s.length <4) return []

    let res = []

    let iterate = (arr,temp) =>{

        if(temp.length > 4) return;

        if(arr.length ==0 && temp.length == 4){
            res.push(temp.join('.'))
            return;
        }

        for(let i =1; i<4; i++){
            if(arr.length < i) break;
            let value = arr.slice(0,i);
            if((value.length>1 && value[0]== "0") || +value >255) break;
            iterate(arr.slice(i),[...temp,value])
        }
    }

    iterate(s,[])
    return res;
}