## Instructions

In this challenge, you will build a Grocery List app utilizing HTML and JavaScript.

### Getting Set Up

```no-highlight
$ et get grocery-list-js
$ cd grocery-list-js
$ bundle
$ ruby app.rb
```

Open the following link in the browser <http://localhost:4567/js-specs.html>.

You will see a number of failing tests in your browser. Write code to make the
test suite pass.

![GroceryList.js Jasmine Specs](https://s3.amazonaws.com/horizon-production/images/grocery-list-js-specs.png)

## Meeting Expectations Requirements

* Edit the `public/js/GroceryItem.js` and `public/js/GroceryList.js` files to make the test suite green.
* **DO NOT** modify the code in the `public/js/spec` folder.
* All tests must pass.

### Tips

* Focus on one failing test at a time, starting from the top, and working down.
* Look at how the test is calling your JavaScript classes. The failing tests will
  tell you which file and line number to look at.
* **DO NOT** start the requirements necessary to Exceed Expectations until you
  have completed the requirements necessary to Meet Expectations.

## Exceeding Expectations Requirements

![GroceryList.js DOM](https://s3.amazonaws.com/horizon-production/images/grocery-list-js-dom.png)

Write JavaScript code to create a grocery list and insert it into the DOM.

Open the following link in the browser <http://localhost:4567/index.html>. Take
a look at the `public/index.html` and `public/js/main.js` files. You will be
adding code to `public/js/main.js` to build a grocery list, and adding it to
the DOM.

Your app must satisfy the following requirements:

* Create (at least) three `GroceryItem`s.
* Add the grocery items to a `GroceryList`.
* Insert the HTML representation of the `GroceryList` into the main div on the page.
