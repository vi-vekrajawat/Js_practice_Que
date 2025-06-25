function sqaureChaining(n){
    return new Promise((resolve,reject)=>{
        if(n>0){
            resolve(n*n)
        }
    })
}

sqaureChaining(n).then((val)={
      return val
})