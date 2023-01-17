//3. Longest Substring Without Repeating Characters

/*
To Solve this problem we need to have two pointers that both start at 0 index, or the  first char of the given
string, and an empty set also a var for the longestSubstringLength We start looping over the string chars and
check if the char is not in our set we add it to the set then we move the right pointer, increasing the sliding window, get
the max between longestSubstringLength, which is intialized as 0 and our chars set size or length, and so on untill 
we find a char existed in the list, if so we delete the first char in our set then we increase the left pointer to start
from the next Letter
 */
 
const lengthOfLongestSubstring = (string) => {
	// Left and right pointers
    let left = 0;
    let right = 0;
	// Longest Sub and our empty Set
    let longestSub = 0;
    let charsSet = new Set();

    while(right < string.length) {
		// The set doesn't contain the char
        if(!charsSet.has(string[right])) {
            charsSet.add(string[right]);
            longestSub = Math.max(longestSub, charsSet.size);
            right++;

        } else {
		// The char is found in our set
            charsSet.delete(string[left]);
            left++;
        }
    }   
    return longestSub;
}