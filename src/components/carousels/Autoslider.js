import React from 'react'
import './Autoslider.css'

import photo1 from '../services/sec2_2-3d2d369dc4.jpg'
import photo2 from '../services/sec2_1-a63e90a5e2.jpg'
import photo3 from '../services/752287_middle.jpg'
const Autoslider = () => {
    return (
        <div className='slideblocker'>
            <section className="img-slider">
                <div className="slider-container">
                    <div className="slide">
                        <img alt="Home Alone" src={photo1} />
                    </div>
                    <div className="slide">
                        <img alt="Home Alone" src={photo2} />
                    </div>
                    <div className="slide">
                        <img alt="Home Alone" src={photo3} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Autoslider
