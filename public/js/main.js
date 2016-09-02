(function() {
  // build grocery list and insert into DOM, here
  let kale;
  let oliveOil;
  let twinkies;
  let list;
  let displayList;

  kale = new GroceryItem("kale", 4);
  oliveOil = new GroceryItem("olive oil");
  twinkies = new GroceryItem("twinkies");
  myList = new GroceryList("random", "9/2/16");

  myList.addItem(kale, oliveOil, twinkies);

  //jQuery selectors were not working
  displayList = function(list){
    document.getElementById('main').innerHTML = list.toHTML();
  }

  displayList(myList);

})();
