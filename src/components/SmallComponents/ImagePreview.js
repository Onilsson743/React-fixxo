import React from 'react'

const ImagePreview = () => {
  return (
    <div className='imagepreview'>
      {/* <!-- Full-width images with number text --> */}
      <div className='fullsizeimg'>
        <div className="mySlides">
          <img src="img_woods_wide.jpg" />
        </div>
        <div className="mySlides">
            <img src="img_5terre_wide.jpg"  />
        </div>
        <div className="mySlides">
            <img src="img_mountains_wide.jpg"  />
        </div>

        {/* <!-- Next and previous buttons --> */}  
        <a className="prev" onclick="plusSlides(-1)">vänster</a>
        <a className="next" onclick="plusSlides(1)">höger</a>
      </div>

      {/* small images */}
      <div className="images">
        <div className="img">
          <img className="demo cursor" src="img_woods.jpg"  onclick="currentSlide(1)" alt="The Woods" />
        </div>
        <div className="img">
          <img className="demo cursor" src="img_5terre.jpg"  onclick="currentSlide(2)" alt="Cinque Terre" />
        </div>
        <div className="img">
          <img className="demo cursor" src="img_mountains.jpg" onclick="currentSlide(3)" alt="Mountains and fjords" />
        </div>
      </div>
    </div>
  )
}

export default ImagePreview