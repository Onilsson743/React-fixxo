import React, { useState } from 'react'
import Product from '../../data/products.json'

const ImagePreview = () => {

  const firstImage = Product[0].images[0]
  const [currentImage, setCurrentImage] = useState(firstImage);
  
  const setFullImage = (n) => {
    setCurrentImage(n.target.src)
  }

 

  return (
    <div className='imagepreview'>
      {/* <!-- Full-width images with number text --> */}
      <div className='fullsizeimg'>
          <img id='bigpicture' src={currentImage} />
      </div>

      {/* small images */}
      <div className="images">
        <img id='firstImage' onClick={setFullImage} src={Product[0].images[0]} />
        <img onClick={setFullImage} src={Product[0].images[1]} />
        <img onClick={setFullImage} src={Product[0].images[2]} />        
      </div>
    </div>
  )
}

export default ImagePreview