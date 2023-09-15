var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2])
   .then(([result1, result2]) => {
     return result1 + result2;
   });
};