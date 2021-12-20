import React from "react";
import "./home.css";

import { BannerCarousel } from './../carousels/BannerCarousel'
//import { HeadingContent } from "../headings/HeadingContent";
import { Footer } from './../footer/Footer'
import { SmartBanner } from "../smartbanner/SmartBanner";
import { Spinner } from './../spinner/Spinner'
// import { Will } from "../services/Will";
import { ProductBann } from "../products/ProductBann";
import { Mainservices } from "../services/Mainservices";
import MessengerCustomerChat from 'react-messenger-customer-chat';


import { useTranslation } from 'react-i18next';
import { Partnersfor } from "../partners/Partnersfor";
import { SwiperCarousel } from "../carousels/SwiperCarousel";
import { Shower } from "./Shower";
import Autoslider from "../carousels/Autoslider";


export const Home = () => {
  const [spinner, setSpinner] = React.useState(false)
  const { t } = useTranslation();

  React.useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 700)
  }, [])



  return (
    <>
      {spinner ? (
        <>
          <div style={{ height: '100vh', backgroundColor: '#20232A', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '4px solid #32363E' }}>
            <Spinner />
          </div>

        </>
      ) : (
        <>
          <BannerCarousel />
          <SmartBanner />
          <div className="single-div" style={{ marginTop: 40 }}>
            <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>
              {t('PRODUCTS')}
            </h1>
          </div>
          <ProductBann />
          <div className="single-div" style={{ marginTop: 40 }}>
            <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>
              {t('SERVICES')}
            </h1>
          </div>


          <Mainservices />
          <div className="single-div" style={{ marginTop: 40 }}>
            <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>
              Click and Explore
            </h1>
          </div>
          <Shower />

          <div className="single-div" style={{ marginTop: 40 }}>
            <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>
              {t('TOP PRODUCT')}
            </h1>
          </div>


          
          <Autoslider />

          {/* <div style={{ width: '100%', marginTop: 30, position: 'relative' }}>
            <img style={{ maxWidth: '100%', width: '100%', height: 'auto', }} src="https://static.orvibo.com/guanwang_second/front/en/images/xiaofang/new2-5142243776.jpg" alt="" />
          </div>
          <div style={{ width: '100%', marginTop: 30, position: 'relative' }}>
            <img style={{ maxWidth: '100%', width: '100%', height: 'auto', }} src="https://static.orvibo.com/guanwang_second/front/en/images/RF/rf_sec8_bg-44b226c53b.jpg" alt="" />
          </div> */}

          <div className="single-div" style={{ marginTop: 40 }}>
            <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>

              {t('HomeController')}
            </h1>
          </div>

          <SwiperCarousel />
          <div style={{ display: 'block' }}>
            <div className="single-div slideblocker" style={{ display: 'flex', }}>
              <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
                width: '60%', backgroundColor: 'lightgray'
              }}>
                <span style={{ fontFamily: "Anton", fontSize: '5vmin' }}>
                  {t('prodiskr12')}
                </span>
                <p className='clean' style={{ fontSize: '3vmin' }}>
                  {t('prodiskr13')}
                </p>
              </div>
              <div>
                <img style={{ width: '100%', height: 'auto' }} src="https://static.orvibo.com/guanwang_second/front/images/products/mixpad_switch/sec6_1-9453ebf6fd.png" alt="" />
              </div>
            </div></div>


          <div className="single-div" style={{ display: 'flex' }}>
            <div>
              <img style={{ width: '100%', height: 'auto' }} src="https://static.orvibo.com/guanwang_second/front/images/products/mixpad_switch/sec6_3_en-3f2cce9470.png" alt="" />
            </div>
            <div style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
              width: '60%', backgroundColor: 'lightgray'
            }}>
              <span style={{ fontFamily: "Anton", fontSize: '5vmin' }}>
                {t('prodiskr14')}
              </span>
              <p className='clean' style={{ fontSize: '3vmin' }}>
                {t('prodiskr15')}
              </p>
            </div>
          </div>
          {/* <div style={{ width: '100%', marginTop: 30, position: 'relative' }}>
            <p style={{ position: 'absolute', color: '#fff', top: 20, left: '50%', transform: 'translateX(-50%)', fontFamily: "Anton" }} className='banner-font'>{t('prodiskr1')}</p>
            <img style={{ maxWidth: '100%', width: '100%', height: 'auto', }} src="https://static.orvibo.com/guanwang_second/front/en/images/product/mixPadmini/sec2-dde2fd6ca7.png" alt="" />
          </div> */}

          <Partnersfor />


          <MessengerCustomerChat
            pageId="112617230247518"
            appId="436362961214275"
          />
          <Footer />
        </>
      )
      }
    </>
  );
};