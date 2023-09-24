var createCounter = function(n) {
    return function() {
        let m = n;
        n = n+1;
        return m;
    };
};