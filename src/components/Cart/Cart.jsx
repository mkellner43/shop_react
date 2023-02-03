import React, { useState, useEffect, useRef } from "react";
import './style.scss';
import { motion, AnimatePresence } from "framer-motion";

const Cart = ({cart, deleteFromCart}) => {
  const [display, setDisplay] = useState(false)
  const [cartNumber, setCartNumber] = useState(0)
  const cartUI = useRef(null)
  const cartIcon = useRef(null)
  const closeCart = useRef(null)

  const variant = {
    initial: {
      y: -500
    },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5
      }
    },
    exit: {
      y: -500,
      transition: {
        staggerChildren: 0.15,
      }
    }
  }
  const var3 = {
    initial: {
      y: -500,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .75
      }
    },
    exit: {
      y: -500,
      opacity: 0
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

  const handleOpen = () => {
    setDisplay(true)
  }
  const handleClose = () => {
    setDisplay(false)
  }
  const cartDisplay = () => {
    const modifiableCart = cart
    const cartItems = modifiableCart.map((cartItem, i) => {
      return (
        <div className="cart-item" key={`${cartItem.item.id}${i}`}>
          <p>{cartItem.amount}</p>
          <img src={cartItem.item.image} alt={cartItem.item.name}/>
          <div>
            <p>{cartItem.item.name}</p>
            <p>{cartItem.item.price}</p>
          </div>
          <i 
            className="fa-solid fa-xmark delete-cart-item" 
            onClick={() => deleteFromCart(cartItem)} />
        </div>
      )
    })
    return <motion.div
        variants={var3}
        className="cart-items"
      >
        {cartItems}
      </motion.div>
  }

  useEffect(() => {
    setCartNumber(cart.length > 0 ? 
      cart.map(item => Number(item.amount))
      .reduce((prev, current) => prev + current): 0 )
  }, [cart])

  useEffect(() => {
    const hideCart = e => {
      if((cartIcon.current && cartIcon.current.contains(e.target)) ||
         e.target.className === 'fa-solid fa-xmark delete-cart-item') return
      if((cartUI.current && !cartUI.current.contains(e.target)) ||
         e.target === closeCart) return setDisplay(false);
    }
    document.addEventListener('click', hideCart)
    return () => document.removeEventListener('click', hideCart)
  }, [])

  return (
    <>
    <AnimatePresence>
    {display &&
      <motion.section className="cart"
      variants={variant}
      initial='initial'
      animate='animate'
      exit='exit'
      ref={cartUI}
      >
        <motion.i ref={closeCart} whileTap={{scale: 0.9}} whileHover={{scale: 1.05}} className="fa-solid fa-circle-xmark close-cart" onClick={handleClose}></motion.i>
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
        className="fa-solid fa-cart-shopping cart-icon"
        ref={cartIcon}
        onClick={handleOpen}
        >
          <p className="cart--number">{ cartNumber }</p>
        </motion.i>
      }
    </AnimatePresence>
      </>
  )
}

export default Cart;