// Find the Index of the First Occurrence in a String




const strStr = function (haystack, needle) {
    const base = 256
    const prime = 1439173969
    if (needle === '') {
      return 0
    }
    let hashNeedle = 0
    const magic = (base ** (needle.length - 1)) % prime
    const product = prime * base
    for (const c of needle) {
      hashNeedle = (hashNeedle * base + c.charCodeAt(0)) % prime
    }
    const isEqual = i => needle === haystack.slice(i, i + needle.length)
    let hash = 0
    for (let i = 0; i <= haystack.length - needle.length; i++) {
      if (i === 0) {
        for (let j = 0; j < needle.length; j++) {
          hash = (hash * base + haystack[j].charCodeAt(0)) % prime
        }
      } else {
        hash = (hash - haystack[i - 1].charCodeAt(0) * magic + product) % prime
        hash = (hash * base + haystack[i + needle.length - 1].charCodeAt(0)) % prime
      }
      if (hash === hashNeedle && isEqual(i)) {
        return i
      }
    }
    return -1
  }