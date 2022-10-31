import React, { useState } from 'react'

const ImagePreview = () => {

  // const mainImage = document.getElementById("firstImage").src;
  // console.log(mainImage)
  const [currentImage, setCurrentImage] = useState(1);
  // document.getElementById("bigpicture").src = mainImage
  const setFullImage = (n) => {
      document.getElementById("bigpicture").src = n.target.src
  }




  return (
    <div className='imagepreview'>
      {/* <!-- Full-width images with number text --> */}
      <div className='fullsizeimg'>
          <img id='bigpicture' src={currentImage} />
      </div>

      {/* small images */}
      <div className="images">
        <img id='firstImage' onClick={setFullImage} src='https://cdn.pixabay.com/photo/2022/10/24/20/22/muhlviertel-7544316_1280.jpg' />
        <img onClick={setFullImage} src='https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg' />
        <img onClick={setFullImage} src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg' />        
      </div>
    </div>
  )
}

export default ImagePreview