/* A promise is an object that holds the eventual 
result of an asynchronous operation. when the asynchronous
operation is completed, it can either result in a value
or an error.a promise promisses you it will give you the result 
of an asynchronous operation.this object can be in 
one of 3 states. initially, when we create a promise object
,it will be in the pending state.at this point, it will 
kick off some async operation, when the results are ready,
the promise can either be fulfilled(resolvod) which means
the async operation completed successfully.otherwise, if
something went wrong during the execution of async operation,
our promise will be in rejected state.
*/
const p = new Promise((resolve,reject) => {
    //Kick off some async work
    //...
   setTimeout(() => {
       //resolve(1); // pending => resolved(fulfilled)
       reject(new Error('message')); // pending => rejected
   },2000);
});

p
    .then(result => console.log('Result' , result))
    .catch(err => console.log('Error',err.message));
     