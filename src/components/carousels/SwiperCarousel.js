import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";
import './newcss.css'
// //import BACKVIDEO from '../../videos/backvideo.mp4';
import photo0 from './0.jpg';
import photo1 from './1.jpg';
import photo2 from './2.jpg';

// import SwiperCore, { Pagination, Navigation } from "swiper/core";
// SwiperCore.use([Pagination, Navigation]);


export const SwiperCarousel = () => {

  // const Banners = [

  //   { id: 1, img: photo0, name: 'banner1' },
  //   { id: 2, img: photo1, name: 'banner2' },
  //   { id: 3, img: photo2, name: 'banner3' },
  // ]

  // const RenderBanners = () => {
  //   return (<>

  //     <Swiper
  //       slidesPerView={1}
  //       spaceBetween={30}
  //       // loop={true}
  //       pagination={{
  //         clickable: true,
  //       }}
  //       navigation={true}
  //       className="mySwiper"
  //     >
  //       {Banners.map((el, index) => {
  //         return (
  //           <SwiperSlide key={el.img + el.id + index}>
  //             <img
  //               src={el.img}
  //               alt={el.name}
  //             />

  //           </SwiperSlide>
  //         )
  //       })}
  //     </Swiper>
  //   </>)
  // }
  return (
    <>
      {/* <RenderBanners /> */}
      <section className="img-slider">
        <div className="slider-container">
          <div className="slide">
            <img alt="Home Alone" src={photo0} />
          </div>
          <div className="slide">
            <img alt="Home Alone" src={photo1} />
          </div>
          <div className="slide">
            <img alt="Home Alone" src={photo2} />
          </div>
        </div>
      </section>
    </>
  )
}