function sum(a,b){
    return new Promise((resolve,reject)=>{
        if(a>0&&b>0)
        resolve(a+b)
    else{
        reject("not completed")
    }
    })
}

sum(3,-5).then((sms)=>{
    console.log(sms)
}).catch((err)=>{
    console.log(err)
})