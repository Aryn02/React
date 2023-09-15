var compose = function(functions) {
	return function(x) {
        if(functions.length == 0){
            return x;
        }else {
            let ans = functions[functions.length - 1](x);
            for(let i = functions.length - 2; i >= 0; i--){
                // functions[i] = functions[i](functions[i+1]);
                ans = functions[i](ans);
            }
            return ans;
        }
    }
};