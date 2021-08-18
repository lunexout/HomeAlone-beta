import React from "react";
import "./home.css";

import {BannerCarousel} from './../carousels/BannerCarousel'
import {ProductTypesCarousel} from './../carousels/ProductTypesCarousel'
import { HeadingContent } from "../headings/HeadingContent";
import {Footer} from './../footer/Footer'
import { Gallery } from "../gallery/Gallery";
import { SmartBanner } from "../smartbanner/SmartBanner";
import {Spinner} from './../spinner/Spinner'

const ContentList = [
  {
    id: 1,
    f1: `MIXPAD'S ALL-IN-ONE GATEWAY PANEL`,
    f2: `ONE PANEL, ALL SMART`,
    desc: `The powerful system hardware integrates the functions of different
    devices. Convenient operation and excellent interaction make the home
    life experience more natural and comfortable.`,
    img: `http://homealone.ge/wp-content/uploads/2021/04/sec2_1-a63e90a5e2.jpg` 
  },
  {
    id: 2,
    f1: `HOME AI 3.0 FULL HOUSE`,
    f2: `SMART HOME OPERATING SYSTEM`,
    desc: `Brand-new UI design , efficient interactive and
    AI voice assistant, creating a new humanized
    smart home experience for users.`,
    img: `http://homealone.ge/wp-content/uploads/2021/07/sec3-b79d0d06c8.png`
  }
]

const RenderProductList = () => {
    return(
      ContentList.map(el => {
        return(
          <>
            <HeadingContent key={el.id} f1={el.f1} f2={el.f2} desc={el.desc} img={el.img}/>
          </>
        )
      })
    )
}

export const Home = () => {
  const [spinner, setSpinner] = React.useState(false)

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
      <div style={{height: '100vh',backgroundColor: '#20232A', display: 'flex', justifyContent: 'center', alignItems:'center', borderTop: '4px solid #32363E'}}>
      <Spinner/>
      </div>

      </>
    ): (
      <>
      <BannerCarousel/>
      <SmartBanner/>
      <ProductTypesCarousel ProductList={[
        {mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/audio.png', name: 'Audio Products', type: 'Audio_Products'},
      {mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/interact.png', name: 'Interaction Center', type: 'Interaction_Center'},
      {mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/light.png', name: 'Smart Lighting', type: 'Smart_Lighting'},
      {mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/security.png', name: 'Home Security', type: 'Home_Security'},
      {mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/curtain.png', name: 'Smart R+T', type: 'Smart_R+T'},
      {mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/hvac.png', name: 'Home Entertaiment', type: 'Home_Entertaiment'},
      {mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/Iynque-Flurry-Extras-9-Apple-Remote-1_80x80.png', name: 'Smart HVAC', type: 'Smart_HVAC'},
      {mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/home.png', name: 'Domestic Appliances', type: 'Domestic_Appliances'},
      ]}/>
      <Gallery/>
      {RenderProductList()}
      <Footer/>
      </>
    )}
    </>
  );
};
