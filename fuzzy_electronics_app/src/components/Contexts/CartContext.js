import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';


const CartContext = createContext();

export function CartProvider({ children }) {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const storedProductsList = localStorage.getItem('cart');
    if (storedProductsList) {
      const productsData = JSON.parse(storedProductsList);
      setProductsList((prevList) => {
        return [...prevList, ...productsData]
      });
    }
  }, []);


  const addProduct = (newProduct) => {
    setProductsList((prevList) => {
      const updatedList = [...prevList];
      let productExists = false;
  
      for (let i = 0; i < updatedList.length; i++) {
        if (updatedList[i].product.makatMorLevi === newProduct.makatMorLevi) {
          // If the product with the same makatMorLevi already exists, update its amount
          updatedList[i].amount += 1;
          productExists = true;
          break; // Exit the loop since the product was found and updated
        }
      }
  
      if (!productExists) {
        // If the product doesn't exist in the cart, add it as a new object
        updatedList.push({ amount: 1, product: newProduct });
      }
  
      localStorage.setItem('cart', JSON.stringify(updatedList));
      return updatedList; // Update the state after setting localStorage
    });
  };


  const removeProduct = (makatMorLevi) => {
    setProductsList((prevList) => {
      const updatedList = prevList.map((product) => {
        if (product.product.makatMorLevi === makatMorLevi) {
          // Decrease the amount by 1, but ensure it's at least 1
          const newAmount = Math.max(product.amount - 1, 1);
          return { ...product, amount: newAmount };
        }
        return product;
      });
  
      // Filter out products with amount === 0 (optional)
      const filteredList = updatedList.filter((product) => product.amount > 0);
  
      localStorage.setItem('cart', JSON.stringify(filteredList));
      return filteredList; // Update the state after setting localStorage
    });
  };


  const getCart = () => {
    const storedProductsList = localStorage.getItem('cart');
    const productsData = JSON.parse(storedProductsList);
    return productsData;
  }

  return (
    <CartContext.Provider value={{ productsList, setProductsList, addProduct, getCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}