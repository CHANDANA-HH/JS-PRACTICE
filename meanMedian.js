// Given an array of positive integer arr[]. Find the mean and median of the array. 
// Where mean is the average value of the given array, median is the average of the two middle elements.

// Note: Return the floor value of mean and median.


class Solution {
    mean(arr) {
        // code here
        let sum=0
        for(let i of arr)
        {
            sum=sum+i;   
        }
        let ans = Math.floor(sum/arr.length);
        return ans;
    }

    median(arr) {
        
        // code here
        arr.sort((a,b)=>a-b);
        
        if(arr.length%2===0)
        {
            let a = arr[(arr.length/2)-1];
            let b = arr[arr.length/2]
            let ans = Math.floor((a+b)/2);
            
            return ans;
        }
        else if(arr.length%2!==0)
        {
            return arr[Math.floor(arr.length/2)];
        }
    }
}
