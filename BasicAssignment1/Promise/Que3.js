const Promise1 = new Promise((resolve,reject)=>{
    reject(Error('Error Message'))
})
Promise1.catch(error=>console.log(error.message));
Promise1.catch(error=>console.log(error.message))
Promise1.catch(error=>console.log(error.message))
Promise1.catch(error=>console.log(error.message))
Promise1.catch(error=>console.log(error.message))