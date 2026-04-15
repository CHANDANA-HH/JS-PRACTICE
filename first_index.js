// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   

    for(let i=0;i<haystack.length;i++)
    {
        let dup = haystack;
        let j = needle.length;
        const str = dup.slice(i,i+j)
        if(str===needle)
        {
            return i;
        }
    }
    return -1;
    
};
