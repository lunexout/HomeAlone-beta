import React, {useState} from "react"
import './gallery.css';
// import CloseIcon from '@material-ui/icons/Close';

import CLOSE from './../../assets/close.svg'
import Img1 from './img/img1.jpg';
import Img2 from './img/img2.jpg';
import Img3 from './img/img3.jpg';
import Img4 from './img/img4.jpg';
import Img5 from './img/img5.jpg';
import Img6 from './img/img6.jpg';
import Img7 from './img/img7.jpg';
import Img8 from './img/img8.jpg';
import Img9 from './img/img9.jpg';
import Img10 from './img/img10.jpg';
import Img11 from './img/img11.jpg';
import Img12 from './img/img12.jpg';
import Img13 from './img/img13.jpg';
export const Gallery = () => {
    let data=[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id:  3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },

        
    ]
    const [model,setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc]= useState('');
    const getImg=(imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    React.useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return(
        <>
        <div className={model?"model open":"model"}>
        <button onClick={()=>setModel(false)} style={{backgroundColor: 'transparent',border: 'none',width: 100, height: 100}}><img src={CLOSE} alt='close'/></button>
            <img src={tempimgSrc} alt=''/>
        </div>
        <div className='gallery'>
            {data.map((item,index)=>{
                return(
                    <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width:'100%', borderRadius: 5}} alt='' />
                    </div>
                )
            })}
        </div>

        </>

    )
}
