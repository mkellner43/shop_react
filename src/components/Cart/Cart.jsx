import React, { useState, useEffect } from "react";
import './style.scss';
import { motion, AnimatePresence } from "framer-motion";

const Cart = ({cart, deleteFromCart}) => {
  const [display, setDisplay] = useState(false)
  const [cartNumber, setCartNumber] = useState(0)

  const handleClick = () => {
    setDisplay(prevDisplay => !prevDisplay)
  }
  const cartDisplay = () => {
    const modifiableCart = cart
    const cartItems = modifiableCart.map((cartItem, i) => {
      return (
        <motion.div className="cart-item" key={`${cartItem.item.id}${i}`}>
          <p>{cartItem.amount}</p>
          <img src={cartItem.item.image} alt={cartItem.item.name}/>
          <div>
            <p>{cartItem.item.name}</p>
            <p>{cartItem.item.price}</p>
          </div>
          <motion.i 
            className="fa-solid fa-xmark delete-cart-item" 
            onClick={() => deleteFromCart(cartItem)}/>
        </motion.div>
      )
    })
    return <div className="cart-items">{cartItems}</div>
  }

  useEffect(() => {
    let modCart = cart
    setCartNumber(() => 
      modCart.length > 0 ? modCart.map(item => Number(item.amount)).reduce(
        (prev, current) => prev + current
      ) : 0
    )
  }, [cart])

  const variant = {
    initial: {
      y: -500
    },
    animate: {
      y: 0
    },
    exit: {
      y: -500,
      transition: {
        duration: 1
      }
    }
  }
   const var2 = {
    initial: {
      y: -100
    },
    animate: {
      y: 0
    },
    exit: {
      y: -100,
    }
   }
  return (
    <>
    <AnimatePresence>
    {display &&
      <motion.section className="cart"
      variants={variant}
      initial='initial'
      animate='animate'
      exit='exit'
      >
        <motion.i whileTap={{scale: 0.9}} whileHover={{scale: 1.05}} className="fa-solid fa-circle-xmark close-cart" onClick={handleClick}></motion.i>
        {cart.length !== 0 ? cartDisplay() : <p style={{textAlign: 'center'}}>Cart is empty!</p>}
        <motion.button whileTap={{scale: 0.9}} whileHover={{scale: 1.02}} onClick={() => alert('not set up yet')}>Check Out</motion.button>
      </motion.section>
    }
    </AnimatePresence>
    <AnimatePresence>
      {!display &&
        <motion.i 
        variants={var2}
        initial='initial'
        animate='animate'
        exit='exit'
        whileTap={{scale: 0.9}}
        whileHover={{scale: 1.05}} 
        className="fa-solid fa-cart-shopping fa-xl cart-icon"
        onClick={handleClick}
        >
          <p className="cart--number">{ cartNumber }</p>
        </motion.i>
      }
    </AnimatePresence>
      </>
  )
}

export default Cart;