import axios from 'axios'
import React, { useEffect } from 'react'

import dataJSON from './../../../API.json'

import { Spinner } from '../../spinner/Spinner'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"



import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Pagination,Navigation]);

export const SingleProduct = ({match}) => {
    const [singleProd, setSingleProd] = React.useState({})
    const [isSpinner, setSpinner] = React.useState(false)
    useEffect(() => {
        setSpinner(true)
        axios.get(`${dataJSON.API_URL}api/getconcretprod/${match.params.id}`).then(result => {
            setSingleProd(result.data);
            setSpinner(false)
        })
    },[match.params.id])
    return (
        <>
            {isSpinner ? (
                <>
                    <div style={{height: '100vh',backgroundColor: '#20232A', display: 'flex', justifyContent: 'center', alignItems:'center', borderTop: '4px solid #32363E'}}>
                        <Spinner/>
                    </div>
                </>
            ) : (
                <>
                <div className='single-div'>
                    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap: 30}} className="single-prod-cont">
                        <Swiper style={{display:'flex', flex:1.4}} pagination={{
                        "type": "progressbar"
                        }} navigation={true} className="mySwiper">
                           
                            {singleProd.images && singleProd.images.map(el => {
                                return(
                                    <>
                                        <SwiperSlide>
                                            <img src={`${dataJSON.API_URL}public/images/` + el.url} alt="" style={{ width: 700, height: 'auto', maxWidth: '100%'}}/>
                                        </SwiperSlide>
                                    </>
                                )
                            })}
                        </Swiper>
                        <div style={{display:'flex', flex:1, padding: 10}} className='single-desc'>
                            <div style={{dsiplay:'flex', flexDirection:'column', alignItems: 'left', textAlign: 'left'}}>
                             <h1 className='single-prod-header'>{singleProd.name}</h1>
                            {singleProd.description && singleProd.description.split('●').map((it,i) => {
                                return(<><p> {i > 0 && <><span style={{color: '#009073'}}>●</span></>} {it}</p></>)
                            })}
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', width: '100%', margin: '30px auto'}}>
                        {singleProd.properties && singleProd.properties.map(i => {
                            return(
                                <>
                                <div style={{display:'flex'}} className='row-div'>
                                <div style={{width: '100%', maxWidth: '100%', padding: 8}} className='prop-div'>
                                    {i.prop}:
                                </div>
                                <div style={{width: '100%',maxWidth: '100%', padding: 8}} className='value-div'>
                                    {i.value}
                                </div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                
                </>
            )}
        </>
    )
}