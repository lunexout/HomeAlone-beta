import React from "react";
import "./home.css";

import {BannerCarousel} from './../carousels/BannerCarousel'
import {ProductTypesCarousel} from './../carousels/ProductTypesCarousel'
import { HeadingContent } from "../headings/HeadingContent";
import {Footer} from './../footer/Footer'
import { Partners } from "../partners/Partners";
import { SmartBanner } from "../smartbanner/SmartBanner";
import {Spinner} from './../spinner/Spinner'
import {NavLink } from "react-router-dom";

import SAFEHOME from './../../assets/safehome.png'
import BANK from './../../assets/bank.png'

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
      ContentList.map((el,i) => {
        return(
          <>

            {i === 1 ? (
              <>
              <div style={{width: '100%', marginTop: 30, position:'relative', display:"flex",}}>
              <p>
                <span style={{position: 'absolute',top: "25%", left: '20%', transform: 'translate(-20%, -25%)',fontFamily: "Anton", color: '#fff'}} className='banner-font'>
                Full house lighting
                one-key control
                </span>
                <span style={{position: 'absolute', color: '#fff',top: "50%", left: '20%', transform: 'translate(-20%, -50%)', fontFamily: "Gowun Dodum",fontSize: 25}}>
                One panel can control multiple lights, turn<br/>
                off all lights with one button, and no need<br/>
                to switch one by one.
                </span>
              </p>
              <img style={{maxWidth: '100%', width: '100%', height: 'auto', display:"flex",flex: 2}} src="https://static.orvibo.com/guanwang_second/front/en/images/product/mixPadmini/left_1-e79f777a04.png" alt=""/>
              <img style={{maxWidth: '100%', width: '100%', height: 'auto', display:"flex",flex: 1}} src="https://static.orvibo.com/guanwang_second/front/en/images/product/mixPadmini/r_active_1-b21b5a6d78.png" alt=""/>
            </div>
            <HeadingContent key={el.id} f1={el.f1} f2={el.f2} desc={el.desc} img={el.img}/>
              </>

            ) : (
            <HeadingContent key={el.id} f1={el.f1} f2={el.f2} desc={el.desc} img={el.img}/>

            )}
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

      <div className="single-div" style={{marginTop:40}}>
      <h1 className="abouttitlewidth2 marginizer fontsizer font-bold leading-tight text-center colorizer">
                Products
            </h1>
            </div>
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
      <div className="single-div" style={{marginTop:40}}>

<h1 className="abouttitlewidth2 marginizer fontsizer font-bold leading-tight text-center colorizer">
          Services
      </h1>
      </div>
<div className="single-div" style={{display: 'flex', gap: 30,padding:10,marginTop:50, flexWrap: 'wrap', justifyContent:'center', alignItems:'center'}}>
  <div style={{display: 'flex', flexDirection:'column',flex: 1, gap: 30}}>
  <NavLink to='/services/smarthotel'  style={{textDecoration: 'none', color: 'black'}}>
  <div className="serv-boxes" style={{display: 'flex', height: 140,gap: 15, justifyContent:'center', alignItems:'center',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',paddingLeft: 10,borderRadius: 5
  }}>
    <svg xmlns="http://www.w3.org/2000/svg"width="40pt" height="40pt" viewBox="0 0 40 40" version="1.1">
    <g id="surface1">
        <path style={{stroke: 'none', fillRule: 'nonzero', fill: '#478ac9', fillOpacity: 1}} d="M 38.75 37.5 L 37.851562 37.5 L 36.835938 33.445312 C 36.699219 32.890625 36.199219 32.5 35.625 32.5 L 31.25 32.5 L 31.25 30.625 L 35 30.625 C 35.691406 30.625 36.25 30.066406 36.25 29.375 C 36.25 28.683594 35.691406 28.125 35 28.125 L 35 27.5 C 35 19.648438 28.9375 13.191406 21.25 12.550781 L 21.25 10.625 L 23.125 10.625 C 23.816406 10.625 24.375 10.066406 24.375 9.375 C 24.375 8.683594 23.816406 8.125 23.125 8.125 L 16.875 8.125 C 16.183594 8.125 15.625 8.683594 15.625 9.375 C 15.625 10.066406 16.183594 10.625 16.875 10.625 L 18.75 10.625 L 18.75 12.550781 C 11.0625 13.191406 5 19.648438 5 27.5 L 5 28.125 C 4.308594 28.125 3.75 28.683594 3.75 29.375 C 3.75 30.066406 4.308594 30.625 5 30.625 L 8.75 30.625 L 8.75 32.5 L 4.375 32.5 C 3.800781 32.5 3.300781 32.890625 3.164062 33.445312 L 2.148438 37.5 L 1.25 37.5 C 0.558594 37.5 0 38.058594 0 38.75 C 0 39.441406 0.558594 40 1.25 40 L 38.75 40 C 39.441406 40 40 39.441406 40 38.75 C 40 38.058594 39.441406 37.5 38.75 37.5 Z M 7.5 27.5 C 7.5 20.609375 13.105469 15 20 15 C 26.890625 15 32.5 20.609375 32.5 27.5 L 32.5 28.125 C 28.699219 28.125 8.617188 28.125 7.5 28.125 Z M 11.25 30.625 L 28.75 30.625 L 28.75 32.5 L 11.25 32.5 Z M 4.726562 37.5 L 5.351562 35 L 34.648438 35 L 35.273438 37.5 Z M 4.726562 37.5 " />
        <path style={{stroke: 'none', fillRule: 'nonzero', fill: '#478ac9', fillOpacity: 1}} d="M 1.25 21.25 L 3.75 21.25 C 4.441406 21.25 5 20.691406 5 20 C 5 19.308594 4.441406 18.75 3.75 18.75 L 1.25 18.75 C 0.558594 18.75 0 19.308594 0 20 C 0 20.691406 0.558594 21.25 1.25 21.25 Z M 1.25 21.25 " />
        <path style={{stroke: 'none', fillRule: 'nonzero', fill: '#478ac9', fillOpacity: 1}} d="M 36.25 21.25 L 38.75 21.25 C 39.441406 21.25 40 20.691406 40 20 C 40 19.308594 39.441406 18.75 38.75 18.75 L 36.25 18.75 C 35.558594 18.75 35 19.308594 35 20 C 35 20.691406 35.558594 21.25 36.25 21.25 Z M 36.25 21.25 " />
        <path style={{stroke: 'none', fillRule: 'nonzero', fill: '#478ac9', fillOpacity: 1}} d="M 7.625 9.394531 C 8.113281 9.882812 8.90625 9.882812 9.394531 9.394531 C 9.882812 8.90625 9.882812 8.113281 9.394531 7.625 L 7.625 5.859375 C 7.136719 5.371094 6.347656 5.371094 5.859375 5.859375 C 5.371094 6.347656 5.371094 7.136719 5.859375 7.625 Z M 7.625 9.394531 " />
        <path style={{stroke: 'none', fillRule: 'nonzero', fill: '#478ac9', fillOpacity: 1}} d="M 31.492188 9.757812 C 31.808594 9.757812 32.128906 9.636719 32.375 9.394531 L 34.140625 7.625 C 34.628906 7.136719 34.628906 6.347656 34.140625 5.859375 C 33.652344 5.371094 32.863281 5.371094 32.375 5.859375 L 30.605469 7.625 C 29.816406 8.414062 30.386719 9.757812 31.492188 9.757812 Z M 31.492188 9.757812 " />
        <path style={{stroke: 'none', fillRule: 'nonzero', fill: '#478ac9', fillOpacity: 1}} d="M 20 5 C 20.691406 5 21.25 4.441406 21.25 3.75 L 21.25 1.25 C 21.25 0.558594 20.691406 0 20 0 C 19.308594 0 18.75 0.558594 18.75 1.25 L 18.75 3.75 C 18.75 4.441406 19.308594 5 20 5 Z M 20 5 " />
      </g>
    </svg> 
    <div style={{fontSize: '4.5vmin', fontFamily: "Gowun Dodum",fontWeight:'bold'}}>
      Hotel Solution
    </div>
  </div>
  </NavLink>
  <NavLink to='/services/smartoffice'  style={{textDecoration: 'none', color: 'black'}}>
  <div className="serv-boxes" style={{display: 'flex', height: 140,gap: 15, justifyContent:'center', alignItems:'center',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',paddingLeft: 10,borderRadius: 5
  }}>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40pt" height="40pt" viewBox="0 0 40 40" version="1.1">
      <g id="surface1">
        <path style={{stroke: 'none', fillRule: 'nonzero', fill: '#478ac9', fillOpacity: 1}} d="M 9.378906 7.742188 C 9.378906 7.085938 8.84375 6.554688 8.1875 6.554688 L 5.667969 6.554688 C 5.011719 6.554688 4.476562 7.085938 4.476562 7.742188 L 4.476562 10.265625 C 4.476562 10.921875 5.011719 11.453125 5.667969 11.453125 L 8.1875 11.453125 C 8.84375 11.453125 9.378906 10.921875 9.378906 10.265625 Z M 8.207031 10.265625 C 8.207031 10.273438 8.199219 10.28125 8.1875 10.28125 L 5.667969 10.28125 C 5.65625 10.28125 5.648438 10.273438 5.648438 10.265625 L 5.648438 7.742188 C 5.648438 7.734375 5.65625 7.726562 5.667969 7.726562 L 8.1875 7.726562 C 8.199219 7.726562 8.207031 7.734375 8.207031 7.742188 Z M 8.207031 10.265625 " />
        <path style={{stroke: 'none', fillRule: 'nonzero', fill: '#478ac9', fillOpacity: 1}} d="M 15.648438 7.742188 C 15.648438 7.085938 15.113281 6.554688 14.460938 6.554688 L 11.9375 6.554688 C 11.28125 6.554688 10.746094 7.085938 10.746094 7.742188 L 10.746094 10.265625 C 10.746094 10.921875 11.28125 11.453125 11.9375 11.453125 L 14.460938 11.453125 C 15.113281 11.453125 15.648438 10.921875 15.648438 10.265625 Z M 14.476562 10.265625 C 14.476562 10.273438 14.46875 10.28125 14.460938 10.28125 L 11.9375 10.28125 C 11.925781 10.28125 11.917969 10.273438 11.917969 10.265625 L 11.917969 7.742188 C 11.917969 7.734375 11.925781 7.726562 11.9375 7.726562 L 14.460938 7.726562 C 14.46875 7.726562 14.476562 7.734375 14.476562 7.742188 Z M 14.476562 10.265625 " />
        <path style={{stroke: 'none', fillRule: 'nonzero', fill: '#478ac9', fillOpacity: 1}} d="M 9.378906 14.222656 C 9.378906 13.566406 8.84375 13.035156 8.1875 13.035156 L 5.667969 13.035156 C 5.011719 13.035156 4.476562 13.566406 4.476562 14.222656 L 4.476562 16.746094 C 4.476562 17.402344 5.011719 17.933594 5.667969 17.933594 L 8.1875 17.933594 C 8.84375 17.933594 9.378906 17.402344 9.378906 16.746094 Z M 8.207031 16.746094 C 8.207031 16.753906 8.199219 16.761719 8.1875 16.761719 L 5.667969 16.761719 C 5.65625 16.761719 5.648438 16.753906 5.648438 16.746094 L 5.648438 14.222656 C 5.648438 14.214844 5.65625 14.207031 5.667969 14.207031 L 8.1875 14.207031 C 8.199219 14.207031 8.207031 14.214844 8.207031 14.222656 Z M 8.207031 16.746094 " />
        <path style={{stroke: 'none', fillRule: 'nonzero', fill: '#478ac9', fillOpacity: 1}} d="M 15.648438 14.222656 C 15.648438 13.566406 15.113281 13.035156 14.460938 13.035156 L 11.9375 13.035156 C 11.28125 13.035156 10.746094 13.566406 10.746094 14.222656 L 10.746094 16.746094 C 10.746094 17.402344 11.28125 17.933594 11.9375 17.933594 L 14.460938 17.933594 C 15.113281 17.933594 15.648438 17.402344 15.648438 16.746094 Z M 14.476562 16.746094 C 14.476562 16.753906 14.46875 16.761719 14.460938 16.761719 L 11.9375 16.761719 C 11.925781 16.761719 11.917969 16.753906 11.917969 16.746094 L 11.917969 14.222656 C 11.917969 14.214844 11.925781 14.207031 11.9375 14.207031 L 14.460938 14.207031 C 14.46875 14.207031 14.476562 14.214844 14.476562 14.222656 Z M 14.476562 16.746094 " />
        <path style={{stroke: 'none', fillRule: 'nonzero', fill: '#478ac9', fillOpacity: 1}} d="M 8.1875 19.515625 L 5.667969 19.515625 C 5.011719 19.515625 4.476562 20.046875 4.476562 20.703125 L 4.476562 23.226562 C 4.476562 23.882812 5.011719 24.414062 5.667969 24.414062 L 8.1875 24.414062 C 8.84375 24.414062 9.378906 23.882812 9.378906 23.226562 L 9.378906 20.703125 C 9.378906 20.046875 8.84375 19.515625 8.1875 19.515625 Z M 8.207031 23.226562 C 8.207031 23.234375 8.199219 23.242188 8.1875 23.242188 L 5.667969 23.242188 C 5.65625 23.242188 5.648438 23.234375 5.648438 23.226562 L 5.648438 20.703125 C 5.648438 20.695312 5.65625 20.6875 5.667969 20.6875 L 8.1875 20.6875 C 8.199219 20.6875 8.207031 20.695312 8.207031 20.703125 Z M 8.207031 23.226562 " />
        <path style={{stroke: 'none', fillRule: 'nonzero', fill: '#478ac9', fillOpacity: 1}} d="M 14.460938 19.515625 L 11.9375 19.515625 C 11.28125 19.515625 10.746094 20.046875 10.746094 20.703125 L 10.746094 23.226562 C 10.746094 23.882812 11.28125 24.414062 11.9375 24.414062 L 14.460938 24.414062 C 15.113281 24.414062 15.648438 23.882812 15.648438 23.226562 L 15.648438 20.703125 C 15.648438 20.046875 15.113281 19.515625 14.460938 19.515625 Z M 14.476562 23.226562 C 14.476562 23.234375 14.46875 23.242188 14.460938 23.242188 L 11.9375 23.242188 C 11.925781 23.242188 11.917969 23.234375 11.917969 23.226562 L 11.917969 20.703125 C 11.917969 20.695312 11.925781 20.6875 11.9375 20.6875 L 14.460938 20.6875 C 14.46875 20.6875 14.476562 20.695312 14.476562 20.703125 Z M 14.476562 23.226562 " />
        <path style={{stroke: 'none', fillRule: 'nonzero', fill: '#478ac9', fillOpacity: 1}} d="M 38.136719 36.273438 L 37.265625 36.273438 L 37.265625 31.324219 C 37.265625 29.351562 35.945312 27.585938 34.050781 27.03125 L 30.503906 25.988281 C 30.402344 25.894531 30.289062 25.816406 30.160156 25.761719 L 29.425781 25.433594 C 29.21875 25.339844 28.996094 25.300781 28.773438 25.304688 L 28.773438 23.652344 C 29.941406 22.804688 30.753906 21.492188 30.929688 19.976562 C 31.507812 19.835938 31.9375 19.3125 31.9375 18.691406 L 31.9375 14.03125 C 31.9375 12.953125 31.078125 12.074219 30.007812 12.039062 C 29.949219 10.996094 29.082031 10.160156 28.019531 10.160156 L 23.183594 10.160156 C 22.738281 10.160156 22.308594 10.238281 21.914062 10.378906 C 21.917969 10.34375 21.917969 10.304688 21.917969 10.265625 L 21.917969 7.742188 C 21.917969 7.085938 21.386719 6.554688 20.730469 6.554688 L 18.207031 6.554688 C 17.550781 6.554688 17.019531 7.085938 17.019531 7.742188 L 17.019531 10.265625 C 17.019531 10.921875 17.550781 11.453125 18.207031 11.453125 L 20.324219 11.453125 C 19.929688 11.902344 19.636719 12.441406 19.484375 13.035156 L 18.207031 13.035156 C 17.550781 13.035156 17.019531 13.566406 17.019531 14.222656 L 17.019531 16.746094 C 17.019531 17.402344 17.550781 17.933594 18.207031 17.933594 L 19.367188 17.933594 L 19.367188 18.691406 C 19.367188 19.003906 19.472656 19.289062 19.652344 19.515625 L 18.207031 19.515625 C 17.550781 19.515625 17.019531 20.046875 17.019531 20.703125 L 17.019531 23.226562 C 17.019531 23.882812 17.550781 24.414062 18.207031 24.414062 L 20.730469 24.414062 C 21.386719 24.414062 21.917969 23.882812 21.917969 23.226562 L 21.917969 23.136719 C 22.109375 23.324219 22.3125 23.496094 22.527344 23.652344 L 22.527344 25.304688 C 22.3125 25.296875 22.089844 25.339844 21.886719 25.433594 L 21.164062 25.757812 C 21.039062 25.8125 20.921875 25.890625 20.824219 25.984375 L 17.253906 27.03125 C 15.359375 27.585938 14.039062 29.351562 14.039062 31.324219 L 14.039062 31.722656 C 14.039062 32.046875 14.300781 32.308594 14.625 32.308594 C 14.949219 32.308594 15.210938 32.046875 15.210938 31.722656 L 15.210938 31.324219 C 15.210938 29.867188 16.1875 28.566406 17.582031 28.15625 L 20.507812 27.296875 C 20.566406 27.460938 20.664062 27.617188 20.796875 27.75 L 22.796875 29.753906 C 22.796875 29.757812 22.800781 29.757812 22.800781 29.761719 C 23.050781 30 23.371094 30.125 23.695312 30.125 C 23.769531 30.125 23.84375 30.117188 23.917969 30.101562 L 24.332031 30.816406 L 23.367188 36.273438 L 18.878906 36.273438 L 18.878906 35 C 18.878906 34.679688 18.617188 34.414062 18.292969 34.414062 C 17.96875 34.414062 17.707031 34.679688 17.707031 35 L 17.707031 36.273438 L 15.210938 36.273438 L 15.210938 34.460938 C 15.210938 34.136719 14.949219 33.875 14.625 33.875 C 14.300781 33.875 14.039062 34.136719 14.039062 34.460938 L 14.039062 36.273438 L 11.601562 36.273438 L 11.601562 29.4375 L 11.675781 29.4375 C 12 29.4375 12.261719 29.175781 12.261719 28.851562 C 12.261719 28.527344 12 28.265625 11.675781 28.265625 L 4.621094 28.265625 C 4.296875 28.265625 4.035156 28.527344 4.035156 28.851562 C 4.035156 29.175781 4.296875 29.4375 4.621094 29.4375 L 4.695312 29.4375 L 4.695312 36.273438 L 2.574219 36.273438 L 2.574219 5.59375 C 2.574219 5.105469 2.96875 4.710938 3.457031 4.710938 L 22.9375 4.710938 C 23.425781 4.710938 23.824219 5.105469 23.824219 5.59375 L 23.824219 7.96875 C 23.824219 8.292969 24.085938 8.554688 24.410156 8.554688 C 24.734375 8.554688 24.996094 8.292969 24.996094 7.96875 L 24.996094 5.59375 C 24.996094 4.550781 24.210938 3.683594 23.199219 3.554688 L 23.199219 1.441406 C 23.203125 0.648438 22.554688 0 21.761719 0 L 4.636719 0 C 3.839844 0 3.195312 0.648438 3.195312 1.441406 L 3.195312 3.554688 C 2.183594 3.683594 1.402344 4.550781 1.402344 5.59375 L 1.402344 36.332031 C 0.597656 36.539062 0 37.269531 0 38.136719 C 0 39.164062 0.835938 40 1.863281 40 L 38.136719 40 C 39.164062 40 40 39.164062 40 38.136719 C 40 37.109375 39.164062 36.273438 38.136719 36.273438 Z M 4.636719 1.171875 L 21.761719 1.171875 C 21.910156 1.171875 22.03125 1.292969 22.03125 1.441406 L 22.03125 3.539062 L 4.367188 3.539062 L 4.367188 1.441406 C 4.367188 1.292969 4.488281 1.171875 4.636719 1.171875 Z M 36.09375 31.324219 L 36.09375 36.273438 L 33.597656 36.273438 L 33.597656 35 C 33.597656 34.679688 33.335938 34.414062 33.011719 34.414062 C 32.6875 34.414062 32.425781 34.679688 32.425781 35 L 32.425781 36.273438 L 27.941406 36.273438 L 26.972656 30.8125 L 27.390625 30.054688 C 27.46875 30.070312 27.550781 30.078125 27.628906 30.078125 C 27.949219 30.078125 28.269531 29.957031 28.519531 29.71875 L 30.519531 27.769531 C 30.65625 27.636719 30.757812 27.476562 30.820312 27.300781 L 33.722656 28.15625 C 35.117188 28.566406 36.09375 29.867188 36.09375 31.324219 Z M 25.285156 30.121094 L 24.917969 29.488281 L 25.703125 28.832031 L 26.398438 29.429688 L 26.011719 30.121094 Z M 28.949219 26.503906 L 29.683594 26.832031 C 29.722656 26.847656 29.734375 26.898438 29.703125 26.929688 L 27.703125 28.875 C 27.664062 28.914062 27.601562 28.917969 27.5625 28.882812 L 26.632812 28.085938 L 28.628906 26.542969 C 28.722656 26.472656 28.84375 26.457031 28.949219 26.503906 Z M 28.023438 11.332031 C 28.472656 11.332031 28.839844 11.699219 28.839844 12.152344 C 28.839844 12.734375 29.316406 13.210938 29.898438 13.210938 L 29.945312 13.210938 C 30.398438 13.210938 30.765625 13.578125 30.765625 14.03125 L 30.765625 16.507812 L 30.378906 16.507812 C 30.164062 16.507812 29.988281 16.332031 29.988281 16.117188 L 29.988281 15.582031 C 29.988281 14.648438 29.222656 13.964844 28.378906 13.964844 C 28.207031 13.964844 28.035156 13.992188 27.863281 14.046875 C 26.4375 14.519531 24.867188 14.519531 23.4375 14.046875 C 22.390625 13.703125 21.3125 14.480469 21.3125 15.582031 L 21.3125 16.117188 C 21.3125 16.332031 21.140625 16.507812 20.921875 16.507812 L 20.539062 16.507812 L 20.539062 13.976562 C 20.539062 12.519531 21.726562 11.332031 23.183594 11.332031 Z M 18.191406 10.265625 L 18.191406 7.742188 C 18.191406 7.734375 18.199219 7.726562 18.207031 7.726562 L 20.730469 7.726562 C 20.738281 7.726562 20.746094 7.734375 20.746094 7.742188 L 20.746094 10.265625 C 20.746094 10.273438 20.738281 10.28125 20.730469 10.28125 L 18.207031 10.28125 C 18.199219 10.28125 18.191406 10.273438 18.191406 10.265625 Z M 18.191406 16.746094 L 18.191406 14.222656 C 18.191406 14.214844 18.199219 14.207031 18.207031 14.207031 L 19.367188 14.207031 L 19.367188 16.761719 L 18.207031 16.761719 C 18.199219 16.761719 18.191406 16.753906 18.191406 16.746094 Z M 20.746094 23.226562 C 20.746094 23.234375 20.738281 23.242188 20.730469 23.242188 L 18.207031 23.242188 C 18.199219 23.242188 18.191406 23.234375 18.191406 23.226562 L 18.191406 20.703125 C 18.191406 20.695312 18.199219 20.6875 18.207031 20.6875 L 20.507812 20.6875 C 20.570312 20.933594 20.648438 21.171875 20.746094 21.402344 Z M 21.519531 19.625 C 21.492188 19.1875 21.128906 18.84375 20.691406 18.84375 C 20.609375 18.84375 20.539062 18.777344 20.539062 18.691406 L 20.539062 17.679688 L 20.921875 17.679688 C 21.785156 17.679688 22.484375 16.980469 22.484375 16.117188 L 22.484375 15.582031 C 22.484375 15.28125 22.777344 15.0625 23.074219 15.160156 C 24.738281 15.710938 26.570312 15.710938 28.234375 15.160156 C 28.519531 15.066406 28.816406 15.277344 28.816406 15.582031 L 28.816406 16.117188 C 28.816406 16.980469 29.519531 17.679688 30.378906 17.679688 L 30.765625 17.679688 L 30.765625 18.691406 C 30.765625 18.777344 30.695312 18.84375 30.613281 18.84375 C 30.175781 18.84375 29.8125 19.1875 29.785156 19.625 C 29.648438 21.796875 27.832031 23.5 25.652344 23.5 C 23.472656 23.5 21.65625 21.796875 21.519531 19.625 Z M 25.652344 24.671875 C 26.339844 24.671875 26.996094 24.539062 27.601562 24.300781 L 27.601562 25.855469 L 25.699219 27.328125 L 23.699219 25.835938 L 23.699219 24.300781 C 24.304688 24.539062 24.964844 24.671875 25.652344 24.671875 Z M 21.625 26.921875 C 21.59375 26.890625 21.609375 26.839844 21.644531 26.824219 L 22.367188 26.5 C 22.46875 26.453125 22.589844 26.46875 22.679688 26.535156 L 24.761719 28.089844 L 23.761719 28.925781 C 23.71875 28.960938 23.660156 28.957031 23.621094 28.921875 Z M 25.4375 31.292969 L 25.867188 31.292969 L 26.75 36.273438 L 24.554688 36.273438 Z M 5.867188 29.4375 L 10.429688 29.4375 L 10.429688 36.273438 L 5.867188 36.273438 Z M 38.136719 38.828125 L 1.863281 38.828125 C 1.484375 38.828125 1.171875 38.519531 1.171875 38.136719 C 1.171875 37.757812 1.484375 37.445312 1.863281 37.445312 L 38.136719 37.445312 C 38.515625 37.445312 38.828125 37.757812 38.828125 38.136719 C 38.828125 38.519531 38.515625 38.828125 38.136719 38.828125 Z M 38.136719 38.828125 " />
      </g>
    </svg>
    <div style={{fontSize: '4.5vmin', fontFamily: "Gowun Dodum",fontWeight:'bold'}}>
      Office Solution
    </div>
  </div>
  </NavLink>
  </div>
  <div style={{display: 'flex', flexDirection:'column', flex: 1, gap: 30}}>
  <NavLink to='/services/smarthome'  style={{textDecoration: 'none', color: 'black'}}>
  <div className="serv-boxes"  style={{display: 'flex', height: 140,gap: 15, justifyContent:'center', alignItems:'center',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',paddingLeft: 10,borderRadius: 5
  }}>
    <img src={SAFEHOME} alt="" style={{width: '40pt', height: '40pt'}}/>
    <div style={{fontSize: '4.5vmin', fontFamily: "Gowun Dodum",fontWeight:'bold'}}>
      Home Solution
    </div>
  </div>
  </NavLink>
  <NavLink to='/services/installment'  style={{textDecoration: 'none', color: 'black'}}>
  <div className="serv-boxes"style={{display: 'flex', height: 140,gap: 15, justifyContent:'center', alignItems:'center',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',paddingLeft: 10,borderRadius: 5
  }}>
    <img src={BANK} alt="" style={{width: '40pt', height: '40pt'}}/>
    <div style={{fontSize: '4.5vmin', fontFamily: "Gowun Dodum",fontWeight:'bold'}}>
      Installment
    </div>
  </div>
  </NavLink>
  </div>
</div>
      <div style={{width: '100%', marginTop: 30, position:'relative'}}>
        <p style={{position: 'absolute', color: '#fff',top: 20, left: '50%', transform: 'translateX(-50%)',fontFamily: "Anton"}} className='banner-font'>One MixPad Mini is equal to many smart products</p>
        <img style={{maxWidth: '100%', width: '100%', height: 'auto',}} src="https://static.orvibo.com/guanwang_second/front/en/images/product/mixPadmini/sec2-dde2fd6ca7.png" alt=""/>
      </div>
      {/* <Gallery/> */}
      
      <div style={{width: '100%', marginTop: 30, position:'relative'}}>
        <img style={{maxWidth: '100%', width: '100%', height: 'auto',}} src="https://static.orvibo.com/guanwang_second/front/en/images/xiaofang/new2-5142243776.jpg" alt=""/>
      </div>
      <Partners/>
      <div style={{width: '100%', marginTop: 30, position:'relative'}}>
        <img style={{maxWidth: '100%', width: '100%', height: 'auto',}} src="https://static.orvibo.com/guanwang_second/front/en/images/RF/rf_sec8_bg-44b226c53b.jpg" alt=""/>
      </div>
      {RenderProductList()}
      <div className="single-div" style={{display:'flex'}}>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',
        width:'60%',backgroundColor:'lightgray'}}>
          <span style={{fontFamily: "Anton",fontSize:'5vmin'}}>
          Before going out
          One key operation
          </span>
          <p className='clean' style={{fontSize:'3vmin'}}>
          Easy-to-operate interface.
          </p>
        </div>
        <div>
          <img style={{width: '100%', height: 'auto'}} src="https://static.orvibo.com/guanwang_second/front/images/products/mixpad_switch/sec6_1-9453ebf6fd.png" alt=""/>
        </div>
      </div>
      <div className="single-div" style={{display:'flex'}}>
        <div>
          <img style={{width: '100%', height: 'auto'}} src="https://static.orvibo.com/guanwang_second/front/images/products/mixpad_switch/sec6_3_en-3f2cce9470.png" alt=""/>
        </div>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',
        width:'60%',backgroundColor:'lightgray'}}>
          <span style={{fontFamily: "Anton",fontSize:'5vmin'}}>
          Mobile APP remote
          control outdoor
          </span>
          <p className='clean' style={{fontSize:'3vmin'}}>
          In summer, turn on the air conditioner
          remotely,Experience comfort
          immediately when you arrive home.
          </p>
        </div>
      </div>
      <Footer/>
      </>
    )}
    </>
  );
};
