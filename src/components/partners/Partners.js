import React from 'react'
import './Partners.css'
import './Partners.scss'

import IMG1 from './images/7th-heaven.jpg'
import IMG2  from './images/alley-palace-400x235.jpg'
import IMG3 from './images/aquamarine-400x235.jpg'
import IMG4  from './images/arfi.jpg'
import IMG5 from './images/batumipalace-400x235.jpg'
import IMG6  from './images/Black-Sea-Panorama-400x235.jpg'
import IMG7 from './images/Citron-400x235.jpg'
import IMG8  from './images/gumbati.jpg'
import IMG9 from './images/Guru-Holding-600x353.jpg'
import IMG10  from './images/like.jpg'
import IMG11 from './images/logo-grand-maision-400x235.jpg'
import IMG12  from './images/MJM-400x235.jpg'
import IMG13 from './images/nbg-600x353.jpg'
import IMG14  from './images/New-Project-400x235.jpg'
import IMG15 from './images/premium-group-400x235.jpg'
import IMG16  from './images/real-palace-400x235.jpg'
import IMG17  from './images/starpalace.jpg'

import { Footer } from './../footer/Footer'

const imageJSON = [
    {src: IMG1},
    {src: IMG2},
    {src: IMG3},
    {src: IMG4},
    {src: IMG5},
    {src: IMG6},
    {src: IMG7},
    {src: IMG8},
    {src: IMG9},
    {src: IMG10},
    {src: IMG11},
    {src: IMG12},
    {src: IMG13},
    {src: IMG14},
    {src: IMG15},
    {src: IMG16},
    {src: IMG17}
]

export const Partners = () => {
    React.useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return (
        <>
        <div className="partners-div" style={{marginTop: 100}}> 
            <h1 className="abouttitlewidth2 marginizer fontsizer font-bold leading-tight text-center colorizer">
                Partners
            </h1>
            <div className="flex-row">
                {imageJSON.map(img => {
                    return(
                        <div className="cardn">
                            <img src={img.src} alt='' style={{width: '100%', height: 'auto'}}/>
                        </div>
                    )
                })}
            </div>
            </div>
            <div style={{marginTop: 40}}></div>
        </>
    )
}

export default Partners
