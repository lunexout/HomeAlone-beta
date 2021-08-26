import React from 'react'
import './Partners.css'
import './Partners.scss'



import IMG14 from './images/7th heaven.jpg'
import IMG2  from './images/Alley palace.jpg'
import IMG3 from './images/aquamarine.jpg'
import IMG4  from './images/arfi group.jpg'
import IMG5 from './images/Batumi palace.jpg'
import IMG6  from './images/Black sea panorama.jpg'
import IMG7 from './images/citron.jpg'
import IMG8  from './images/gumbati group.jpg'
import IMG9 from './images/guru holding.jpg'
import IMG10  from './images/like house.jpg'
import IMG11 from './images/calligraphy tower.jpg'
import IMG12  from './images/mjm group.jpg'
import IMG13 from './images/nbg.jpg'
import IMG1  from './images/al mare batumi.jpg'
import IMG15 from './images/premium group.jpg'
import IMG16  from './images/real palace.jpg'
import IMG17  from './images/star palace.jpg'
import IMG18  from './images/sunrise development.jpg'
import { Footer } from '../footer/Footer';
import { Link } from 'react-router-dom'

// import { Footer } from './../footer/Footer'

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
    {src: IMG17},
    {src: IMG18}
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
                {imageJSON.map((img,index) => {
                    return(
                       <Link to={`/about/partners/${index}`}>
                        <div className="cardn">
                            <img src={img.src} alt='' style={{width: '100%', height: 'auto'}}/>
                        </div>
                       </Link>
                    )
                })}
            </div>
            </div>
            <div style={{marginTop: 40}}></div>
            <Footer/>
        </>
    )
}

export default Partners
