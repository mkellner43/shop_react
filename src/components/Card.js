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
          <input type="number" min='0' max='10' value={value} onChange={handleChange}/>
          <button>Add to Cart</button>
        </form>
      </div>
    </div>
  )
}

export default Card;