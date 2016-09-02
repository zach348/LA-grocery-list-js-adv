// your GroceryItem code, here
var GroceryItem = function(name, quantity){
    this.name = name;
    this.quantity = quantity || 1;;
}

GroceryItem.prototype.toString = function(){
  return "(" + this.quantity + ") " + this.name;
}
