// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let i=s.length-1;
    let count=0;
    
        if(s[i]===' ')
        {
            while(s[i]===' ')
        {
            i--;
        }
        }

        while(s[i]!==' ' && i>=0)
        {
            count++;
            i--;
        }

        return count
    
    
};
