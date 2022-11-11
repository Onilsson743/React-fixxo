import React, { useContext, useState } from 'react'

const ShoppingCartProduct = ({item}) => {
  console.log(item)

  const [number, setNumber] = useState(0);
  const increase = (e) => {
    e.preventDefault();
    setNumber(number + 1)

  }
  const decrease = (e) => {
    e.preventDefault();
    if (number > 0)
      setNumber(number - 1)

  }
  
  return (
    <>
      <section className='shopping-cart-product'>
        <div className='image-window'>
          <img src={item.imageName} />
        </div>
        <div className='description'>
          <div>
            <h5>{item.name}</h5>
            <p>Size: Medium</p>
            <p>Color: Black</p>
          </div>
          <div>
            <p>Quantity</p>
            <div>
              <button onClick={decrease}>-</button>
              <span>{number}</span>
              <button onClick={increase}>+</button>
            </div>
            <p>Price: {}</p>
          </div>

        </div>
      </section>
    </>
  )
}

export default ShoppingCartProduct