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
        
    ]
    const [model,setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc]= useState('');
    const getImg=(imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return(
        <>
        <div className={model?"model open":"model"}>
            <img src={tempimgSrc} alt=''/>
            
            <button onClick={()=>setModel(false)} style={{backgroundColor: 'transparent',border: 'none',width: 100, height: 100}}><img src={CLOSE} alt='close'/></button>
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
