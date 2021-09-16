import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

//import BACKVIDEO from '../../videos/backvideo.mp4';
import engvideo from '../../videos/eng full.mp4';
import geovideo from '../../videos/geo full.mp4';
import ruvideo from '../../videos/ru full.mp4';

import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);


export const BannerCarousel = () => {
  let bckVideo;
  if(localStorage.getItem('lang') === 'ru'){
    bckVideo = ruvideo
  }else if(localStorage.getItem('lang') === 'ge'){
    bckVideo = geovideo
  }else {
    bckVideo = engvideo
  }
  const Banners = [
    
    {id:1,img: bckVideo, name: 'banner1'},
    // {id:2,img: 'https://homealone.ge/wp-content/uploads/2021/02/1.jpg', name: 'banner2'},
    // {id:3,img: 'http://www.homealone.ge/wp-content/uploads/2021/02/5.jpg', name: 'banner3'},
  ]
  
  const RenderBanners = () => {
    return(<>
    
    <Swiper
          slidesPerView={1}
          spaceBetween={30}
          // loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {Banners.map((el,index) => {
              return(
                <SwiperSlide key={el.img + el.id + index}>
                  {/* <img
                    src={el.img}
                    alt={el.name}
                  /> */}
                  <video style={{borderTop: '3px solid #30343C'}} id="mainvideo" className="video-container" autoPlay loop muted>
                    <source src={el.img} type="video/mp4" />
                  </video>
                </SwiperSlide>
              )
            })}
        </Swiper>
    </>)
  }
    return(
        <>
        <RenderBanners/>
        </>
    )
}