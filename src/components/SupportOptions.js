import React from 'react'
import Track from '../images/track.jpg'
import Return from '../images/return.jpg'
import Price from '../images/price.webp'


const SupportOptions = () => {
  return (
    <div className='_container'>
        <div className='supportoptions'>
            <h4>Our Speciality</h4>
            <section className='flex'>
                <div className='info-box'>
                    <div className='text'>
                        <p>Track Your Order</p>
                        <a>Get Started</a>
                    </div>   
                    <div className='img-box'>
                        <img src={Track} />
                    </div>
                </div>

                <div className='info-box'>
                    <div className='text'>
                        <p>Make a Return</p>
                        <a>Get Started</a>
                    </div>
                    <div className='img-box'>
                        <img src={Return} />
                    </div>
                </div>

                <div className='info-box'>
                    <div className='text'>
                        <p>Request a Price</p>
                        <p>Adjustment</p>
                        <a>Get Started</a>
                    </div>
                    <div className='img-box'>
                        <img src={Price} />
                    </div>
                </div>
            </section>

        </div>

    </div>
  )
}

export default SupportOptions