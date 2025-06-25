// let checkEven = new Promise((resolve, reject) => {
//     let number = 4;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });
// checkEven
//     .then((message) => console.log(message)) // On success
//     .catch((error) => console.error(error)); // On failure

let checkEven = new Promise((singh,vivek)=>{
    let number = 8;
    if(number%2==0){
        singh("The number is even !")
    }
    else{
        vivek("The number is odd !")
    }
})
checkEven
.then((message)=>console.log("success"))
.catch((error)=>console.log("failed"))