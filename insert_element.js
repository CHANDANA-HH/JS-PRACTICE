//You are given an array arr(0-based index) and two positive integer index and val. You need to insert an val at given index.

class Solution {
    insertAtIndex(arr, index, val) {
        // code here
        arr.length=arr.length+1;
        
        for(let i=arr.length-1;i>index;i--)
        {
            arr[i]=arr[i-1];
        }
        
        arr[index]=val;
        
        return arr;
    }
}
