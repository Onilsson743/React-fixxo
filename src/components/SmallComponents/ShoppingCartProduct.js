import React, { useContext, useState } from 'react'
import ProductContext from '../../data/productContext'

const ShoppingCartProduct = ({item}) => {
  console.log(item)

  const increaseQuantity = useContext(ProductContext).increaseQuantity
  const decreaseQuantity = useContext(ProductContext).decreaseQuantity

  const increase = () => {
    increaseQuantity(item)
  }
  const decrease = () => {
    decreaseQuantity(item)
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
              <span>{item.quantity}</span>
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