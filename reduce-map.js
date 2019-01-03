module.exports = function arrayMap(arr, fn) {
      // SOLUTION GOES HERE

     let temp = [];
     let result = [];
     for(let i=0;i<arr.length;i++)
     {
     	temp.push(arr[i])
     	temp.push(arr[i+1])
     	result[i] = temp.reduce(fn)
     	temp.pop();
     	temp.pop();
     } 
     return result;
    }
    
