Promise.resolve(1)
  .then(value => {
    console.log(value);
    return Promise.resolve(2);
  })
  .then(value => console.log(value));