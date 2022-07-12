import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import engvideo from "./../../assets/eng full.mp4";
import geovideo from "./../../assets/geo full.mp4";
import ruvideo from "./../../assets/ru full.mp4";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

export const BannerCarousel = () => {
  let bckVideo;
  if (localStorage.getItem("lang") === "ru") {
    bckVideo = ruvideo;
  } else if (localStorage.getItem("lang") === "ge") {
    bckVideo = geovideo;
  } else {
    bckVideo = engvideo;
  }
  const Banners = [{ id: 1, img: bckVideo, name: "banner1" }];

  const RenderBanners = () => {
    return (
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {Banners.map((el, index) => {
            return (
              <SwiperSlide key={el.img + el.id + index}>
                <video
                  style={{ borderTop: "3px solid #30343C" }}
                  id="mainvideo"
                  className="video-container"
                  autoPlay
                  loop
                  muted
                >
                  <source src={el.img} type="video/mp4" />
                </video>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  };
  return (
    <>
      <RenderBanners />
    </>
  );
};
