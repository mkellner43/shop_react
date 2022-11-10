const CartNotication = ({cart, notification}) => {
  
  const getItem = cart[cart.length - 1]
  return (
    notification ?
      <div className='notification'>
        <p>
          {getItem.amount} {getItem.item.name}{getItem.amount > 1 ? "'s" : null} added to cart!
        </p>
      </div>
    :
    null
    )
} 

export default CartNotication;