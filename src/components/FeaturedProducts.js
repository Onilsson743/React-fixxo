import React, { useState } from 'react'
import ProductCard from './SmallComponents/ProductCard'

const FeaturedProducts = () => {


  const [products, setProducts] = useState([
    { id: 1, productName: "Romdalseggen", category: "Norway", rating: 5, price: 24.99, imgUrl: "https://fjell-vandring.net/wp-content/gallery/romsdalseggen/galleri-romsdalseggen_fottur_fjell-vandringas1.JPG" },
    { id: 2, productName: "Kjerag serpentine road", category: "Norway", rating: 5, price: 34.99, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHd58BXj8XZUD7QpTM8zOZDjddnzKnrbo3Lg&usqp=CAU" },
    { id: 3, productName: "Kjerag Rock", category: "Norway", rating: 5, price: 19.99, imgUrl: "https://img1.oastatic.com/img2/35906387/834x417r/kjeragbolten.jpg" },
    { id: 4, productName: "Atlanterhavsveien", category: "Norway", rating: 5, price: 35.00, imgUrl: "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,f_jpg,h_350,q_64,w_516/https://res.cloudinary.com/djew0njor/image/upload/v1649416432/Nordvest/Bedrifter/Atlanterhavsveien%2520Sj%25C3%25B8stuer/Eivind_Holm_ok_a%25CC%258A_bruke_upw5rq.jpg" },
    { id: 5, productName: "Modern Black Blouse", category: "Fashion", rating: 5, price: 35.00, imgUrl: "" },
    { id: 6, productName: "Modern Black Blouse", category: "Fashion", rating: 5, price: 35.00, imgUrl: "" },
    { id: 7, productName: "Modern Black Blouse", category: "Fashion", rating: 5, price: 35.00, imgUrl: "" },
    { id: 8, productName: "Modern Black Blouse", category: "Fashion", rating: 5, price: 35.00, imgUrl: "" }
    
  ]);
  const items = products.map;
  console.log(items.productName);

  return (
    <section className='featured-products'>
        <h4>Featured Products</h4>
        <div className='grid'>
          {
            products.map(product => <ProductCard key={product.id} item={product} />)
          }
        </div>
    </section>
  )
}

export default FeaturedProducts