//Testing out the async function with "foo" console.log
(async function() {
   console.log('foo');
 }());

//Reading the async.js file and the previous coding assignment the time.
//Using the console.log calling out the new Date and then using the function wait seconds.

console.log('Console log before calling wait:', new Date());

//Applying the same results from the assignment now lets try with the async function call.

(async function() {
  var foo = await wait(3);
  console.log('Console log after three seconds:', foo);
  var bar = await wait(1);
  console.log('Console log after one second:', bar);
  var baz = await wait(5);
  console.log('Console log after five seconds:', baz);
}());

console.log('Console log after calling wait:', new Date());
