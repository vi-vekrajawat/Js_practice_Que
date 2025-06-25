function task(){
    return new Promise((resolve,reject)=>{
        reject()
    })
}

let taskPerform = task()
taskPerform.then(function(){
    console.log("success 1")
})
.then(function(){
    console.log("success 2")
})
.then(function(){
    console.log("success 3")
})
.catch(function(){
    console.log("Error 1")
})
.then(function(){
    console.log("Success 4")
})
.then(function(){
    console.log("Success 5")
})
.then(function(){
    console.log("Success 6")
})
.catch(function(){
    console.log("Error 2")
})
.catch(function(){
    console.log("Error 3")
})