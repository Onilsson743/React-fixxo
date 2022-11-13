import React from 'react'

const StarRating = ({number}) => {
  
  const stars = Array.from({length: number}, (e, id) => {
    
    return (
      <i className="stars fa-sharp fa-solid fa-star" key={id}  ></i>
    )
    
  })
  return (
    <>{stars}</>
  )
}

export default StarRating