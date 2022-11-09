import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ShoppingCartProduct from '../components/SmallComponents/ShoppingCartProduct'
import { useContext } from 'react'
import ProductContext from '../data/productContext'

const ShoppingCart = () => {

  const shoppingCart = useContext(ProductContext).shoppingCart
  

  let TotalPrice = 0
  shoppingCart.map(item => TotalPrice = TotalPrice + item.price)
  console.log(TotalPrice)
  

  return (
    <div>
        <Navbar />
        <div className='shopping-cart-section _container'>
          {
            shoppingCart.map(shoppingCart => <ShoppingCartProduct key={shoppingCart.articleNumber} item={shoppingCart} />)
          }

          <div>
            
          </div>
        </div>

        
    </div>
  )
}

export default ShoppingCart