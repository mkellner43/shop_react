import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Home from "./Home";
import Shop from "./components/Shop";
import AboutUs from "./components/AboutUs";
import storeItems from "./data";
import Cart from "./components/Cart/Cart";
import CartNotication from "./components/CartNotification";
import './style/App.scss';

const App = () => {
  const [cart, setCart] = useState([])
  const [notification, setNotification] = useState(false)

  const updateCart = (amount, id) => {
    if(amount <= 0) return null
    const item = storeItems.find(item => item.id === id)
    setCart(prevCart => {
      localStorage.setItem('cart', JSON.stringify([...prevCart, {item, amount}]))
      return [...prevCart, {item, amount}]
    })
    setNotification(true)
  }

  const deleteFromCart = (itemToDelete) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item !== itemToDelete)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }

  useEffect(() => {
    const notify = setTimeout(()=> {
      setNotification(false)
    }, 3500)

    return () => clearTimeout(notify)

  }, [cart])

  useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem('cart'))
    if(getCart) {
      setCart(getCart)
    }
  }, [])
    
  return (
    <section className="main">
      <HashRouter basename="/">
      <Nav />
      <CartNotication cart={cart} notification={notification}/>
      <Cart cart={cart} deleteFromCart={deleteFromCart} />
        <Routes >
          <Route path="/" element={<Home cart={cart}/>} />
          <Route  path="/shop" 
            element={
            <Shop 
              cart={cart}
              updateCart={updateCart}
            />} 
          />
          <Route path="/about-us" element={<AboutUs cart={cart}/>} />
        </Routes>
      </HashRouter>
    </section>

  );
};

export default App;