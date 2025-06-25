const promise = new Promise((resolve)=>{
    resolve(1)
})
promise.then((value)=>{
    console.log(value);
    return value+1;
}).then((value)=>{
    console.log(value);
    throw new Error("Something went wrong")

}).catch((error)=>{
    console.error(error.message)
})