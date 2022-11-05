import React from 'react'

const StarRating = (number) => {
  const stars = Array.from({length: number.number}, (_, index) => {
    return (
      <i className="fa-sharp fa-solid fa-star" key={index}></i>
    )
  })
  return (
    <span>{stars}</span>
  )
}

export default StarRating