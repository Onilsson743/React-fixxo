import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ShoppingCartProduct from '../components/SmallComponents/ShoppingCartProduct'
import { useContext } from 'react'
import ProductContext from '../data/productContext'
import ShoppingCartDetails from '../components/SmallComponents/ShoppingCartDetails'

const ShoppingCart = () => {

  const shoppingCart = useContext(ProductContext).shoppingCart
  

  let TotalPrice = 0
  shoppingCart.map(item => TotalPrice = TotalPrice + item.price)
  
  

  return (
    <div>
        <Navbar />
        <div className='shopping-cart-section _container'>
          <div className='shopping-cart-products'>
            {
              shoppingCart.map(shoppingCart => <ShoppingCartProduct key={shoppingCart.articleNumber} item={shoppingCart} />)
            }          
          </div>
          <div>
            <ShoppingCartDetails price={TotalPrice}/>
          </div>
        </div>
    </div>
  )
}

export default ShoppingCart