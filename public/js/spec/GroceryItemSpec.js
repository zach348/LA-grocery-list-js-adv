describe('GroceryItem', function() {
  describe('new GroceryItem()', function() {
    it('takes arguments for the name and quantity', function() {
      eggs = new GroceryItem('Eggs', 12);

      expect(eggs).toBeDefined();
      expect(eggs.name).toBe('Eggs');
      expect(eggs.quantity).toBe(12);
    });

    it('allows quantity to be an optional argument', function() {
      bread = new GroceryItem('Loaf of bread');

      expect(bread).toBeDefined();
      expect(bread.name).toBe('Loaf of bread');
      expect(bread.quantity).toBe(1);
    });
  });

  describe('toString()', function() {
    it('returns the string representation of the object', function() {
      bread = new GroceryItem('Loaf of bread');
      
      expect(bread.toString()).toBe('(1) Loaf of bread');
    });
  });
});
