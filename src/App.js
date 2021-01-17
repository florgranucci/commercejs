import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from "./components";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  //get all products
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  
  //to get the cart object
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve()) 
  }

  //to add items to the cart
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);




  return (
    <Router>
    <div>
      <Navbar totalItems={cart.total_items}/>
      
        <Route exact path='/' render={() => <Products products={products} onAddToCart={handleAddToCart}/>} />
        <Route exact path='/cart' render={() => <Cart cart={cart}/>} />
      
    </div>
    </Router>
  );
};

export default App;
