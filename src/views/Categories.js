import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import ProductContext from '../data/productContext'

const Categories = () => {

  const products = useContext(ProductContext)
  console.log(products)
  return (
    <div>
        <Navbar />
        
    </div>
  )
}

export default Categories