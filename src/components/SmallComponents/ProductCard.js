import React, { useContext, useEffect, useState } from 'react';
import ProductContext from '../../data/productContext'
import StarRating from './StarRating';



const ProductCard = ({item}) => {

  const [imagePreview, setImagePreview] = useState(false);

  const showImage = () => {
    setImagePreview(!imagePreview)
  }

  

  // const [shoppingCart, setShoppingCart] = useState([]);
  // const allproducts = (useContext(ProductContext).all)
  // console.log(typeof allproducts)
  // const [products, setProducts] = useContext(ProductContext).products
  // (useContext(ProductContext).products.shoppingcart)

  // const addToCart = () => {
   
    // const id = item.articleNumber
    // console.log(id)
    // localStorage.setItem(id, JSON.stringify(item))
    // let test = localStorage.getItem(id)
    // console.log(localStorage)
    
    // localStorage.clear()
    
    // setShoppingCart([...shoppingCart, item])
    // console.log(shoppingCart)
  // }

  const addToCart = useContext(ProductContext).addToCart
  


  const handleclick = () => {
    addToCart(item)
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
                <span className="icon-links" onClick={handleclick} ><i className="fa-regular fa-bag-shopping"></i></span>
            </div>
            <button className="button-theme" onClick={showImage} >Quick View</button>
        </div>
        <div className='text-area'>
          <p>{item.category}</p>
          <h6>{item.name}</h6>
          <span className="star-rating">
            <StarRating number={item.rating} />
          </span>
          <h5>${item.price}</h5>
        </div>
    </div>
  )
}

export default ProductCard