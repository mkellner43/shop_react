import Card from '../Card';
import storeItems from '../../data';
import { motion } from 'framer-motion';

import './style.scss';

const Shop = ({updateCart}) => {
  const generateCards = () => {
    return storeItems.map(item => 
    <Card
      key={item.id}
      id={item.id}
      img={item.image}
      title={item.name}
      price={item.price}
      description={item.description}
      updateCart={updateCart}
    />)
  }
  return (
    <motion.section animate={{opacity: [0, 1]}} className="shop">
      <div className='shop--cards'>
        {generateCards()}
      </div>
    </motion.section>
  )
}

export default Shop;