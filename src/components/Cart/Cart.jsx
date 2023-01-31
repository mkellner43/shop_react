import React, { useState, useEffect } from "react";
import './style.scss';

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
        <div className="cart-item" key={`${cartItem.item.id}${i}`}>
          <p>{cartItem.amount}</p>
          <img src={cartItem.item.image} alt={cartItem.item.name}/>
          <div>
            <p>{cartItem.item.name}</p>
            <p>{cartItem.item.price}</p>
          </div>
          <i className="fa-solid fa-xmark delete-cart-item" onClick={() => deleteFromCart(cartItem)}></i>
        </div>
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
  
  return (
    display ? 
    <section className="cart">
      <i className="fa-solid fa-circle-xmark close-cart" onClick={handleClick}></i>
      {cart.length !== 0 ? cartDisplay() : <p>Cart is empty!</p>}
      <button onClick={() => alert('not set up yet')}>Check Out</button>
    </section>
    :
    <i className="fa-solid fa-cart-shopping fa-xl cart-icon" onClick={handleClick}>
      <p className="cart--number">{ cartNumber }</p>
    </i>
  )
}

export default Cart;