// Define product data
const products = [
    {
      name: "realme narzo 50i ",
      price: 10.99,
      image: "https://m.media-amazon.com/images/I/81QqVNKWtML._SX679_.jpg"
    },
    {
      name: "Samsung Galaxy S23 Ultra 5G",
      price: 19.99,
      image: "https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg"
    },
    {
      name: "OnePlus Nord CE 3 Lite 5G",
      price: 233.00,
      image: "https://m.media-amazon.com/images/I/41NOKPCVM7L._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      name: "Redmi 12C (Matte Black, 4GB RAM, 64GB Storage)",
      price: 130.00,
      image: "https://m.media-amazon.com/images/I/81guvfQzeVL._SX679_.jpg"
    },
    // Add more products...
  ];
  
  // Render products on the page
  const productsSection = document.getElementById("products");
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
  
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productElement.appendChild(productImage);
  
    const productName = document.createElement("h3");
    productName.innerText = product.name;
    productElement.appendChild(productName);
  
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    productElement.appendChild(productPrice);
  
    const addToCartButton = document.createElement("button");
    addToCartButton.innerText = "Add to Cart";
    addToCartButton.addEventListener("click", () => {
      addToCart(product);
    });
    productElement.appendChild(addToCartButton);
  
    productsSection.appendChild(productElement);
  });
  
  // Add a product to the cart
  function addToCart(product) {
    const cartItems = document.getElementById("cart-items");
    const cartItem = document.createElement("li");
    cartItem.innerText = product.name + " - $" + product.price;
    cartItems.appendChild(cartItem);
  }