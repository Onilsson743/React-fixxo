import React from 'react'

const ProductCard = () => {
  return (
    <div className="product-card">
        <div className="img-window">
            <div className="icons">
                <a className="icon-links"><i className="fa-regular fa-code-compare"></i></a>
                <a className="icon-links"><i className="fa-regular fa-heart"></i></a>
                <a className="icon-links"><i className="fa-regular fa-bag-shopping"></i></a>
            </div>
            <button className="button-theme">Quick View</button>
        </div>
        <div className='text-area'>
          <p>Category</p>
          <h6>Modern Black Blouse</h6>
          <span className="star-rating">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
          </span>
          <h5>$35.00</h5>
        </div>
    </div>
  )
}

export default ProductCard