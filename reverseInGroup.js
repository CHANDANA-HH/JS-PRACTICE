// Given an array arr[] of positive integers. Reverse every sub-array group of size k.
// Note: If at any instance, k is greater or equal to the array size, then reverse the entire array. 



class Solution {
    reverseInGroups(arr, k) {
        let n=arr.length;
        
        for(let i=0;i<n;i=i+k)
        {
            let left=i;
            let right =Math.min(i+k-1,n-1);
            
            while(left<right)
            {
                [arr[left],arr[right]] = [arr[right],arr[left]];
                left++;
                right--;
            }
            }
            return arr;
    }
}
