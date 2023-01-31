import Card from '../Card';
import storeItems from '../../data';
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
    <section className="shop">
      <div className='shop--cards'>
        {generateCards()}
      </div>
    </section>
  )
}

export default Shop;