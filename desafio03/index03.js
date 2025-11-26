class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    subtotal() {
      return this.price * this.quantity; // Product é o especialista dessa informação
    }
  }
  
  class Cart {
    constructor(products) {
      this.products = products;
    }
  
    total() {
      return this.products.reduce((sum, product) => sum + product.subtotal(), 0);
    }
  }
  
  // Uso
  const cart = new Cart([
    new Product("Açaí", 12, 2),
    new Product("Pizza", 30, 1),
  ]);
  
  console.log("Total:", cart.total());
  