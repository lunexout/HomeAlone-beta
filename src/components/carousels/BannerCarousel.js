import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";



import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);


export const BannerCarousel = () => {
  const Banners = [
    {id:1,img: 'https://homealone.ge/wp-content/uploads/2021/02/3.jpg', name: 'banner1'},
    {id:2,img: 'https://homealone.ge/wp-content/uploads/2021/02/1.jpg', name: 'banner2'},
    {id:3,img: 'http://www.homealone.ge/wp-content/uploads/2021/02/5.jpg', name: 'banner3'},
  ]
  
  const RenderBanners = () => {
    return(<>
    
    <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {Banners.map((el,index) => {
              return(
                <SwiperSlide key={el.img + el.id + index}>
                  <img
                    src={el.img}
                    alt={el.name}
                  />
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