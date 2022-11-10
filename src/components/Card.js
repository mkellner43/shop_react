import React, {useState} from 'react';

const Card = ({id, img, title, price, description, updateCart}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const [value, setValue] = useState("0")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(value === "0"){
      return null
    } else {
      updateCart(value, id)
      setValue("0")
    }
  }
  return (
    <div className="card">
      <img src={img} alt={title}></img>
      <h3>{title}</h3>
      <p>{formatter.format(price)}</p>
      <p>{description}</p>
      <div className="card--btns">
        <form onSubmit={handleSubmit} value={value}>
          <select onChange={handleChange} value={value}>
            <option value="0">Choose Amount</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button>Add to Cart</button>
        </form>
      </div>
    </div>
  )
}

export default Card;