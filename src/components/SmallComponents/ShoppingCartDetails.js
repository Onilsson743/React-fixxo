import React from 'react'

const ShoppingCartDetails = ({price}) => {
    // console.log(price)
  return (
    <div className='shoppingcartdetails'>
        <h1>Total Price</h1>
        <p>Products: <span>${price}</span></p>
        <p>Shipping: <span>$19.99</span></p>
        <h6>Total: <span>${price + 19.99}</span></h6>
        <button className='button-theme'>Proceed To Checkout</button>
    </div>
  )
}

export default ShoppingCartDetails
