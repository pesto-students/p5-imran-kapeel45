const addArgs = (...args) => {
    console.log("Long time..");
    return args.reduce((a,b) => a+b,0)
};

console.log(addArgs(10,2));
console.log(addArgs(10,2));
console.log(addArgs(10,2));
console.log(addArgs(10,2));


console.log("With Cache..");

const memoizedAdd = fn => {
    const cache = {};
    return (...args) =>{
        const n = JSON.stringify(args);
        if(n in cache){
            return cache[n];
        }
        return cache[n]= fn(...args); 
    };
};


const memoAdd = memoizedAdd(addArgs);

console.log(memoAdd(10,2));
console.log(memoAdd(10,2));
console.log(memoAdd(10,2));
console.log(memoAdd(10,2));