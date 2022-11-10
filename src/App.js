import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Home from "./Home";
import Shop from "./components/Shop";
import AboutUs from "./components/AboutUs";
import storeItems from "./data";
import Cart from "./components/Cart";
import CartNotication from "./components/CartNotification";

const App = () => {
  const [cart, setCart] = useState([])
  const [notification, setNotification] = useState(false)

  const updateCart = (amount, id) => {
    const item = storeItems.find(item => item.id === id)
    setCart(prevCart => [...prevCart, {item, amount}])
    setNotification(true)
  }

  const deleteFromCart = (itemToDelete) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item !== itemToDelete)
      return newCart
    })
  }

  useEffect(() => {
    const notify = setTimeout(()=> {
      setNotification(false)
    }, 3500)

    return () => clearTimeout(notify)

  }, [cart])

    
  return (
    <section className="main">
      <BrowserRouter>
      <Nav />
      <CartNotication cart={cart} notification={notification}/>
      <Cart cart={cart} deleteFromCart={deleteFromCart} />
        <Routes>
          <Route path="/" element={<Home cart={cart}/>} />
          <Route path="/shop" 
            element={
            <Shop 
              cart={cart}
              updateCart={updateCart}
              // deleteFromCart={deleteFromCart}
            />} 
          />
          <Route path="/about-us" element={<AboutUs cart={cart}/>} />
        </Routes>
      </BrowserRouter>
    </section>

  );
};

export default App;