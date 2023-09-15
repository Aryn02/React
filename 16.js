var sortBy = function(arr, fn) {
    return arr.sort((a, b) => {
   const aValue = fn(a);
   const bValue = fn(b);
   return aValue - bValue; // Sort in ascending order based on the values returned by fn
 }); 
};