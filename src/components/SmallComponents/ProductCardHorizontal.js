import React, { useState } from 'react'
import StarRating from './StarRating'


const ProductCardHorizontal = ({item}) => {

  
  return (
    <div className='_containersmall productcardhorizontal'>
        <div className='img-box' >
          <img src={item.imageName} />
        </div>
        <section className='description'>
            <p>{item.category}</p>
            <h6>{item.name}</h6>
            <span className="star-rating">
                <StarRating number={item.rating} />
            </span>
            <h5>${item.price}</h5>
        </section>
    </div>
  )
}

export default ProductCardHorizontal