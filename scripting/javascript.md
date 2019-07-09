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

### Using conditionals with assertion commands

All assertion commands return `true` or `false`, which you can combine it with `if...else...` conditional statements to handle more complex scenarios, e.g.:

```javascript
if(I.see$("In stock")){
  I.click("Add to cart")
}
```

In the example above, the test will only click on "Add to cart" if the text "In stock" is visible on the page. 

Here's another example:

```javascript
if(I.see$(".promo-banner")){
  I.click("Close")
}
```
 
This test performs a check to see if the element with the "promo-banner" class appears, and then clicks on the "Close" button to dismiss it.

Note that in both examples, we use `I.see$` instead of `I.see`. Adding the $ behind `I.see` will suppress the error that will normally be thrown if the element is not visible on the page. This works on any command. 