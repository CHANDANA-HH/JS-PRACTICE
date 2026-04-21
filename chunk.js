// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// Please solve it without using lodash's _.chunk function.


/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
   
     let res=[];
     for(let i=0;i<arr.length;i=i+size)
     {
        res.push(arr.slice(i,i+size))
     }
     return res
    
};
