const promise1 = new Promise(resolve => setTimeout(resolve, 100, 'One'));
const promise2 = new Promise(resolve => setTimeout(resolve, 200, 'Two'));

Promise.race([promise1, promise2])
  .then(value => console.log(value))
  .catch(error => console.error(error));