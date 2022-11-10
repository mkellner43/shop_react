import Card from './Card';
import storeItems from '../data';

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
      <h1 className="shop--title">Shop</h1>
      <div className='shop--cards'>
        {generateCards()}
      </div>
    </section>
  )
}

export default Shop;