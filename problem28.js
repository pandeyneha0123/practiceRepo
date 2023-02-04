// valid parantesis

const isValid = s => {
    const hashmap = {
        "}" : "{",
        "]" : "[",
        ")" : "("
    }
    const stack = []
    for(c of s) {
        if(stack.length && hashmap[c] === stack[stack.length - 1]) stack.pop()
        else stack.push(c)
    }
    return !stack.length
};