// Promise.all([
//     Promise.resolve("Task 1 completed"),
//     Promise.resolve("Task 2 completed"),
//     Promise.resolve("Task 3 failed")
// ])
//     .then((results) => console.log(results))
//     .catch((error) => console.error(error));


// Promise.all([
//     Promise.resolve("Task 1 completed"),
//     Promise.resolve("Task 2 completed"),
//     Promise.reject("Task 3 failed")
// ])
//     .then((results) => console.log(results))
//     .catch((error) => console.error(error));



p1 = Promise.resolve(50);
p2 = 200
p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'geek');
});

Promise.all([p1, p2, p3]).then(function (values) {
    console.log(values);
});