import React, { useEffect } from 'react'
import photo1 from './sec2_2-3d2d369dc4.jpg'
import photo2 from './sec2_1-a63e90a5e2.jpg'
import { useState } from 'react/cjs/react.development'
export const Will = () => {
    const [currentImage, setCurrentImage] = useState({ img: photo1, animateTxt: 'top', txt: 'img1' })

    const renderImages = (img, animateTxt) => {
        return <img className={`mySlides w3-animate-${animateTxt}`} src={img} style={{ width: '100%' }} alt="home  alone" />
    }
    useEffect(() => {
        setTimeout(() => {
            currentImage.txt === 'img1' ? setCurrentImage(() => { return { img: photo2, animateTxt: "bottom", txt: 'img2' } }) :
                setCurrentImage(() => {
                    return { img: photo1, animateTxt: 'top', txt: 'img1' }
                })
        }, 5000)
    }, [currentImage]);


    return (
        <div>
            <div className="indexPage" style={{ alignContent: 'center' }}>
                <div className="w3-content w3-section" style={{ maxWidth: '100%', alignContent: 'center' }}>
                    {renderImages(currentImage.img, currentImage.animateTxt)}
                </div>
            </div>

            <script>


            </script>
        </div >
    )
}


