import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ShoppingCartProduct from '../components/SmallComponents/ShoppingCartProduct'
import { useContext } from 'react'
import ProductContext from '../data/productContext'
import ShoppingCartDetails from '../components/SmallComponents/ShoppingCartDetails'

const ShoppingCart = () => {

  
  

  const shoppingCart = useContext(ProductContext).shoppingCart
  console.log(shoppingCart)
  let total = 0
  shoppingCart.map(e => {
    console.log(e.price * e.quantity)
    
    total = total + (e.price * e.quantity)
  })

  const emptyOrNot = shoppingCart.length
  let renderOrNot = false
  if (emptyOrNot >= 1) {
    renderOrNot = true
  } else {
    renderOrNot = false
  }


  
  return (
    <div>
        <Navbar />
        <div className='shopping-cart-section _container'>
          <div className='shopping-cart-products'>
            {
              renderOrNot ? (
                shoppingCart.map(shoppingCart => <ShoppingCartProduct key={shoppingCart.articleNumber} item={shoppingCart} />)
              ) : (<></>)
              // shoppingCart.map(shoppingCart => <ShoppingCartProduct key={shoppingCart.articleNumber} item={shoppingCart} />)
            }          
          </div>
          <div>
            {
              renderOrNot ? (
                <ShoppingCartDetails price={total}/>
              ) : (<>Your cart i empty</>)
            }
            {/* <ShoppingCartDetails price={total}/> */}
          </div>
        </div>
    </div>
  )
}

export default ShoppingCart