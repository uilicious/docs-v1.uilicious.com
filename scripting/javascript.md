# Using Javascript in Tests

UI-licious is built on Javascript, so you can go crazy with variables, functions, loops and conditionals!

You can use this to build more complex tests.

```javascript
// function to click on a button for n times.
function clickNext(n){
  for(var i = 0; i < n; i++){
    I.click(“Next”);
  }
}

// click on the "Next" button 10 times;
clickNext(10);

```