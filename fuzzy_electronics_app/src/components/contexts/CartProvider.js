import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const storedProducts = localStorage.getItem('products');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Check for initial authentication status here
    const storageProducts = storedProducts ? JSON.parse(storedProducts) : null;
    if (storageProducts) {
      setProducts(storageProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products])

  const addProduct = (product) => {
    console.log(product.makatMorLevi)
    const existingProductIndex = products.findIndex(item => item.product.makatMorLevi === product.makatMorLevi);

    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      const updatedProducts = products.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setProducts(updatedProducts);
    } else {
      // If the product doesn't exist, add it to the products array with quantity 1
      setProducts(prevProducts => [...prevProducts, { product: product, quantity: 1 }]);
    }

  };

  const removeProduct = (product) => {
    const existingProductIndex = products.findIndex(item => item.product.makatMorLevi === product.makatMorLevi);
  
    if (existingProductIndex !== -1) {
      // Get the product and its quantity
      const existingProduct = products[existingProductIndex];
      const updatedQuantity = existingProduct.quantity - 1;
  
      if (updatedQuantity >= 1) {
        // If quantity > 1, update the quantity of the existing product
        const updatedProducts = products.map((item, index) => {
          if (index === existingProductIndex) {
            return { ...item, quantity: updatedQuantity };
          }
          return item;
        });
  
        setProducts(updatedProducts);
      } else {
        // If quantity is 1, remove the product from the list
        const updatedProducts = products.filter(item => item.product.makatMorLevi !== product.makatMorLevi);
        setProducts(updatedProducts);
      }
    }
  };


  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };