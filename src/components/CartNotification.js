import { AnimatePresence, motion } from "framer-motion"

const CartNotication = ({cart, notification}) => {
  
  const getItem = cart[cart.length - 1]
  return (
    <AnimatePresence>

    {notification ?
      <motion.div className='notification'
      initial={{y: -100, opacity: 0}}
      animate={{y: 0, opacity: 1, transition: {duration: 1}}}
      exit={{y: -100, opacity: 0, transition: {duration: 1}}}
      >
        <p>
          {getItem?.amount} {getItem?.item.name}{getItem?.amount > 1 ? "'s" : null} added to cart!
        </p>
      </motion.div>
    :
    null}
    </AnimatePresence>
    )
} 

export default CartNotication;