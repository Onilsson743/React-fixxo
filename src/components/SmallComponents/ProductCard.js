import React, { useContext, useState } from 'react';
import ProductContext from '../../data/productContext'


const ProductCard = ({item}) => {

  const [imagePreview, setImagePreview] = useState(false);

  const showImage = () => {
    setImagePreview(!imagePreview)
  }

  const [shoppingCart, setShoppingCart] = useContext(ProductContext).shoppingCart
  const allproducts = useContext(ProductContext).all
  const addToCart = () => {
    
    console.log(allproducts)
    console.log(item)
    setShoppingCart(item)
    console.log(shoppingCart)
    

  }

  
  return (
    <div className="product-card">
        <div id='imagePreview' onClick={showImage} className={`${imagePreview ? "d-flex" : ""}`} >
          <img src={item.imageName} />
        </div>
        <div className="img-window">
            <img src={item.imageName} />
            
            <div className="icons">
                <a className="icon-links"><i className="fa-regular fa-code-compare"></i></a>
                <a className="icon-links"><i className="fa-regular fa-heart"></i></a>
                <a className="icon-links" onClick={addToCart} ><i className="fa-regular fa-bag-shopping"></i></a>
            </div>
            <button className="button-theme" onClick={showImage} >Quick View</button>
        </div>
        <div className='text-area'>
          <p>{item.category}</p>
          <h6>{item.name}</h6>
          <span className="star-rating">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
          </span>
          <h5>${item.price}</h5>
        </div>
    </div>
  )
}

export default ProductCard