// your GroceryList code, here
var GroceryList = function(storeName, date){
  this.title = storeName;
  this.date = date;
  this.items = [];
}

GroceryList.prototype.addItem = function(item){
  this.items.push(item);
}

GroceryList.prototype.toHTML = function(){
  let output = [];
  output.push('<h1>' + this.title + "</h1>");
  output.push('<h3>' + this.date + '</h3>');
  output.push('<ul>');
  for(let item of this.items){
    output.push('<li>' + item.toString() + '</li>');
  }
  output.push('</ul>');
  return output.join('\n');
}
