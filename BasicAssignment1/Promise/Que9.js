function square(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(n%2==0){
            resolve("task completed and square is : "+(n*n));
        }
      else{
            reject("task rejected")
        }
    },2000)
      
     
    })
}
square(6).then((msg)=>{
    console.log("task completed")
    console.log(msg)

}).catch((error)=>{
    console.log("not completed")
    console.log(error)
});
