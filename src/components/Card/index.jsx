import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import './Card.scss'

const Card = ({id, img, title, price, description, updateCart}) => {
  const [value, setValue] = useState(0)
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleChangeUp = () => {
    setValue(prevState => {
      if(value <= 9){
        return prevState + 1
      }
      return prevState
    });
  }

  const handleChangeDown = () => {
    setValue(prevState => {
      if(value > 0){
        return prevState - 1
      }
      return prevState
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(value === "0"){
      return null
    } else {
      updateCart(value, id)
      setValue(0)
    }
  }
  return (
    <div className="card">
      <div className='image-container'>
        <img src={img} alt={title}></img>
      </div>
      <h3>{title}</h3>
      <p>{formatter.format(price)}</p>
      <p>{description}</p>
      <div className="card--btns">
        <form onSubmit={handleSubmit} value={value}>
          <div className='number-change'>
          <div className='plus' onClick={handleChangeDown}>
            <FontAwesomeIcon icon={faCircleMinus} className="fa-lg"/>
          </div>
          <input type="number" value={value} readOnly={true}/>
          <div className='minus' onClick={handleChangeUp}>
            <FontAwesomeIcon icon={faCirclePlus} className="fa-lg"/>
          </div>
          </div>
          <button>Add to Cart</button>
        </form>
      </div>
    </div>
  )
}

export default Card;