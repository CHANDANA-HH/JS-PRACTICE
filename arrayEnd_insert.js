//Given an array arr that is not completely filled and a value val, you have to insert the value at the end of the array.

class Solution {
    insertAtEnd(arr, val) {
        // code here
        let n=arr.length;
        arr[n]=val;
        return arr;
    }
}
