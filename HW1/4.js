var createCounter = function(init) {
    let current = init;
      return{
        increment(){
          current = current+1;
          return current;
        },
        decrement(){
           current = current-1;
          return current;
        },
        reset(){
          current = init;
          return current;
        }
      }
  };